/*=========================================================================================
  File Name: router.js
  Description: Routes for vue-router. Lazy loading is enabled.
  ----------------------------------------------------------------------------------------
  Item Name: Mayor System
  Author: Mohamed Swilam & Hossam Mohamed
  Author URL: http://www.mayor.com/
==========================================================================================*/


import Vue from 'vue'
import Router from 'vue-router'
import store from './store/store';
import axios from "./http/axios/index.js"

Vue.use(Router);

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    scrollBehavior () {
        return { x: 0, y: 0 }
    },
    routes: [

        {
            // =============================================================================
            // MAIN LAYOUT ROUTES
            // =============================================================================
            path: '',
            component: () => import('./layouts/main/Main.vue'),
            children: [
                // =============================================================================
                // Theme Routes
                // =============================================================================
                {
                    path: '/dashboard',
                    name: 'home',
                    beforeEnter: guard,
                    component: () => import('./views/Home.vue'),
                    meta: {
                        breadcrumb: [
                            { title: 'Home', url: '/dashboard', i18n: 'Home', active: true },
                        ],
                        pageTitle: 'Home',
                        pageTitle_i18n: 'Home'
                    }
                },
                // =============================================================================
                // User Routes
                // =============================================================================
                {
                    path: '/dashboard/user',
                    name: 'user',
                    component: () => import('./views/user/browse.vue'),
                    beforeEnter: guard,
                    meta: {
                        breadcrumb: [
                            { title: 'Home', url: '/dashboard', i18n: 'Home' },
                            { title: 'User', active: true, i18n: 'User' },
                        ],
                        pageTitle: 'User',
                        pageTitle_i18n: 'User',
                        permission: 'browse-user'
                    }
                },
                {
                    path: '/dashboard/user/create',
                    name: 'add-user',
                    component: () => import('./views/user/create.vue'),
                    beforeEnter: guard,
                    meta: {
                        breadcrumb: [
                            { title: 'Home', url: '/dashboard', i18n: 'Home' },
                            { title: 'User', url: '/dashboard/user', i18n: 'User' },
                            { title: 'Add User', active: true, i18n: 'AddUser' },
                        ],
                        pageTitle: 'Add User',
                        pageTitle_i18n: 'AddUser',
                        permission: 'create-user'
                    }
                },
                {
                    path: '/dashboard/user/:id',
                    name: 'view-user',
                    component: () => import('./views/user/view.vue'),
                    beforeEnter: guard,
                    meta: {
                        breadcrumb: [
                            { title: 'Home', url: '/dashboard', i18n: 'Home' },
                            { title: 'User', url: '/dashboard/user', i18n: 'User' },
                            { title: 'Profile', active: true, i18n: 'userProfile' },
                        ],
                        pageTitle: 'View User',
                        pageTitle_i18n: 'viewUser',
                        permission: 'view-user'
                    }
                },
                {
                    path: '/dashboard/user/:id/edit',
                    name: 'edit-user',
                    component: () => import('./views/user/edit.vue'),
                    beforeEnter: guard,
                    meta: {
                        breadcrumb: [
                            { title: 'Home', url: '/dashboard', i18n: 'Home' },
                            { title: 'User', url: '/dashboard/user', i18n: 'User' },
                            { title: 'Edit User', active: true, i18n: 'editUser' },
                        ],
                        pageTitle: 'Edit User',
                        pageTitle_i18n: 'editUser',
                        permission: 'edit-user'
                    }
                },
                // =============================================================================
                // Property Routes
                // =============================================================================
                {
                    path: '/dashboard/property',
                    name: 'property',
                    component: () => import('./views/property/browse.vue'),
                    beforeEnter: guard,
                    meta: {
                        breadcrumb: [
                            { title: 'Home', url: '/dashboard' },
                            { title: 'Property', active: true },
                        ],
                        pageTitle: 'Property',
                        // permission: 'browse-property'
                    }
                },
                {
                    path: '/dashboard/property/create',
                    name: 'add-property',
                    component: () => import('./views/property/create.vue'),
                    beforeEnter: guard,
                    meta: {
                        breadcrumb: [
                            { title: 'Home', url: '/dashboard' },
                            { title: 'Property', url: '/dashboard/property' },
                            { title: 'Add Property', active: true },
                        ],
                        pageTitle: 'Add Property',
                        // permission: 'create-property'
                    }
                },
                {
                    path: '/dashboard/property/:id/edit',
                    name: 'edit-property',
                    component: () => import('./views/property/edit.vue'),
                    beforeEnter: guard,
                    meta: {
                        breadcrumb: [
                            { title: 'Home', url: '/dashboard' },
                            { title: 'Property', url: '/dashboard/property' },
                            { title: 'Edit Property', active: true },
                        ],
                        pageTitle: 'Edit Property',
                        // permission: 'edit-property'
                    }
                },
                {
                    path: '/dashboard/property/:id',
                    name: 'view-property',
                    component: () => import('./views/property/view.vue'),
                    beforeEnter: guard,
                    meta: {
                        breadcrumb: [
                            { title: 'Home', url: '/dashboard' },
                            { title: 'Property', url: '/dashboard/property' },
                            { title: 'Property Details', active: true },
                        ],
                        pageTitle: 'Property Details',
                        // permission: 'edit-property'
                    }
                },
                // =============================================================================
                // Feedback Routes
                // =============================================================================
                {
                    path: '/dashboard/feedback',
                    name: 'feedback',
                    component: () => import('./views/feedback/browse.vue'),
                    beforeEnter: guard,
                    meta: {
                        breadcrumb: [
                            { title: 'Home', url: '/dashboard' },
                            { title: 'Feedback', active: true },
                        ],
                        pageTitle: 'Feedback',
                        // permission: 'browse-feedback'
                    }
                },
                {
                    path: '/dashboard/feedback/create',
                    name: 'add-feedback',
                    component: () => import('./views/feedback/create.vue'),
                    beforeEnter: guard,
                    meta: {
                        breadcrumb: [
                            { title: 'Home', url: '/dashboard' },
                            { title: 'Feedback', url: '/dashboard/feedback' },
                            { title: 'Add Feedback', active: true },
                        ],
                        pageTitle: 'Add Feedback',
                        // permission: 'create-feedback'
                    }
                },
                {
                    path: '/dashboard/feedback/:id/edit',
                    name: 'edit-feedback',
                    component: () => import('./views/feedback/edit.vue'),
                    beforeEnter: guard,
                    meta: {
                        breadcrumb: [
                            { title: 'Home', url: '/dashboard' },
                            { title: 'Feedback', url: '/dashboard/feedback' },
                            { title: 'Edit Feedback', active: true },
                        ],
                        pageTitle: 'Edit Feedback',
                        // permission: 'edit-feedback'
                    }
                },
                // =============================================================================
                // Messages Routes
                // =============================================================================
                {
                    path: '/dashboard/message',
                    name: 'message',
                    component: () => import('./views/message/browse.vue'),
                    beforeEnter: guard,
                    meta: {
                        breadcrumb: [
                            { title: 'Home', url: '/dashboard' },
                            { title: 'Message', active: true },
                        ],
                        pageTitle: 'Message',
                        // permission: 'browse-message'
                    }
                },
                // =============================================================================
                // Settings Routes
                // =============================================================================
                {
                    path: '/dashboard/settings/role',
                    name: 'role',
                    component: () => import('./views/settings/Role/Roles.vue'),
                    beforeEnter: guard,
                    meta: {
                        breadcrumb: [
                            { title: 'Home', url: '/dashboard'},
                            { title: 'Settings'},
                            { title: 'Roles', active: true}
                        ],
                        pageTitle: "Roles",
                        permission: 'view-role'
                    }
                },
                {
                    path: '/dashboard/settings/role/create',
                    name: 'create-role',
                    component: () => import('./views/settings/Role/Create.vue'),
                    beforeEnter: guard,
                    meta: {
                        breadcrumb: [
                            { title: 'Home', url: '/dashboard'},
                            { title: 'Settings'},
                            { title: 'Roles', url: '/dashboard/settings/role'},
                            { title: 'Create Role', active: true}
                        ],
                        pageTitle: "Create Role",
                        permission: 'create-role'
                    }
                },
                {
                    path: '/dashboard/settings/role/:id',
                    name: 'view-role',
                    component: () => import('./views/settings/Role/View.vue'),
                    beforeEnter: guard,
                    meta: {
                        breadcrumb: [
                            { title: 'Home', url: '/dashboard'},
                            { title: 'Settings'},
                            { title: 'Roles', url: '/dashboard/settings/role'},
                            { title: 'Role Information', active: true}
                        ],
                        pageTitle: "Role Information",
                        permission: 'view-role'
                    }
                },
                {
                    path: '/dashboard/settings/role/edit/:id',
                    name: 'edit-role',
                    component: () => import('./views/settings/Role/Edit.vue'),
                    beforeEnter: guard,
                    meta: {
                        breadcrumb: [
                            { title: 'Home', url: '/dashboard'},
                            { title: 'Settings'},
                            { title: 'Roles', url: '/dashboard/settings/role'},
                            { title: 'Edit Role', active: true}
                        ],
                        pageTitle: "Edit Role",
                        permission: 'edit-role'
                    }
                },
                {
                    path: '/dashboard/profile',
                    name: 'profile',
                    component: () => import('./views/profile/profile'),
                    beforeEnter: guard,
                    meta: {
                        breadcrumb: [
                            { title: 'Home', url: '/dashboard'},
                            { title: 'Profile', active: true}
                        ],
                        pageTitle: "Profile"
                    }
                },

            ],
        },
        // =============================================================================
        // FULL PAGE LAYOUTS
        // =============================================================================
        {
            path: '',
            component: () => import('@/layouts/full-page/FullPage.vue'),
            children: [
                // =============================================================================
                // PAGES
                // =============================================================================
                {
                    path: '/dashboard/login',
                    name: 'pageLogin',
                    component: () => import('./views/pages/Login.vue')
                },
                {
                    path: '/dashboard/register',
                    name: 'pageRegister',
                    component: () => import('./views/pages/Register.vue')
                },
                {
                    path: '/dashboard/error-403',
                    name: 'pageError403',
                    component: () => import('./views/pages/NotAuthorized.vue')
                },
                {
                    path: '/dashboard/error-404',
                    name: 'pageError404',
                    component: () => import('./views/pages/Error404.vue')
                },
            ]
        },
        // Redirect to 404 page, if no match found
        {
            path: '*',
            redirect: '/pages/error-404'
        }
    ],
});

router.afterEach(() => {
    // Remove initial loading
    const appLoading = document.getElementById('loading-bg')
    if (appLoading) {
        appLoading.style.display = "none";
    }
});

function can(permission) {
    let hasPermission = false;
    store.state.auth.AppActiveUser.roles[0].permissions.forEach((userPermission) => {
        if(userPermission.name === permission){
            hasPermission = true;
        }
    });
    return hasPermission;
}

function guard(to, from, next) {
    if (store.state.auth.accessToken) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${store.state.auth.accessToken.accessToken}`;
        if (new Date(Date.now()) < new Date(store.state.auth.accessToken.token.expires_at)){
            to.meta.permission===undefined||can(to.meta.permission)?next():next('/dashboard/error-403');
        } else {
            next('/dashboard/login');
        }
    } else {
        next('/dashboard/login');
    }
}

export default router
