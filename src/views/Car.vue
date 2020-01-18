<template lang="pug">
    div
        h1 Car ID = {{ id }}
        router-link(:to="`/car/${id}/details`" tag="button" class="btn btn-primary") Details
        | &nbsp;
        button.btn.btn-secondary(@click.stop="gotoCarsList") List all cars
        router-view
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
            $route(toRoute) {
                this.id = toRoute.params["id"];
            },
        },
    }
</script>
