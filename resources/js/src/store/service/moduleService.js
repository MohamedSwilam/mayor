
import state from './moduleServiceState'
import mutations from './moduleServiceMutations'
import actions from './moduleServiceActions'
import getters from './moduleServiceGetters'

export default {
    namespaced: true,
    state: state,
    mutations: mutations,
    actions: actions,
    getters: getters,
}

