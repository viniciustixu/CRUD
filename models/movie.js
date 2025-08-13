import mongoose, { Schema } from 'mongoose';

const movieSchema = new Schema(
  {
    plot: String,
    genres: Array,
    runtime: Number,
    cast: Array,
    poster: String,
    title: { type: String, unique: true },
    fullplot: String,
    languages: Array,
    released: Date,
    directors: Array,
    rated: String,
    awards: {
      wins: Number,
      nominations: Number,
      text: String
    },
    lastupdated: String,
    year: Number,
    imdb: {
      rating: Number,
      votes: Number,
      id: Number
    },
    countries: Array,
    type: String,
    tomatoes: {
      viewer: {
        rating: Number,
        numReviews: Number,
        meter: Number
      },
      fresh: Number,
      critics: {
        rating: Number,
        numReviews: Number,
        meter: Number
      },
      rotten: Number,
      lastupdated: Date
    },
    num_mflix_comments: Number
  }
);

const Movie = mongoose.models.Movie || mongoose.model('Movie', movieSchema);

export default Movie;
