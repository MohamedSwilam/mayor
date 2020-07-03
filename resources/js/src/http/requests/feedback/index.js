import axios from "../../axios"
export default {
    browse(filters) {
        //filters=?paginate=5&sortAsc=id&page=2
        // return axios.get(`feedback{filters}`)
        return new Promise(function(resolve, reject) {
            resolve({
                data: {
                    data: {
                        data: [
                            {
                                id: 1,
                                image: '/images/avatar-s-11.jpg',
                                name: 'Karim Hassan',
                                title: 'Software Engineer',
                                feedback: 'This is my feedback message.',
                                created_at: '2020-06-26 20:59:20'
                            },
                            {
                                id: 2,
                                image: '/images/avatar-s-11.jpg',
                                name: 'Sarah Mohamed',
                                title: 'HR Manager',
                                feedback: 'This is my feedback message.',
                                created_at: '2020-06-27 20:59:20'
                            },
                            {
                                id: 3,
                                image: '/images/avatar-s-11.jpg',
                                name: 'Mahmoud Ibrahim',
                                title: 'Team Leader',
                                feedback: 'This is my feedback message.',
                                created_at: '2020-06-28 20:59:20'
                            }
                        ]
                    }
                }
            })
        });
    },

    view(id) {
        // return axios.get(`feedback/${id}`)
    },

    create(data) {
        // return axios.post(`feedback`, data)
    },

    update(id, data) {
        // return axios.post(`feedback/${id}`, data)
    },

    delete(id) {
        // return axios.delete(`feedback/${id}`)
    }
}
