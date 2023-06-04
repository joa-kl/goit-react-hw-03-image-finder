import css from './App.module.css'
import { SearchBar } from './SearchBar/SearchBar';


const key = `34935392-24250165e01040adac8554f89`
const api = `https://pixabay.com/api/?key=${key}&image_type=photo&orientation=horizontal&per_page=12`


export const App = () => {
  return (
    <div className={css.container}>
      <SearchBar/>
    </div>
  );
};
