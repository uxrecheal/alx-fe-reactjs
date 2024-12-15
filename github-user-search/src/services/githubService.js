import axios from 'axios';

export const fetchUserData = async (username) => {
    const response = await axios.get(
        `${process.env.REACT_APP_GITHUB_API_BASE_URL}/users/${username}`
    );
    return response.data;
};
