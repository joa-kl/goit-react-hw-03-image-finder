import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import css from '../Styles.module.css'

export const ImageGallery = ({onClick, images}) => (
    <ul className={css.ImageGallery}>
        {images.map((image, index) => (
            <ImageGalleryItem key={index} onClick={onClick} image={image} />
        ))}
    </ul>
);