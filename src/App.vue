<template lang="pug">
    div
        div.appMian
            nav.navbar.navbar-expand-lg.navbar-light.bg-light
                <router-link to="/"  @click.native="show = false">
                    img(alt="Vue logo" src="@/assets/logo.png" width="30" height="30")
                </router-link>
                button.navbar-toggler(
                    type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
                    @click.stop="toggleNavbar"
                    aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation")
                    span.navbar-toggler-icon &nbsp;
                .collapse.navbar-collapse#navbarNavAltMarkup(:class="{'show': show }")
                    .navbar-nav
                        <router-link to="/cars"
                            | class="nav-item nav-link" active-class="active" exact
                            | @click.native="show = false">Cars</router-link>
                        <router-link to="/about"
                            | class="nav-item nav-link" active-class="active" exact
                            |  @click.native="show = false">About</router-link>
                        <router-link to="/car/1000"
                            | class="nav-item nav-link" active-class="active" exact
                            | @click.native="show = false">Car 1000</router-link>
            .container <router-view/>
        footer.page-footer.font-small
            .footer-copyright.text-center.py-3 © 2020 Copyright:
                |  #[a(href="https://www.udemy.com/") Lesson with UDEMY.COM ]
</template>

<script>
    export default {
        name: 'app',
        data() {
            return {
                show: false,
            }
        },
        methods: {
            toggleNavbar() {
                this.show = !this.show;
            }
        },
    }
</script>

<style>
    .appMain {
        margin-bottom: 60px;
    }

    a.active {
        color: red !important;
    }

    footer {
        background: #eee;
    }
</style>
