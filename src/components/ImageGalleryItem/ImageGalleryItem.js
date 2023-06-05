import css from '../Styles.module.css';

export const ImageGalleryItem = ({ image }) => (
    <li key={image.id} className={css.ImageGalleryItem}>
        <img
            src={image.webformatURL}
            className={css.ImageGalleryItemImage}
            target="_blank"
            rel="noreferrer noopener"
            alt={image.tags} />
    </li>
);

    // const ImagesList = ({ images }) => (
    // <ul className={css.ImageGallery}>
    //     {images.map(({ id, webformatURL, tags }) => (
            
    //     ))}
    // </ul>

