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
        permission: 'browse-user'
    },
    {
        url: "/dashboard/property",
        name: "Property",
        slug: "property",
        icon: "HomeIcon",
        permission: 'browse-property'
    },
    {
        url: "/dashboard/reservation",
        name: "Reservation",
        slug: "reservation",
        icon: "CalendarIcon",
        permission: 'browse-reservation'
    },
    {
        url: "/dashboard/my-reservations",
        name: "Reservation",
        slug: "reservation",
        icon: "CalendarIcon",
        permission: 'browse-my-reservations'
    },
    {
        url: "/dashboard/feedback",
        name: "Feedback",
        slug: "feedback",
        icon: "SmileIcon",
        permission: 'browse-feedback'
    },
    {
        url: "/dashboard/message",
        name: "Messages",
        slug: "message",
        icon: "MessageSquareIcon",
        permission: 'browse-message'
    },
    {
        name: "Settings",
        icon: "SettingsIcon",
        submenu: [
            {
                url: '/dashboard/settings/role',
                name: "Roles & Permissions",
                slug: "role",
                permission: "browse-role"
            }
        ]
    },
]
