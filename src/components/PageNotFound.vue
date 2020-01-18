<template>
    <div class="card m-md-3">
        <h5 class="card-header">Error 404</h5>
        <div class="card-body">
            <p class="card-text">The page not found at URI : <strong>{{$route.path}}</strong></p>
            <router-link class="btn btn-primary" :to="{name: 'mainPage'}">Go main page</router-link>
        </div>
    </div>
</template>

<style scoped>

</style>