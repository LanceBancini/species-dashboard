import { NextResponse } from 'next/server';
import storyData from '../../../../../src/data/story-data.json';

export async function GET(request: Request, { params }: { params: Promise<{ genus: string; epithet: string }> }) {
  try {
    const { genus, epithet } = await params; // ← await hinzugefügt

    if (genus.toLowerCase() === 'nomascus' && epithet.toLowerCase() === 'nasutus') {
      return NextResponse.json(storyData);
    }

    return NextResponse.json({ error: 'Species not found' }, { status: 404 });
  } catch (error) {
    console.error('Error loading story data:', error);
    return NextResponse.json({ error: 'Failed to load story data' }, { status: 500 });
  }
}
