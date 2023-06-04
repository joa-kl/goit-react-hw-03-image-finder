import { Component } from "react";
import css from './../Styles.module.css'



export const SearchBar = ({ onSubmit, query }) => (
    < header className={css.Searchbar} >
        <form className={css.SearchForm} onSubmit={onSubmit}>
            <button type="submit" class="button">
                <span class="button-label">Search</span>
            </button>

            <input
                class="input"
                type="text"
                autocomplete="off"
                autofocus
                placeholder="Search images and photos"
                value={query}
            />
        </form>
    </header >
)
 