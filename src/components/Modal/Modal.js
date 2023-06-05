import css from '../Styles.module.css';
import propTypes from 'prop-types';


export const Modal = ({ src, alt, handleClose }) => (
    <div className={css.Overlay} onClick={handleClose}>
        <div className={css.Modal}>
            <img src={src} alt={alt} />
        </div>
    </div>
);

Modal.prototype = {
    src: propTypes.string.isRequired,
    alt: propTypes.string.isRequired,
    handleClose: propTypes.func.isRequired,
}