<template>
  <nav
    :class="['navbar-${theme}', `bg-${theme}`, `navbar`, `navbar-expand-lg`]"
  >
    <div class="container-fluid">
      <a class="navbar-brand" :class="[theme === 'dark' ? 'text-light' : 'text-dark']" href="#">My Vue</a>
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li v-for="(page, index) in publishedPages" class="nav-item" :key="index">
          <navbar-link
            :page="page"
            :isActive="activePage === index"
            :theme="theme"
            @click.prevent="navLinkClick(index)"
          ></navbar-link>
        </li>
      </ul>
      <form class="d-flex">
        <button class="btn btn-primary" @click.prevent="changeTheme()">
          Toggle
        </button>
      </form>
    </div>
  </nav>
</template>

<script>
import NavbarLink from "./NavbarLink.vue";
export default {
  components: {
    NavbarLink,
  },
  name: "NavBar",
  created(){
    this.getThemeSettings();
  },
  computed:{
    publishedPages(){
        return this.pages.filter(page => page.published);
    }
  },
  props: ["pages", "activePage", "navLinkClick"],
  data() {
    return {
      theme: "light",
    };
  },
  methods: {
    changeTheme() {
      let theme = "light";
      if (this.theme === "light") {
        theme = "dark";
      }
      this.theme = theme;
      this.storeThemeSettings();
    },
    storeThemeSettings(){
        localStorage.setItem("theme", this.theme);
    },
    getThemeSettings(){
        let theme = localStorage.getItem("theme");
        if(theme){
            this.theme = theme;
        }
    },
}
};
</script>

<style scoped>
.text-light {
    color: #ffffff !important;
}

.text-dark {
    color: #000000 !important;
}
</style>
