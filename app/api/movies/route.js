import connectToDatabase from '@/libs/mongodb';
import Movie from '@/models/movie';
import { NextResponse } from 'next/server';

export async function GET(req) {
  await connectToDatabase();

  const { searchParams } = new URL(req.url);
  const page = Number(searchParams.get('page')) || 1;
  const limit = Number(searchParams.get('limit')) || 20;
  const skip = (page - 1) * limit;
  const movies = await Movie.find().skip(skip).limit(limit);
  const total = await Movie.countDocuments();




  return NextResponse.json({ movies, total, totalPages: Math.ceil(total / limit), currentPage: page }, { status: 200 });
}
