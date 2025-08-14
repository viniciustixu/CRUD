import connectToDatabase from '@/libs/mongodb';
import Movie from '@/models/movie';
import { NextResponse } from 'next/server';

export async function GET(req) {
  await connectToDatabase();
  const movie = await Movie.find().limit(100);
  return NextResponse.json({ movie }, { status: 200 });
}
