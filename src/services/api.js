import axios from 'axios';

const URL = 'http://192.168.120.213:3003/api/todos';

export default {
    get() {
        return axios.get(`${URL}?sort=-createdAt`);
    },

    handleSearch(description) {
        const SEARCH = `$&description__regex=/${description}/`;
        return axios.get(`${URL}?sort=-createdAt${SEARCH}`);
    },

    handleAdd(description) {
        return axios.post(URL, {description});
    },

    handleRemove(id) {
        return axios.delete(`${URL}/${id}`);
    },

    handleChangeDoneProperty(task) {
        return axios.put(`${URL}/${task._id}`, {...task, done: !task.done});
    },
    
} 