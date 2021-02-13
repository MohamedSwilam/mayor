import axios from "../../axios"
export default {
    browse(filters) {
        //filters=?paginate=5&sortAsc=id&page=2
        return axios.get(`property${filters}`);
    },
    browseType(filters) {
        //filters=?paginate=5&sortAsc=id&page=2
        return axios.get(`propertyType${filters}`);
    },

    view(id) {
        return axios.get(`property/${id}`)
    },
    viewHomePageData(id) {
        return axios.get(`homepage/${id}`)
    },

    create(data) {
        return axios.post(`property`, data)
    },
    createtype(data) {
        return axios.post(`propertyType`, data)
    },
    homePageConfig(data) {
        return axios.post(`homepage/1`, data)
    },

    update(id, data) {
        return axios.post(`property/${id}`, data)
    },

    delete(id) {
        return axios.delete(`property/${id}`)
    } ,
    deletetype(id) {
        return axios.delete(`propertyType/${id}`)
    }
}
