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
            image: '/appetizers-menu-background.jpg',
            url: '#'
        }, {
            title: 'Burgers',
            image: '/burgers-menu-background.jpg',
            url: '#'
        }, {
            title: 'Pizza',
            image: '/pizza-menu-background.jpg',
            url: '#'
        }, {
            title: 'Fries',
            image: '/fries-menu-background.jpg',
            url: '#'
        }, {
            title: 'Sides',
            image: '/sides-menu-background.jpg',
            url: '#'
        }, {
            title: 'Desserts',
            image: '/desserts-menu-background.jpg',
            url: '#'
        }, {
            title: 'Beverages',
            image: '/beverages-menu-background.jpg',
            url: '#'
        }, {
            title: 'Specials',
            image: '/specials-menu-background.jpg',
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
            icon: 'fa-solid fa-burger'
        }, {
            title: 'in app ordering',
            icon: 'fa-solid fa-mobile'
        }, {
            title: 'fast delivery',
            icon: 'fa-solid fa-car'
        },
    ],

    menuFeatures: [
        {
            title: 'Vegetarian',
            icon: 'fa-solid fa-leaf'
        }, {
            title: 'Gluten Free',
            icon: 'fa-solid fa-seedling'
        }, {
            title: 'Dairy Free',
            icon: 'fa-solid fa-cow'
        }, {
            title: 'Keto Friendly',
            icon: 'fa-solid fa-drumstick-bite'
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