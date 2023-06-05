import css from './../Styles.module.css'
import { FaSistrix } from "react-icons/fa";



export const SearchBar = ({ onSubmit, query, onChange }) => (
    < header className={css.Searchbar} >
        <form className={css.SearchForm} onSubmit={onSubmit}>
            <button type="submit" className={css.SearchFormButton}>
                <span ><FaSistrix /></span>
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
