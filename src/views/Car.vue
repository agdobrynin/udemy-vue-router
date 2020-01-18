<template lang="pug">
    div
        h1 Car ID = {{ id }}
        button.btn.btn-sm.btn-info(@click.stop="gotoCarsList") List all cars
</template>

<script>
    export default {
        name: "Car",
        data() {
            return {
                id: this.$route.params["id"], // this.$router.currentRoute.params['id']
            }
        },
        methods: {
            gotoCarsList() {
                this.$router.push("/cars/");
            },
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