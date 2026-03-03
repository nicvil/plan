import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  // TODO: Implement token refresh
  return NextResponse.json(
    { error: 'Not implemented' },
    { status: 501 },
  );
}
