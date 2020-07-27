import axios from "../../axios"
export default {
    browse(filters) {
        //filters=?paginate=5&sortAsc=id&page=2
        return axios.get(`reservation${filters}`);
    },

    view(id) {
        return axios.get(`reservation/${id}`)
    },

    create(data) {
        return axios.post(`reservation`, data)
    },

    update(id, data) {
        return axios.post(`reservation/${id}`, data)
    },

    delete(id) {
        return axios.delete(`reservation/${id}`)
    }
}
