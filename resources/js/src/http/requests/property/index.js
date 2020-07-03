import axios from "../../axios"
export default {
    browse(filters) {
        //filters=?paginate=5&sortAsc=id&page=2
        // return axios.get(`property{filters}`)
        return new Promise(function(resolve, reject) {
            resolve({
                data: {
                    data: {
                        data: [
                            {
                                id: 1,
                                title: 'Property 1',
                                information: 'Property 1 Information',
                                description: 'This is a detailed description for property 1',
                                main_home_image: '/images/avatar-s-11.jpg',
                                main_details_image: '/images/avatar-s-11.jpg',
                                price: 500,
                                dinner_price: 100,
                                lunch_price: 100,
                                images: [
                                    '/images/avatar-s-11.jpg',
                                    '/images/avatar-s-11.jpg',
                                    '/images/avatar-s-11.jpg',
                                    '/images/avatar-s-11.jpg'
                                ],
                                created_at: '2020-06-26 20:59:20'
                            },
                            {
                                id: 2,
                                title: 'Property 2',
                                information: 'Property 2 Information',
                                description: 'This is a detailed description for property 2',
                                main_home_image: '/images/avatar-s-11.jpg',
                                main_details_image: '/images/avatar-s-11.jpg',
                                price: 700,
                                dinner_price: 150,
                                lunch_price: 150,
                                images: [
                                    '/images/avatar-s-11.jpg',
                                    '/images/avatar-s-11.jpg',
                                    '/images/avatar-s-11.jpg',
                                    '/images/avatar-s-11.jpg'
                                ],
                                created_at: '2020-06-27 20:59:20'
                            },
                            {
                                id: 3,
                                title: 'Property 3',
                                information: 'Property 1 Information',
                                description: 'This is a detailed description for property 3',
                                main_home_image: '/images/avatar-s-11.jpg',
                                main_details_image: '/images/avatar-s-11.jpg',
                                price: 900,
                                dinner_price: 100,
                                lunch_price: 100,
                                images: [
                                    '/images/avatar-s-11.jpg',
                                    '/images/avatar-s-11.jpg',
                                    '/images/avatar-s-11.jpg',
                                    '/images/avatar-s-11.jpg'
                                ],
                                created_at: '2020-06-28 20:59:20'
                            }
                        ]
                    }
                }
            })
        });
    },

    view(id) {
        // return axios.get(`property/${id}`)
    },

    create(data) {
        // return axios.post(`property`, data)
    },

    update(id, data) {
        // return axios.post(`property/${id}`, data)
    },

    delete(id) {
        // return axios.delete(`property/${id}`)
    }
}
