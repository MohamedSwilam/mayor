import axios from "../../axios"
export default {
    browse(filters) {
        //filters=?paginate=5&sortAsc=id&page=2
        return axios.get(`reservation${filters}`);
    },
    browseMyReservations(filters) {
        //filters=?paginate=5&sortAsc=id&page=2
        return axios.get(`my-reservations${filters}`);
    },

    view(id) {
        return axios.get(`reservation/${id}`)
    },
    viewMyResevation(id) {
        return axios.get(`view-my-reservation/${id}`)
    },

    create(data) {
        return axios.post(`reservation`, data)
    },

    update(id, data) {
        return axios.post(`reservation/${id}`, data)
    },
    getDates(id) {
        return axios.get(`reservation/get_reservation_dates/${id}`)
    },
    updateMyReservation(id, data) {
        return axios.post(`edit-my-reservation/${id}`, data)
    },

    delete(id) {
        return axios.delete(`reservation/${id}`)
    },
    deleteMyReservation(id) {
        //filters=?paginate=5&sortAsc=id&page=2
        return axios.get(`delete-my-reservation/${id}`);
    },
    getAllStatus() {
        //filters=?paginate=5&sortAsc=id&page=2
        return axios.get(`reservation/getallsatatus`);
    },
}
