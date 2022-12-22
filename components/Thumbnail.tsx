import Image from 'next/image'
import { Movie } from '../typings'
import { useRecoilState } from 'recoil'
import { modalState, movieState } from '../atoms/modalAtom'

interface Props {
  // When using firebase
  //   movie: Movie | DocumentData
  movie: Movie
}

function Thumbnail({ movie }: Props) {
  interface ImageLoaderProp {
    src: string
  }
  const [currentMovie, setCurrentMovie] = useRecoilState(movieState)
  const [showModal, setShowModal] = useRecoilState(modalState)
  const myLoader = ({ src }: ImageLoaderProp): string => {
    return `https://image.tmdb.org/t/p/w500${src}?&q=${75}`
  }
  return (
    <div
      className="relative h-28 min-w-[180px] cursor-pointer 
    transition duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105"
      onClick={() => {
        setCurrentMovie(movie)
        setShowModal(true)
      }}
    >
      <Image
        loader={myLoader}
        src={
          `${movie?.backdrop_path}`
            ? `${movie?.backdrop_path}`
            : `${movie?.poster_path}`
        }
        alt={`${movie?.title}`}
        fill
        // objectFit="contain"
      />
    </div>
  )
}

export default Thumbnail
