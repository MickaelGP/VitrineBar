<script setup>
function handleIntersect(el) {
  el.classList.add('visible');
}
</script>
<template>
    <section class="bg-black text-white py-3">
        <div class="container">
            <div class="text-center my-3" id="title-service">
                <span class="sub-title">Nos services</span>
                <h3>Services</h3>
            </div>
            <div class="row">
                <div class="col-lg-4 text-center before-enter aze" v-scrollanimation="handleIntersect">
                    <div class="my-5 py-5 px-5 services service-1">
                        <h4>Lorem ipsum</h4>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum reprehenderit omnis dicta eos
                            pariatur dolores
                        </p>
                    </div>
                </div>
                <div class="col-lg-4 text-center before-enter service-2 aze" v-scrollanimation="handleIntersect">
                    <div class="my-5 services py-5 px-5">
                        <h4>Lorem ipsum</h4>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum reprehenderit omnis dicta eos
                            pariatur dolores
                        </p>
                    </div>
                </div>
                <div class="col-lg-4 text-center before-enter service-3 aze" v-scrollanimation="handleIntersect">
                    <div class="my-5 services py-5 px-5">
                        <h4>Lorem ipsum</h4>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum reprehenderit omnis dicta eos
                            pariatur dolores
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<style scoped>
.sub-title{
    color: var(--primary-color);
}
.services{
    border: 2px solid var(--border-color);
}
.services:hover{
    border: 2px solid var(--primary-color);
}
.before-enter{
opacity: 0;
transform: translateY(100px);
transition: all 1s cubic-bezier(.64,.08,.46,1.09);
}
.visible{
  opacity: 1;
  transform: translateY(0px);
}
.aze:nth-child(2){
    transition-delay: 0.5s;
}
.aze:nth-child(3){
    transition-delay: 1s;
}
</style>