import connectToDatabase from '@/libs/mongodb';
import Movie from '@/models/movie';
import { NextResponse } from 'next/server';

export async function GET(req) {
  await connectToDatabase();
  const movie = await Movie.findOne({ title: 'The Great Train Robbery' });
  return NextResponse.json({ movie }, { status: 200 });
}

// Continuar daqui
// Esse get tá retornando null