import css from '../Styles.module.css';
// import propTypes from 'prop-types';
import { Component } from 'react';


// export const Modal = ({ src, alt, handleClose }) => (
//     <div className={css.Overlay} onClick={handleClose}>
//         <div className={css.Modal}>
//             <img src={src} alt={alt} />
//         </div>
//     </div>
// );

export class Modal extends Component {

    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown);
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown);
    }

    handleKeyDown = evt => {
        if (evt.code === 'Escape') {
            this.props.onToggleModal();
        }
    };

    handleBackdropClick = evt => {
        if (evt.currentTarget === evt.target) {
            this.props.onToggleModal();
        }
    };

 
    render() {
        const { largeImageURL, tags } = this.props;
        return (
            <div className={css.Overlay} onClick={this.handleBackdropClick}>
                <div className={css.Modal}>
                    <img src={largeImageURL} alt={tags} />
                </div>
            </div>
        );
    }
}
