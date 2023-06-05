import axios from 'axios';

axios.defaults.baseURL = `https://pixabay.com/api`;
const key = "34935392-24250165e01040adac8554f89";

export const fetchImages = async (inputValue, pageNr) => {
    const response = await axios.get(
        `/?q=${inputValue}&page=${pageNr}&key=${key}&image_type=photo&orientation=horizontal&per_page=12`
    );
    return response.data.hits.map(image => {
        return {
            id: image.id,
            webformatURL: image.webformatURL,
            largeImageURL: image.largeImageURL,
            tags: image.tags,
        };
    });
};