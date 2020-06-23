import axios from "../../axios"
export default {
    getAll(filters) {
        //filters=?paginate=5&sortAsc=id&page=2
        return axios.get(`user${filters}`)
    },

    view(id) {
        return axios.get(`user/${id}`)
    },

    create(data) {
        return axios.post(`user`, data)
    },

    update(id, data) {
        return axios.post(`user/${id}`, data)
    },

    delete(id) {
        return axios.delete(`user/${id}`)
    }
}
