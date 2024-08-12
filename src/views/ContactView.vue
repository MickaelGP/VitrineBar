<script setup>
import FooterComponent from '@/components/FooterComponent.vue';
import InputComponent from '@/components/InputComponent.vue';
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
                    <h2 class="">Contact us</h2>
                </div>
                <div class="container w-50">
                    <form action="">
                        <InputComponent label-title="Email :" id-input="inputMail" type="email" />
                        <InputComponent label-title="Name :" id-input="inputName" type="text" />
                        <InputComponent label-title="Phone number :" id-input="inputPhone" type="number" />
                        <InputComponent label-title="Message :" id-input="inputComment" type="text" />
                        <div class="text-center py-5">
                            <button class="btn btn-primary">Send</button>
                        </div>
                    </form>
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
#contact-section{
    background: var(--secondary-color);
    /* height: 100vh; */
}
h2{
    color: var(--primary-color);
}
.btn-primary:focus{
    --bs-btn-active-bg: var(--primary-color);
    border: 1px solid var(--primary-color); 
}
.btn-primary{
    border: 1px solid white; 
    background-color: transparent;
}
.btn-primary:hover{
    border: 1px solid var(--primary-color); 
    background-color: var(--primary-color);
}
</style>