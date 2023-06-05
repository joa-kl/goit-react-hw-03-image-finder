import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import css from '../Styles.module.css'

export const ImageGallery = ({onClick, images}) => (
    <ul className={css.ImageGallery}>
        {images.map((image) => (
            <ImageGalleryItem onClick={onClick} image={image} />
        ))}
    </ul>
);