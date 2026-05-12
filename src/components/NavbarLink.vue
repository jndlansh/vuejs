<template>
        <a 
            class="nav-link"
            :class="activeClasses"
            aria-current="page"
            :href="page.link.href" 
            :title="`This link goes to the ${page.link.text} page`"
        >{{ page.link.text }}</a>
</template>

<script>
export default{
    props: ['page', 'isActive', 'theme'],
    computed: {
        activeClasses(){
            return {
                active: this.isActive,
                emphasize: this.isActive,
                'text-light': this.theme === 'dark',
                'text-dark': this.theme === 'light'
            };
        }
    }
}
</script>

<style scoped>
.emphasize {
    text-decoration: underline !important;
}

.text-light {
    color: #ffffff !important;
}

.text-dark {
    color: #000000 !important;
}
</style>