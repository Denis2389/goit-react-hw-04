import './App.css'
import { useState, useEffect } from 'react'
import ImageGallery from './components/ImageGallery/ImageGallery'
import { fetchGallery } from './gallery-api'
import SearchBar from './components/SearchBar/SearchBar'
import ErrorMessage, { tryAgain } from './components/ErrorMessage/ErrorMessage'
import ImageModal from './components/ImageModal/ImageModal'
import Modal from 'react-modal'
import Loader from './components/Loader/Loader'
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn'

function App() {
  const [query, setQuery] = useState('');
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(false)
  const [modalIsOpen, setIsOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState(null)

    Modal.setAppElement('#root')

    useEffect(() => {
      if (query === '') {
        return;
      }
      async function getData() {
        try {
          setError(false);
          setLoading(true);
          const fetchedPhotos = await fetchGallery(query, page);
          if (fetchedPhotos.results.length === 0) {
            tryAgain();
            return;
          }
          setPhotos((prevData) => {
            return [...prevData, ...fetchedPhotos.results]
          });

        } catch (error) {
          setError(true);
        } finally {
          setLoading(false)
        }
      }

      getData();
    }, [page, query])

    const handleSearch = (newQuery) => {
      setQuery(newQuery);
      setPage(1);
      setPhotos([]);
    };

    const handleLoadMore = () => {
      setPage(page + 1);
    };

    const openModal = (image) => {
      setSelectedImage(image);
      setIsOpen(true);
    };

    const closeModal = () => {
      setIsOpen(false)
    }

  return (
    <div className='wrap'>
      <SearchBar onSearch={handleSearch} />
      {error && <ErrorMessage />}
      {photos.length > 0 && (
        <ImageGallery gallery={photos} openModal={openModal}/>
      )}
      {photos.length > 0 && !isLoading && <LoadMoreBtn loadMore={handleLoadMore} />}
      {isLoading && <Loader isLoading={isLoading} />}
      <ImageModal
      isOpen={modalIsOpen}
      image={selectedImage}
      onCloseClick={closeModal}
      />
    </div>
  )
}

export default App
