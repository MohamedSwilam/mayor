import axios from "../../axios"
export default {
    browse(filters) {
        //filters=?paginate=5&sortAsc=id&page=2
        return axios.get(`feedback${filters}`)
    },

    view(id) {
        return axios.get(`feedback/${id}`)
    },

    create(data) {
        return axios.post(`feedback`, data)
    },

    update(id, data) {
        return axios.post(`feedback/${id}`, data)
    },

    delete(id) {
        return axios.delete(`feedback/${id}`)
    }
}
