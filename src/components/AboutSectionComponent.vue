<script setup>
function handleIntersect(element) {
  element.classList.add('visible-left');
}
</script>
<template>
    <section class="text-white about">
        <div class="container py-5">
            <div class="row mx-0">
                <div class="col-lg-6 mt-5 before-enter-left" v-scrollanimation="handleIntersect">
                    <div>
                        <span class="sub-title">Music - Bar</span>
                        <h5>Lorem ipsum, dolor sit amet consectetur.</h5>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut nostrum quis voluptates,
                            dolores
                            veniam recusandae natus consectetur. Cumque ullam voluptas deleniti facere quae dolores sit
                            nemo nobis quia? Accusamus, autem?
                        </p>
                    </div>
                    <div>
                        <a href="" class="btn btn-primary">Reserver une table</a>
                    </div>
                </div>
                <div class="d-none d-lg-block col-lg-6 text-center before-enter-right" v-scrollanimation="handleIntersect">
                    <img src="../assets/img/rounded2.jpg" alt="" class="img-fluid rounded-circle">
                </div>
            </div>
        </div>
    </section>
</template>
<style scoped>
.sub-title {
    color: var(--primary-color);
}

.about {
    background-color: var(--secondary-color);
}

img {
    width: 300px;
    height: 300px;
}

a {
    background-color: transparent;
    border: 1px solid white;
}

a:hover {
    background-color: var(--primary-color);
    border: 1px solid var(--primary-color);
}

.btn-primary:focus {
    --bs-btn-active-bg: var(--primary-color);
    border: 1px solid var(--primary-color);
}

.before-enter-left {
    opacity: 0;
    transform: translateX(-100px);
    transition: all 2s cubic-bezier(.88,.05,.08,1.24);
}
.before-enter-right {
    opacity: 0;
    transform: translateX(100px);
    transition: all 2s cubic-bezier(.88,.05,.08,1.24);
}
.visible-left{
    opacity: 1;
    transform: translateX(0px);
}
</style>