<template lang="pug">
    div
        h1 Car ID = {{ id }}
        router-link(:to="`/car/${id}/details`" tag="button" class="btn btn-info") Details (path as string)
        | &nbsp;
        router-link(:to="{name: 'pageCarDetails', params: {id: id}}" tag="button" class="btn btn-primary") Details (path with parameters)
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

                this.$router.push({name: "pageCars"});
            },
        },
        watch: {
            $route(toRoute) {
                this.id = toRoute.params["id"];
            },
        },
    }
</script>
