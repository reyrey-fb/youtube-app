import axios from 'axios';

//YouTube API access key
const KEY = 'AIzaSyAytiXkPzVLl5poLlGbVff10JFscXhfB-4';

//create an instance of axios pre-configured for YouTube API
export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet', //title and description snippets
        type: 'video', //search for videos, not playlists
        maxResults: 5,
        key: KEY
    }
});

