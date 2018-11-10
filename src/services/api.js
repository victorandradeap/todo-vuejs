import axios from 'axios';

const URL = 'http://localhost:3003/api/todos';

export default {
    
    get(description = '') {
        const SEARCH = `$&description__regex=/${description}/`;
        return axios.get(`${URL}?sort=-createdAt${SEARCH}`);
    },

    handleSearch(description) {
        return this.get(description);
    },

    handleAdd(description) {
        return axios.post(URL, {description});
    },

    handleRemove(id) {
        return axios.delete(`${URL}/${id}`);
    },

    handleChangeDoneProperty(task) {
        return axios.put(`${URL}/${task._id}`, {...task, done: !task.done});
    }
    
} 