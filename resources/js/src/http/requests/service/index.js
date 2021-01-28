import axios from "../../axios"
export default {
    getAll(filters) {
        //filters=?paginate=5&sortAsc=id&page=2
        return axios.get(`service${filters}`)
    },

    view(id) {
        return axios.get(`service/${id}`)
    },

    create(data) {
        return axios.post(`service`, data)
    },

    update(id, data) {
        return axios.post(`service/${id}`, data)
    },

    delete(id) {
        return axios.delete(`service/${id}`)
    }
}
