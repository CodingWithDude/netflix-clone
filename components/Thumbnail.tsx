import Image from 'next/image';
import { Movie } from '../typings';

interface Props {
  // For Firebase
  // movie: Movie | DocumentData;
  movie: Movie;
}

const Thumbnail = ({ movie }: Props) => {
  return (
    <div className="relative h-[200px] min-w-[150px] cursor-pointer transition duration-200 ease-out md:h-[300px] md:min-w-[200px] md:hover:scale-105">
      <Image
        src={`https://image.tmdb.org/t/p/w500${
          movie.poster_path || movie.backdrop_path
        }`}
        className="rounded-sm object-cover md:rounded"
        layout="fill"
      />
    </div>
  );
};

export default Thumbnail;
