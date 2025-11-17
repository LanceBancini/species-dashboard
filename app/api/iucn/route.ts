import { NextResponse } from 'next/server';

import iucnData from '../../../src/data/iucn-data.json';

export async function GET() {
  try {
    return NextResponse.json(iucnData);
  } catch (error) {
    console.error('Error loading IUCN data:', error);
    return NextResponse.json({ error: 'Failed to load IUCN data' }, { status: 500 });
  }
}
