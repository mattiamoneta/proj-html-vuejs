import { reactive } from "vue";

export const store = reactive({
    linksNavbar: [
        {
            title: 'Home',
            url: '#',
            dropdown: [
                {
                    title: 'Features',
                    url: '#section-keyfeatures'
                }, {
                    title: 'Popular Dishes',
                    url: '#section-dishes'
                }, {
                    title: 'Menu',
                    url: '#section-menu'
                }, {
                    title: 'App',
                    url: '#bg-phone'
                }, {
                    title: 'News',
                    url: '#section-news'
                }
            ]
        }, {
            title: 'Order Online',
            url: '#bg-phone'
        }, {
            title: 'About',
            url: '#'
        }, {
            title: 'News',
            url: '#section-news'
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
            image: 'appetizers-menu-background.jpg',
            url: '#'
        }, {
            title: 'Burgers',
            image: 'burgers-menu-background.jpg',
            url: '#'
        }, {
            title: 'Pizza',
            image: 'pizza-menu-background.jpg',
            url: '#'
        }, {
            title: 'Fries',
            image: 'fries-menu-background.jpg',
            url: '#'
        }, {
            title: 'Sides',
            image: 'sides-menu-background.jpg',
            url: '#'
        }, {
            title: 'Desserts',
            image: 'desserts-menu-background.jpg',
            url: '#'
        }, {
            title: 'Beverages',
            image: 'beverages-menu-background.jpg',
            url: '#'
        }, {
            title: 'Specials',
            image: 'specials-menu-background.jpg',
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
    linksSocial: [
        {
            icon: 'fa-brands fa-facebook-f',
            href: "#"
        }, {
            icon: 'fa-brands fa-twitter',
            href: "#"
        }, {
            icon: 'fa-brands fa-instagram',
            href: "#"
        }, {
            icon: 'fa-brands fa-linkedin',
            href: "#"
        }, {
            icon: 'fa-solid fa-rss',
            href: "#"
        }, {
            icon: 'fa-brands fa-youtube',
            href: "#"
        }, {
            icon: 'fa-solid fa-envelope',
            href: "#"
        },
    ],
    openingHours: [
        {
            day: 'Mon',
            hour: '10AM to 11PM'
        }, {
            day: 'Tue',
            hour: '10AM to 11PM'
        }, {
            day: 'Wed',
            hour: '10AM to 11PM'
        }, {
            day: 'Thur',
            hour: '10AM to 11PM'
        }, {
            day: 'Fri',
            hour: '10AM to 11PM'
        }, {
            day: 'Sat',
            hour: '10AM to 11PM'
        }, {
            day: 'Sun',
            hour: '10AM to 11PM'
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
            icon: 'fa-solid fa-leaf',
            color: '#5ea331'
        }, {
            title: 'Gluten Free',
            icon: 'fa-solid fa-seedling',
            color: '#ffc30f'
        }, {
            title: 'Dairy Free',
            icon: 'fa-solid fa-cow',
            color: '#44a2ea'
        }, {
            title: 'Keto Friendly',
            icon: 'fa-solid fa-drumstick-bite',
            color: '#994a0a'
        },
    ],

    popularDishes: [
        {
            image: 'skin-on-fries.jpg',
            title: 'Skin On Fries',
            price: '$3.00 - $6.00'
        }, {
            image: 'choco-cookie-frappe.jpg',
            title: 'Choco Cookie Frappe',
            price: '$4.99'
        }, {
            image: 'donut-burger.jpg',
            title: 'The Donut Burger',
            price: '$6.99'
        },
    ],

    posts: [
        {
            title: 'NEW: The Pancake Burger',
            thumbnail: 'pancake-burger.jpg',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe enim perferendis consectetur iste officiis modi, quasi quibusdam nisi reiciendis? Iusto.'
        }, {
            title: 'New Milkshake Menu',
            thumbnail: 'new-milkshake-menu.jpg',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe enim perferendis consectetur iste officiis modi, quasi quibusdam nisi reiciendis? Iusto.'
        }
    ]
})
