
import state from './moduleFeedbackState'
import mutations from './moduleFeedbackMutations'
import actions from './moduleFeedbackActions'
import getters from './moduleFeedbackGetters'

export default {
    namespaced: true,
    state: state,
    mutations: mutations,
    actions: actions,
    getters: getters,
}

