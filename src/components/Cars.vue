<template lang="pug">
    div
        h1 Cars page
        HelloWorld(msg="Привет Мир VueJs!") Через компонет
        ul
            li(v-for="car in cars")
                router-link(
                    :to="{name: 'pageCar', params:{id: car.id, model: car.model, mark: car.mark}}"
                    :key="car.id") {{`${car.mark} ${car.model}` }}
</template>

<script>
    import HelloWorld from "@/components/HelloWorld";
    export default {
        name: "Cars",
        data() {
            return {
                cars: [
                    {id: 100, mark: "Ferrari", model: "F490"},
                    {id: 150, mark: "Fiat", model: "Grande Punto"},
                    {id: 200, mark: "Lada", model: "Vesta Cross Vagon"},
                    {id: 250, mark: "Lexus", model: "RX350 GD"},
                ],
            }
        },
        components: {
            HelloWorld
        },
    }
</script>

<style scoped>

</style>