<script setup>
import FooterComponent from '@/components/FooterComponent.vue';
import AboutSectionComponent from '@/components/AboutSectionComponent.vue';
import ServiceSectionComponent from '@/components/ServiceSectionComponent.vue';
import ReservationSectionComponent from '@/components/ReservationSectionComponent.vue';
</script>
<template>
  <main>
    <div class="hero d-flex align-items-center justify-content-center">
      <div class="hero-overlay"></div>
      <div class="hero-content text-center">
        <h1 class="display-3">Un endroit festif entre amis</h1>
        <a href="#plus" class="btn btn-primary btn-lg">Réserver</a>
      </div>
    </div>
  </main>
  <AboutSectionComponent />
  <section id="show-card">
    <div class="container text-center image-view text-white">
      <h2>Découvrez notre carte</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto similique</p>
      <div class="mb-3">
        <a href="" class="btn btn-primary">Voir notre carte</a>
      </div>
    </div>
  </section>
  <ServiceSectionComponent />
  <ReservationSectionComponent />
  <FooterComponent />
</template>
<style scoped>
footer {
  /* position: absolute; */
  bottom: 0;
}

.hero {
  position: relative;
  background: url('../assets/img/hero.jpg') center center/cover no-repeat;
  height: 100vh;
  color: white;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
}

.hero-content {
  position: relative;
  z-index: 2;
}

#show-card {
  height: 20rem;
  /* padding: 130px; */
  background-image: url('../assets/img/cocktail.jpg');
  background-size: cover;
  background-position: center;
}

.image-view {
  padding: 5rem;
}
a {
    background-color: transparent;
    border: 1px solid white;
}
a:hover{
    background-color: var(--primary-color);
    border: 1px solid var(--primary-color);
}
.btn-primary:focus{
    --bs-btn-active-bg: var(--primary-color);
    border: 1px solid var(--primary-color); 
}
</style>