import connectToDatabase from '@/libs/mongodb';
import Movie from '@/models/movie';
import { NextResponse } from 'next/server';

export async function GET(req, { params }) {
  await connectToDatabase();
  const { id } = await params;
  const movie = await Movie.findById(id);
  return NextResponse.json({ movie }, { status: 200 });
}

export async function PUT(req, { params }) {
  await connectToDatabase();
  const { id } = await params;
  const body = await req.json();
  const movie = await Movie.findByIdAndUpdate(id, body, { new: true });
  return NextResponse.json({ movie, _id: movie._id }, { status: 200 });
}

export async function DELETE(req, { params }) {
  await connectToDatabase();
  const { id } = await params;
  const movie = await Movie.findByIdAndDelete(id);
  return NextResponse.json({ movie }, { status: 200 });
}