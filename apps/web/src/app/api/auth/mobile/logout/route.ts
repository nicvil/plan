import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  // TODO: Implement mobile logout
  return NextResponse.json(
    { error: 'Not implemented' },
    { status: 501 },
  );
}
