import css from '../Styles.module.css';

export const ImageGalleryItem = ({ image, onClick}) => (
    <li key={image.id} onClick={onClick} className={css.ImageGalleryItem}>
        <img
            src={image.webformatURL}
            alt={image.tags}
            name={image.largeImageURL}
            className={css.ImageGalleryItemImage}
            target="_blank"
            rel="noreferrer noopener"
             />
    </li>
);


