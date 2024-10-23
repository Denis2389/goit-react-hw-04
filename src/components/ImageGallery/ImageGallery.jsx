import ImageCard from "../ImageCard/ImageCard";
import s from '../ImageGallery/ImageGallery.module.css'

const ImageGallery = ({ gallery, openModal }) => {
    return (
        <ul className={s.list}>
            {gallery.map((photo) => {
                return (
                    <li key={photo.id}>
                        <ImageCard photo={photo} onOpen={openModal}/>
                    </li>
                )
            })}
        </ul>
    )
}

export default ImageGallery