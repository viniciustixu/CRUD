import connectToDatabase from '@/libs/mongodb';
import Movie from '@/models/movie';
import { NextResponse } from 'next/server';

export async function GET(req) {
  await connectToDatabase();

  const { searchParams } = new URL(req.url);
  const page = Number(searchParams.get('page')) || 1;
  const limit = Number(searchParams.get('limit')) || 20;
  const skip = (page - 1) * limit;

  const query = {};

  const year = searchParams.get('year');
  if (year) {
    query.year = { $gte: Number(year) };
  }

  const genres = searchParams.get('genres');
  if (genres) {
    query.genres = { $all: genres.split(',') };
  }

  const search = searchParams.get('search');
  if (search) {
    query.$or = [
      { title: { $regex: search, $options: 'i' } },
      { plot: { $regex: search, $options: 'i' } },
      { fullplot: { $regex: search, $options: 'i' } }
    ];
  }


  const movies = await Movie.find(query).skip(skip).limit(limit);
  const total = await Movie.countDocuments(query);




  return NextResponse.json({ movies, total, totalPages: Math.ceil(total / limit), currentPage: page }, { status: 200 });
}

export async function POST(req) {
  const { title, year, genres, plot, runtime, cast, poster, fullplot, languages, released, directors, rated, awards, lastupdated, imdb, countries, type, tomatoes } = await req.json();

  await connectToDatabase();
  const existingMovie = await Movie.findOne({ title });
  if (existingMovie) {
    return NextResponse.json({ message: 'Movie already exists' }, { status: 400 });
  }
  const newMovie = new Movie({ title, year, genres, plot, runtime, cast, poster, fullplot, languages, released, directors, rated, awards, lastupdated, imdb, countries, type, tomatoes });
  await newMovie.save();
  return NextResponse.json({ message: 'Movie created successfully', _id: newMovie._id }, { status: 201 });
}