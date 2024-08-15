<script setup>
import FooterComponent from '@/components/FooterComponent.vue';
import InputComponent from '@/components/InputComponent.vue';
import IconMap from '@/components/icon/IconMap.vue';
import IconInstagrame from '@/components/icon/IconInstagrame.vue';
import IconMail from '@/components/icon/IconMail.vue';
import InconTelephone from '@/components/icon/InconTelephone.vue';
function handleIntersect(el) {
    el.classList.add('visible-right');
}
</script>
<template>
    <main>
        <div class="hero d-flex align-items-center justify-content-center">
            <div class="hero-overlay"></div>
            <div class="hero-content text-center">
                <h1 class="display-3">Contact</h1>
            </div>
        </div>
        <section id="contact-section">
            <div class="container text-white">
                <div class="text-center py-5">
                    <h2 class="">Nous contacter</h2>
                </div>
                <div class="container w-50">
                    <form action="">
                        <InputComponent label-title="Email :" id-input="inputMail" type="email" />
                        <InputComponent label-title="Nom :" id-input="inputName" type="text" />
                        <InputComponent label-title="Téléphone :" id-input="inputPhone" type="number" />
                        <InputComponent label-title="Message :" id-input="inputComment" type="text" />
                        <div class="text-center py-5">
                            <button class="btn btn-primary">Envoyer</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
        <section class="nous-trouver bg-black">
            <div class="container text-white">
                <div class="text-center py-3">
                    <h2>Nous trouver</h2>
                </div>
                <div class="row mx-0">
                    <div class="col-lg-6">
                        <div class="google-maps my-3 before-enter" v-scrollanimation>
                            <div class="">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46127.34845263901!2d7.267942399999999!3d43.7321728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12cddbeff5a12477%3A0x93c7a4d5250df1e2!2sDecathlon%20City%20Nice%20Jean-M%C3%A9decin!5e0!3m2!1sfr!2sfr!4v1723577230283!5m2!1sfr!2sfr"
                                    frameborder="0" width="600" height="450" style="border:0;" allowfullscreen=""
                                    loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 ">
                        <div class="row g-5 my-3">
                            <div class="col-lg-6 text-center before-enter-right nous-trouver-badge" v-scrollanimation="handleIntersect">
                                <div class="p-3 nous-trouver-card ">
                                    <IconMap />
                                    <h5>Adresse</h5>
                                    <span class="sub-title">12 rue des amis</span>
                                </div>

                            </div>
                            <div class="col-lg-6 text-center before-enter nous-trouver-badge" v-scrollanimation>
                                <div class="p-3 nous-trouver-card " >
                                    <IconMail />
                                    <h5>Email</h5>
                                    <span class="sub-title">resa@bistrotdesamis.fr</span>
                                </div>
                            </div>
                            <div class="col-lg-6  text-center before-enter-right nous-trouver-badge" v-scrollanimation="handleIntersect">
                                <div class="p-3 nous-trouver-card ">
                                    <InconTelephone />
                                    <h5>Téléphone</h5>
                                    <span class="sub-title">049300000</span>
                                </div>
                            </div>
                            <div class="col-lg-6  text-center before-enter nous-trouver-badge" v-scrollanimation>
                                <div class="p-3 nous-trouver-card " >
                                    <IconInstagrame />
                                    <h5>Réseaux sociaux</h5>
                                    <span class="sub-title">Instagrame / Facebook</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
    <FooterComponent />
</template>
<style scoped>
footer {
    position: relative;
    right: 0;
    left: 0;
    bottom: 0;
}

.nous-trouver-card {
    /* border: 2px solid var(--border-color); */
    background-color: var(--secondary-color);
}

.hero {
    position: relative;
    background: url('../assets/img/contactHero.jpg') center center/cover no-repeat;
    background-position: center;
    height: 80vh;
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

#contact-section {
    background: var(--secondary-color);
    /* height: 100vh; */
}

h2,
.sub-title {
    color: var(--primary-color);
}

.btn-primary:focus {
    --bs-btn-active-bg: var(--primary-color);
    border: 1px solid var(--primary-color);
}

.btn-primary {
    border: 1px solid white;
    background-color: transparent;
}

.btn-primary:hover {
    border: 1px solid var(--primary-color);
    background-color: var(--primary-color);
}

.google-maps {
    overflow: hidden;
}

#instagrame {
    margin-bottom: 15px;
}

.before-enter {
    opacity: 0;
    transform: translateX(-100px);
    transition: all 1s cubic-bezier(.64, .08, .46, 1.09);
}

.visible {
    opacity: 1;
    transform: translateX(0px);
}

.before-enter-right {
    opacity: 0;
    transform: translateX(100px);
    transition: all 1s cubic-bezier(.64, .08, .46, 1.09);
}

.visible-right {
    opacity: 1;
    transform: translateX(0px);
}
.nous-trouver-badge:nth-child(2){
    transition-delay: 0.2s;
}
.nous-trouver-badge:nth-child(3){
    transition-delay: 0.5s;
    
}
.nous-trouver-badge:nth-child(4){
    transition-delay: 1s;
    
}
</style>