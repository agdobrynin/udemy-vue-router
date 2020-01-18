<template lang="pug">
    div.card.mt-3
        h5.card-header Car details
        div.card-body
            p.card-text
                ul
                    li Model: {{ model }}
                    li Mark: {{ mark }}
</template>

<script>
    export default {
        name: "CarDetails",
        data() {
            return {
                model: this.$route.params["model"],
                mark: this.$route.params["mark"],
            }
        },
        watch: {
            $route(toRoute, fromRoute) {
                console.log('aaaaa', toRoute, fromRoute);
            },
        },
    }
</script>

<style scoped>

</style>