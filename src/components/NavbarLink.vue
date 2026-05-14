<template>
    <li>
        <router-link
            :to="`/${index}`"
            class="nav-link"
            :style="{ color: theme === 'dark' ? '#ffffff' : '#000000' }"
            active-class="active"
            aria-current="page"
            :title="`This link goes to the ${page.link.text} page`"
        >{{ page.link.text }}</router-link>
    </li>
        
</template>

<script>
export default{
    props: ['page', 'index', 'theme'],
}
</script>
