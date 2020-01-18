<template lang="pug">
    div
        h1 Car ID = {{ id }}
</template>

<script>
    export default {
        name: "Car",
        data() {
            return {
                id: this.$route.params["id"], // this.$router.currentRoute.params['id']
            }
        },
        watch: {
            $route(toRoute, fromRoute) {
                this.id = toRoute.params["id"];
            },
        },
    }
</script>

<style scoped>

</style>