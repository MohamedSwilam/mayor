
import reservation from "../../http/requests/reservation/index"

export default {
    browse({ commit, dispatch }, payload) {
        return new Promise((resolve, reject) => {
            reservation.browse(payload)
                .then(response => {
                    resolve(response)
                })
                .catch(error => {
                    dispatch('handleError', {reject: reject, error: error}, {root: true});
                })
        })
    },
    browseMyReservations({ commit, dispatch }, payload) {
        return new Promise((resolve, reject) => {
            reservation.browseMyReservations(payload)
                .then(response => {
                    resolve(response)
                })
                .catch(error => {
                    dispatch('handleError', {reject: reject, error: error}, {root: true});
                })
        })
    },
    viewMyReservation({ commit, dispatch }, id) {
        return new Promise((resolve, reject) => {
            reservation.viewMyResevation(id)
                .then(response => {
                    resolve(response)
                })
                .catch(error => {
                    dispatch('handleError', {reject: reject, error: error}, {root: true});
                })
        })
    },
    view({ commit, dispatch }, id) {
        return new Promise((resolve, reject) => {
            reservation.view(id)
                .then(response => {
                    resolve(response)
                })
                .catch(error => {
                    dispatch('handleError', {reject: reject, error: error}, {root: true});
                })
        })
    },
    getDates({ commit, dispatch }, id) {
        return new Promise((resolve, reject) => {
            reservation.getDates(id)
                .then(response => {
                    resolve(response)
                })
                .catch(error => {
                    dispatch('handleError', {reject: reject, error: error}, {root: true});
                })
        })
    },

    create({ commit, dispatch }, payload) {
        return new Promise((resolve, reject) => {
            reservation.create(payload)
                .then(response => {
                    resolve(response)
                })
                .catch(error => {
                    console.log(error.data);
                    dispatch('handleError', {reject: reject, error: error}, {root: true});
                })
        })
    },

    update({ commit, dispatch }, payload) {
        return new Promise((resolve, reject) => {
            reservation.update(payload.id, payload.data)
                .then(response => {
                    resolve(response)
                })
                .catch(error => {
                    dispatch('handleError', {reject: reject, error: error}, {root: true});
                })
        })
    },
    updateMyReservation({ commit, dispatch }, payload) {
        return new Promise((resolve, reject) => {
            reservation.updateMyReservation(payload.id, payload.data)
                .then(response => {
                    resolve(response)
                })
                .catch(error => {
                    dispatch('handleError', {reject: reject, error: error}, {root: true});
                })
        })
    },

    delete({ commit, dispatch }, id) {
        return new Promise((resolve, reject) => {
            reservation.delete(id)
                .then(response => {
                    resolve(response)
                })
                .catch(error => {
                    dispatch('handleError', {reject: reject, error: error}, {root: true});
                })
        })
    },
    deleteMyReservation({ commit, dispatch }, id) {
        return new Promise((resolve, reject) => {
            reservation.deleteMyReservation(id)
                .then(response => {
                    resolve(response)
                })
                .catch(error => {
                    dispatch('handleError', {reject: reject, error: error}, {root: true});
                })
        })
    },

    getAllStatus({ commit, dispatch }, payload) {
        return new Promise((resolve, reject) => {
            reservation.getAllStatus(payload)
                .then(response => {
                    resolve(response)
                })
                .catch(error => {
                    dispatch('handleError', {reject: reject, error: error}, {root: true});
                })
        })
    },
}
