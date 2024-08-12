<script setup>
import { RouterLink } from 'vue-router';
</script>
<template>
    <header>
        <nav class="navbar navbar-expand-lg bg-black text-white">
            <div class="container-fluid">
                <a class="navbar-brand text-white" href="/">Bistrot des Amis</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item">
                            <RouterLink to="/" class="nav-link">Home</RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/menu" class="nav-link">Menu</RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/contact" class="nav-link">Contact</RouterLink>
                        </li>
                        <li class="nav-item">
                            <a href="/#reservation" class="nav-link">Reservation</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>
<style scoped>
.nav-link{
    color: white;
}
.nav-link:hover{
    color: var(--primary-color);
}
.router-link-exact-active{
    color: var(--primary-color);
}
</style>