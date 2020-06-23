/*=========================================================================================
  File Name: sidebarItems.js
  Description: Sidebar Items list. Add / Remove menu items from here.
  ----------------------------------------------------------------------------------------
  Item Name: Mayor System
  Author: Mohamed Swilam & Hossam Mohamed
  Author URL: http://www.mayor.com/
==========================================================================================*/


export default [
    {
        url: "/dashboard",
        name: "Home",
        slug: "home",
        icon: "HomeIcon",
    },
    {
        url: "/dashboard/user",
        name: "User",
        slug: "user",
        icon: "UserIcon",
        i18n: "User",
        permission: 'browse-user'
    },
    {
        name: "Settings",
        icon: "SettingsIcon",
        i18n: "Settings",
        submenu: [
            {
                url: '/dashboard/settings/role',
                name: "Roles & Permissions",
                slug: "role",
                i18n: "Roles",
                permission: "browse-role"
            }
        ]
    },
]
