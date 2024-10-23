import Modal from 'react-modal'
import s from '../ImageModal/ImageModal.module.css'

const ImageModal = ({ isOpen, image, onCloseClick }) => {
    return (
        <Modal
        isOpen={isOpen}
        onRequestClose={onCloseClick}
        overlayClassName={s.backdrop}
        >
            <div className={s.modalContainer}>
                {image && (
                    <div className={s.imgContainer}>
                        <img src={image.urls.regular} alt={image.description} className={s.image} />
                        <h2 className={s.text}>Likes: {image.likes}</h2>
                    </div>
                )}
            </div>
        </Modal>
    )
}

export default ImageModal