import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  // TODO: Implement with database
  return NextResponse.json({
    data: [],
    total: 0,
    page: 1,
    pageSize: 20,
    hasMore: false,
  });
}

export async function POST(request: NextRequest) {
  // TODO: Implement with database and auth
  return NextResponse.json(
    { error: 'Not implemented' },
    { status: 501 },
  );
}
