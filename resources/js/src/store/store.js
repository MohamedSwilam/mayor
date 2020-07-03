/*=========================================================================================
  File Name: store.js
  Description: Vuex store
  ----------------------------------------------------------------------------------------
  Item Name: Mayor System
  Author: Mohamed Swilam & Hossam Mohamed
  Author URL: http://www.mayor.com/
==========================================================================================*/


import Vue from 'vue'
import Vuex from 'vuex'

import state from "./state"
import getters from "./getters"
import mutations from "./mutations"
import actions from "./actions"
import VuexPersistence from 'vuex-persist'

Vue.use(Vuex)

import moduleAuth from './auth/moduleAuth';
import moduleUser from './user/moduleUser';
import moduleProperty from './property/moduleProperty';
import moduleFeedback from './feedback/moduleFeedback';
import moduleMessage from './message/moduleMessage';
import moduleRolesAndPermissions from './roles-and-permissions/moduleRolesAndPermissions';

const vuexLocal = new VuexPersistence({
    storage: window.localStorage
});

export default new Vuex.Store({
    getters,
    mutations,
    state,
    actions,
    modules: {
        auth: moduleAuth,
        user: moduleUser,
        feedback: moduleFeedback,
        property: moduleProperty,
        message: moduleMessage,
        rolesAndPermissions: moduleRolesAndPermissions,
    },
    plugins: [vuexLocal.plugin],
    strict: process.env.NODE_ENV !== 'production'
})
