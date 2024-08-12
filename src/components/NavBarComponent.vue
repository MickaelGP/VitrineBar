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
                            <RouterLink to="/" class="nav-link text-white">Home</RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/menu" class="nav-link text-white">Menu</RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/contact" class="nav-link text-white">Contact</RouterLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>