<template lang="pug">
    div
        h1 Cars page
        <HelloWorld msg="Привет Мир!">Через компонет</HelloWorld>
</template>

<script>
    import HelloWorld from "@/components/HelloWorld";
    export default {
        name: "Cars",
        components: {
            HelloWorld
        },
    }
</script>

<style scoped>

</style>