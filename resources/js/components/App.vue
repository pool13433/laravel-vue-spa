<template>
    <div>
        <h1>Medium Laravel & Vue (Single Page web app)</h1>

        <p>
            <router-link :to="{ name: 'home' }">Home</router-link> |
            <router-link :to="{ name: 'hello' }">Hello</router-link>|
            <router-link :to="{ name: 'laravel' }">Laravel</router-link>|
            <router-link :to="{ name: 'webpack' }">Webpack</router-link>|
        </p>

        <div class="container">
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
    export default {}
</script>