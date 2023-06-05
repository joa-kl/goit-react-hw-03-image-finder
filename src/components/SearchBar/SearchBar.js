import { Component } from "react";
import css from './../Styles.module.css'
import svg from '../Images/icons.svg#magnifying-glass';



export const SearchBar = ({ onSubmit, query, onChange }) => (
    < header className={css.Searchbar} >
        <form className={css.SearchForm} onSubmit={onSubmit}>
            <button type="submit" className={css.SearchFormButton}>Search pictures
                {/* <svg src="" class="button-label">
                    <use href={svg}></use>
                </svg> */}
            </button>

            <input
                className={css.SearchFormInput}
                type="text"
                autoComplete="off"
                autoFocus
                placeholder="Search images and photos"
                name="query"
                onChange={onChange}
            />
        </form>
    </header >
)
// )
// export class SearchBar extends Component {
    

//     handleInputChange = evt => {
//         const { name, value } = evt.target;
//         this.setState({ [name]: value });
//     };

//     render() {
//         const query = ""; 

//         return (
//             < header className={css.Searchbar} >
//                 <form className={css.SearchForm} >
//                     <button type="submit" class="button">Search pictures
//                         {/* <svg src="" class="button-label">
//                             <use href={svg}></use>
//                         </svg> */}
//                     </button>

//                     <input
//                         class="input"
//                         type="text"
//                         autocomplete="off"
//                         autofocus
//                         placeholder="Search images and photos"
//                         value={query}
//                         onChange={this.handleInputChange}
//                     />
//                 </form>
//             </header >
            
//         )
//     }
// } 

