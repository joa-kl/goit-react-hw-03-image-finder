import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import css from '../Styles.module.css';
import propTypes from 'prop-types';

export const ImageGallery = ({onClick, images}) => (
    <ul className={css.ImageGallery}>
        {images.map((image, index) => (
            <ImageGalleryItem key={index} onClick={onClick} image={image} />
        ))}
    </ul>
);

ImageGallery.propTypes = {
    images: propTypes.arrayOf(
        propTypes.shape({
            id: propTypes.number.isRequired,
        })
    ),
    onClick: propTypes.func.isRequired,
};