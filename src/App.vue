<script>

import PageHeader from './components/PageHeader.vue';
import PageFooter from './components/PageFooter.vue';

export default {
  data() {
    return {
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
    }
  },
  components: {
    PageHeader,
    PageFooter
  }
}

</script>

<template>
  <!-- Navbar & Jumbotron -->
  <PageHeader :navLinks="linksNavbar" />

  <main>

  </main>
  <PageFooter />
</template>

<style lang="scss">
@use './style/global.scss';
</style>
