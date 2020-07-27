
import state from './moduleReservationState'
import mutations from './moduleReservationMutations'
import actions from './moduleReservationActions'
import getters from './moduleReservationGetters'

export default {
    namespaced: true,
    state: state,
    mutations: mutations,
    actions: actions,
    getters: getters,
}

