import axios from 'axios'

axios.defaults.baseURL = 'https://api.unsplash.com/';

const ACCESS_KEY = 'C0lTgKjB-7GINIbSEyKXS3lHt6amTGWaNQ38-D8EAV0'

export const fetchGallery = async (searchQuery, page = 1) => {
    const response = await axios.get(
        `/search/photos?client_id=${ACCESS_KEY}`, {
            params: {
                query: searchQuery,
                per_page: 18,
                page
            }
        }
    );
    
    return response.data
};