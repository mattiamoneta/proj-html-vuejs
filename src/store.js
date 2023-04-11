import { reactive } from "vue";

export const store = reactive({
    linksNavbar: [
        {
            title: 'Home',
            url: '#'
        }, {
            title: 'Order Online',
            url: '#'
        }, {
            title: 'About',
            url: '#'
        }, {
            title: 'News',
            url: '#'
        }, {
            title: 'Contact Us',
            url: '#'
        },
    ],
    linksNavigate: [
        {
            title: 'Home',
            url: '#'
        }, {
            title: 'Alternate Home',
            url: '#'
        }, {
            title: 'Menu',
            url: '#'
        }, {
            title: 'About',
            url: '#'
        }, {
            title: 'News',
            url: '#'
        }, {
            title: 'Contact Us',
            url: '#'
        }, {
            title: 'Cart',
            url: '#'
        },
    ],
    linksOrder: [
        {
            title: 'Appetizers',
            url: '#'
        }, {
            title: 'Burgers',
            url: '#'
        }, {
            title: 'Pizza',
            url: '#'
        }, {
            title: 'Fries',
            url: '#'
        }, {
            title: 'Sides',
            url: '#'
        }, {
            title: 'Desserts',
            url: '#'
        }, {
            title: 'Beverages',
            url: '#'
        }, {
            title: 'Specials',
            url: '#'
        },
    ],
    linksInfos: [
        {
            title: 'My Account',
            url: '#'
        }, {
            title: 'Terms Of Service',
            url: '#'
        }, {
            title: 'Privacy Policy',
            url: '#'
        },
    ],
    keyFeatures: [
        {
            title: '24/7 Delivery',
            icon: 'fa-regular fa-clock'
        }, {
            title: 'over 100 dishes',
            icon: 'fa-regular fa-clock'
        }, {
            title: 'in app ordering',
            icon: 'fa-regular fa-clock'
        }, {
            title: 'fast delivery',
            icon: 'fa-regular fa-clock'
        },
    ],

    popularDishes: [
        {
            image: '/skin-on-fries.jpg',
            title: 'Skin On Fries',
            price: '$3.00 - $6.00'
        }, {
            image: '/choco-cookie-frappe.jpg',
            title: 'Choco Cookie Frappe',
            price: '$4.99'
        }, {
            image: '/donut-burger.jpg',
            title: 'The Donut Burger',
            price: '$6.99'
        },
    ]
})