import axios from "../../axios"
export default {
    browse(filters) {
        //filters=?paginate=5&sortAsc=id&page=2
        return axios.get(`message${filters}`)
        // return new Promise(function(resolve, reject) {
        //     resolve({
        //         data: {
        //             data: {
        //                 data: [
        //                     {
        //                         id: 1,
        //                         name: 'Karim Hassan',
        //                         email: 'karim_hassan@hotmail.com',
        //                         phone: '+201096436700',
        //                         message: 'This is my message through contact us page.',
        //                         created_at: '2020-06-26 20:59:20'
        //                     },
        //                     {
        //                         id: 2,
        //                         name: 'Sarah Mohamed',
        //                         email: 'sarah_mohamed@hotmail.com',
        //                         phone: '+201096436710',
        //                         message: 'This is my message through contact us page.',
        //                         created_at: '2020-06-27 20:59:20'
        //                     },
        //                     {
        //                         id: 3,
        //                         name: 'Mahmoud Ibrahim',
        //                         email: 'mahmoud_ibrahim@hotmail.com',
        //                         phone: '+201096436720',
        //                         message: 'This is my message through contact us page.',
        //                         created_at: '2020-06-28 20:59:20'
        //                     },
        //                     {
        //                         id: 4,
        //                         name: 'Karim Hassan',
        //                         email: 'karim_hassan@hotmail.com',
        //                         phone: '+201096436700',
        //                         message: 'This is my message through contact us page.',
        //                         created_at: '2020-06-29 20:59:20'
        //                     },
        //                     {
        //                         id: 5,
        //                         name: 'Sarah Mohamed',
        //                         email: 'sarah_mohamed@hotmail.com',
        //                         phone: '+201096436710',
        //                         message: 'This is my message through contact us page.',
        //                         created_at: '2020-06-30 20:59:20'
        //                     },
        //                     {
        //                         id: 6,
        //                         name: 'Mahmoud Ibrahim',
        //                         email: 'mahmoud_ibrahim@hotmail.com',
        //                         phone: '+201096436720',
        //                         message: 'This is my message through contact us page.',
        //                         created_at: '2020-07-01 20:59:20'
        //                     },
        //                     {
        //                         id: 7,
        //                         name: 'Sarah Mohamed',
        //                         email: 'sarah_mohamed@hotmail.com',
        //                         phone: '+201096436710',
        //                         message: 'This is my message through contact us page.',
        //                         created_at: '2020-07-02 20:59:20'
        //                     },
        //                     {
        //                         id: 8,
        //                         name: 'Karim Hassan',
        //                         email: 'karim_hassan@hotmail.com',
        //                         phone: '+201096436700',
        //                         message: 'This is my message through contact us page.',
        //                         created_at: '2020-07-03 20:59:20'
        //                     },
        //                     {
        //                         id: 9,
        //                         name: 'Mahmoud Ibrahim',
        //                         email: 'mahmoud_ibrahim@hotmail.com',
        //                         phone: '+201096436720',
        //                         message: 'This is my message through contact us page.',
        //                         created_at: '2020-07-04 20:59:20'
        //                     },
        //                     {
        //                         id: 10,
        //                         name: 'Sarah Mohamed',
        //                         email: 'sarah_mohamed@hotmail.com',
        //                         phone: '+201096436710',
        //                         message: 'This is my message through contact us page.',
        //                         created_at: '2020-07-05 20:59:20'
        //                     },
        //                     {
        //                         id: 11,
        //                         name: 'Karim Hassan',
        //                         email: 'karim_hassan@hotmail.com',
        //                         phone: '+201096436700',
        //                         message: 'This is my message through contact us page.',
        //                         created_at: '2020-07-06 20:59:20'
        //                     },
        //                     {
        //                         id: 12,
        //                         name: 'Mahmoud Ibrahim',
        //                         email: 'mahmoud_ibrahim@hotmail.com',
        //                         phone: '+201096436720',
        //                         message: 'This is my message through contact us page.',
        //                         created_at: '2020-07-07 20:59:20'
        //                     },
        //                     {
        //                         id: 13,
        //                         name: 'Sarah Mohamed',
        //                         email: 'sarah_mohamed@hotmail.com',
        //                         phone: '+201096436710',
        //                         message: 'This is my message through contact us page.',
        //                         created_at: '2020-07-08 20:59:20'
        //                     },
        //                     {
        //                         id: 14,
        //                         name: 'Karim Hassan',
        //                         email: 'karim_hassan@hotmail.com',
        //                         phone: '+201096436700',
        //                         message: 'This is my message through contact us page.',
        //                         created_at: '2020-07-09 20:59:20'
        //                     },
        //                     {
        //                         id: 15,
        //                         name: 'Sarah Mohamed',
        //                         email: 'sarah_mohamed@hotmail.com',
        //                         phone: '+201096436710',
        //                         message: 'This is my message through contact us page.',
        //                         created_at: '2020-07-10 20:59:20'
        //                     },
        //                     {
        //                         id: 16,
        //                         name: 'Karim Hassan',
        //                         email: 'karim_hassan@hotmail.com',
        //                         phone: '+201096436700',
        //                         message: 'This is my message through contact us page.',
        //                         created_at: '2020-07-11 20:59:20'
        //                     }
        //                 ]
        //             }
        //         }
        //     })
        // });
    },

    delete(id) {
        return axios.delete(`message/${id}`)
    }
}
