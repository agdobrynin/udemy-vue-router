<template lang="pug">
    div
        h1 Car ID = {{ id }}
        router-link(
            :to="{name: 'pageCarDetails', params: {model : model, mark: mark}}"
            tag="button" class="btn btn-primary") Details (path with parameters)
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
                model: this.$route.params["model"] || "",
                mark: this.$route.params["mark"] || "",
            }
        },
        methods: {
            gotoCarsList() {

                this.$router.push({name: "pageCars"});
            },
        },
        watch: {
            $route(toRoute, fromRoute) {
                this.id = toRoute.params["id"] || NaN;
                this.model = toRoute.params["model"] || "Unknown model";
                this.mark = toRoute.params["mark"] || "Unknown mark";
            },
        },
    }
</script>
