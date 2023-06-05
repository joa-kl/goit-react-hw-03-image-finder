import css from '../Styles.module.css';
import propTypes from 'prop-types';

export const Button = ({ onClick }) => (
    <button
        className={css.Button}
        onClick={onClick}
        type="button">
        Load more
    </button>
);

Button.propTypes = {
    onClick: propTypes.func,
}