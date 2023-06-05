import { Component } from "react";
import css from './../Styles.module.css'
import svg from '../Images/icons.svg#magnifying-glass';



export const SearchBar = ({ onSubmit, query, onChange }) => (
    < header className={css.Searchbar} >
        <form className={css.SearchForm} onSubmit={onSubmit}>
            <button type="submit" class="button">Search pictures
                {/* <svg src="" class="button-label">
                    <use href={svg}></use>
                </svg> */}
            </button>

            <input
                class="input"
                type="text"
                autocomplete="off"
                autofocus
                placeholder="Search images and photos"
                value={query}
                onChange={onChange}
            />
        </form>
    </header >
)
 