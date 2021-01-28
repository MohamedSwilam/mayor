import employee from "../../http/requests/service";
import feedback from "../../http/requests/feedback";


export default {
    getData({ commit, dispatch }, payload) {
        return new Promise((resolve, reject) => {
            employee.getAll(payload)
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
            employee.delete(id)
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
            employee.create(payload)
                .then(response => {
                    resolve(response)
                })
                .catch(error => {
                    dispatch('handleError', {reject: reject, error: error}, {root: true});
                })
        })
    },
    // view({ commit, dispatch }, id) {
    //     return new Promise((resolve, reject) => {
    //         Servive.view(id)
    //             .then(response => {
    //                 resolve(response)
    //             })
    //             .catch(error => {
    //                 dispatch('handleError', {reject: reject, error: error}, {root: true});
    //             })
    //     })
    // },
    //
    // create({ commit, dispatch }, payload) {
    //     return new Promise((resolve, reject) => {
    //         Servive.create(payload)
    //             .then(response => {
    //                 resolve(response)
    //             })
    //             .catch(error => {
    //                 console.log(error.data);
    //                 dispatch('handleError', {reject: reject, error: error}, {root: true});
    //             })
    //     })
    // },
    //
    // update({ commit, dispatch }, payload) {
    //     return new Promise((resolve, reject) => {
    //         Servive.update(payload.id, payload.data)
    //             .then(response => {
    //                 resolve(response)
    //             })
    //             .catch(error => {
    //                 dispatch('handleError', {reject: reject, error: error}, {root: true});
    //             })
    //     })
    // },
    //
    // delete({ commit, dispatch }, id) {
    //     return new Promise((resolve, reject) => {
    //         Servive.delete(id)
    //             .then(response => {
    //                 resolve(response)
    //             })
    //             .catch(error => {
    //                 dispatch('handleError', {reject: reject, error: error}, {root: true});
    //             })
    //     })
    // },

}
