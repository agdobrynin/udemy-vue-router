<template lang="pug">
div
    div.appMian
        nav.navbar.navbar-expand-lg.navbar-light.bg-light
            a.navbar-brand(href="/")
                img(alt="Vue logo" src="@/assets/logo.png" width="30" height="30")
            button.navbar-toggler(
                type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation")
                    span.navbar-toggler-icon &nbsp;
            .collapse.navbar-collapse#navbarNavAltMarkup
                .navbar-nav
                    <router-link to="/cars" class="nav-item nav-link" exact-active-class="active">Cars</router-link>
                    <router-link to="/about" class="nav-item nav-link" exact-active-class="active">About</router-link>
        .container <router-view/>
    footer.page-footer.font-small
        .footer-copyright.text-center.py-3 © 2020 Copyright:
            | #[a(href="https://www.udemy.com/") Lesson with UDEMY.COM ]
</template>

<style>
    .appMain {margin-bottom: 60px;}
    a.active { color: red!important;}
    footer {background: #eee;}
</style>
