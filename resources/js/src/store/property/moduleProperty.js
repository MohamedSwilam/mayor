
import state from './modulePropertyState'
import mutations from './modulePropertyMutations'
import actions from './modulePropertyActions'
import getters from './modulePropertyGetters'

export default {
    namespaced: true,
    state: state,
    mutations: mutations,
    actions: actions,
    getters: getters,
}

