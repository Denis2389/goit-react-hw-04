import s from '../ImageCard/ImageCard.module.css'

const ImageCard = ({ photo, onOpen }) => {
    return (
        <div>
            <img className={s.img} src={photo.urls.small} alt={photo.description} onClick={() => onOpen(photo)}/>
        </div>
    )
}

export default ImageCard