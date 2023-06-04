import { Component } from "react";



export const SearchBar = ({ onSubmit }) => (
    < header class="searchbar" >
        <form class="form" onSubmit={onSubmit}>
            <button type="submit" class="button">
                <span class="button-label">Search</span>
            </button>

            <input
                class="input"
                type="text"
                autocomplete="off"
                autofocus
                placeholder="Search images and photos"
            />
        </form>
    </header >
)
 