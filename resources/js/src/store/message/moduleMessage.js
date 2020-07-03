
import state from './moduleMessageState'
import mutations from './moduleMessageMutations'
import actions from './moduleMessageActions'
import getters from './moduleMessageGetters'

export default {
    namespaced: true,
    state: state,
    mutations: mutations,
    actions: actions,
    getters: getters,
}

