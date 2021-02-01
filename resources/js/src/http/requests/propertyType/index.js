import axios from "../../axios"
export default {
    browse(filters) {
        //filters=?paginate=5&sortAsc=id&page=2
        return axios.get(`property${filters}`);
    },

    view(id) {
        return axios.get(`property/${id}`)
    },

    create(data) {
        return axios.post(`property`, data)
    },

    update(id, data) {
        return axios.post(`property/${id}`, data)
    },

    delete(id) {
        return axios.delete(`property/${id}`)
    }
}
