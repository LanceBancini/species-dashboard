import { NextResponse } from 'next/server';

export async function GET() {
  try {
    console.log('🔍 Testing CORS + API Key to IUCN API...');

    const apiKey = process.env.IUCN_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        {
          success: false,
          error: '❌ API Key not found in environment variables'
        },
        { status: 500 }
      );
    }

    const response = await fetch('https://api.iucnredlist.org/api/v4/information/api_version', {
      headers: {
        Authorization: `Bearer ${apiKey}`
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }

    const data = await response.json();

    return NextResponse.json({
      success: true,
      cors: '✅ WORKS - No CORS issues',
      api_key: '✅ VALID',
      data: data
    });
  } catch (error) {
    console.error('❌ Test failed:', error);

    // ✅ Type-safe error handling
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    const response = error instanceof Response ? error : null;

    // Unterscheide Fehler-Typen
    const isCorsError = errorMessage.includes('CORS') || errorMessage.includes('Origin');
    const isAuthError = response?.status === 403 || errorMessage.includes('403');

    return NextResponse.json(
      {
        success: false,
        error: errorMessage,
        type: isCorsError ? 'CORS_ERROR' : isAuthError ? 'AUTH_ERROR' : 'NETWORK_ERROR'
      },
      { status: 500 }
    );
  }
}
