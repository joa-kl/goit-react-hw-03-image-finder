import css from '../Styles.module.css';

export const Modal = ({ src, alt, handleClose }) => (
    <div className={css.Overlay} onClick={handleClose}>
        <div className={css.Modal}>
            <img src={src} alt={alt} />
        </div>
    </div>
);