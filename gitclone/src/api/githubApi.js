import axios from 'axios';


const API_BASE_URL="http://localhost:5001";  // ✅ /auth mat add karo

export const getUser = () => axios.get(`${API_BASE_URL}/auth/user`, { withCredentials: true });


export const getSingleRepo = (repoName,username) => axios.get(`${API_BASE_URL}/auth/singleRepo/${repoName}/${username}`, { withCredentials: true });
export const getRepos = (username) => axios.get(`${API_BASE_URL}/auth/repos/${username}`, { withCredentials: true });

// export const getBranchlist = (url) => axios.get(`${url}/branches`);