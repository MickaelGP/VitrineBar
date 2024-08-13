<script setup>
import { RouterLink } from 'vue-router';
import IconFacebook from './icon/IconFacebook.vue';
import IconInstagrame from './icon/IconInstagrame.vue';
import InconTelephone from './icon/InconTelephone.vue';
import IconMail from './icon/IconMail.vue';
import IconMap from './icon/IconMap.vue';
</script>
<template>
    <footer class="bg-black text-white">
        <div class="row mx-0">
            <div class="col-lg-3 pt-3">
                <img src="" alt="">
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum cumque facere dolorem eveniet
                    sapiente
                    enim excepturi error, nemo sint facilis nihil corporis minus culpa a asperiores itaque provident
                    delectus veritatis.
                </p>
            </div>
            <div class="col-lg-3 pt-3">
                <div class="mt-2">
                    <h4>Navigation</h4>
                    <div class="row">
                        <div class="col-6">
                            <RouterLink to="/" class="nav-link">Accueil</RouterLink>
                        </div>
                        <div class="col-6">
                            <RouterLink to="/menu" class="nav-link">La carte</RouterLink>
                        </div>
                        <div class="col-6">
                            <RouterLink to="/contact" class="nav-link">Contact</RouterLink>
                        </div>
                        <div class="col-6">
                            <a href="/#reservation" class="nav-link">Reservation</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 pt-3">
                <div class="mt-2">
                    <h4>Nous contacter</h4>
                    <div>
                        <a href="tel:+3349300000" class="nav-link"><InconTelephone/> 049300000</a>
                        <a href="tmailto:resa@bistrotdesamis.fr" class="nav-link"><IconMail/> resa@bistrotdesamis.fr</a>
                        <a href="#" class="nav-link"><IconMap/> 12 rue des amis</a>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 pt-3">
                <div class="mt-2">
                <h4>Horaires d'ouvertures</h4>
                </div>
                <div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item bg-black text-white"><span class="day">Lundi :</span> <span class="time-day">9h00-00h30</span></li>
                        <li class="list-group-item bg-black text-white"><span>Mardi :</span> <span>9h00-00h30</span></li>
                        <li class="list-group-item bg-black text-white"><span>Mercredi :</span> <span>9h00-00h30</span></li>
                        <li class="list-group-item bg-black text-white"><span>Jeudi :</span> <span>9h00-00h30</span></li>
                        <li class="list-group-item bg-black text-white"><span>Vendredi :</span> <span>9h00-00h30</span></li>
                        <li class="list-group-item bg-black text-white"><span>Samedi :</span> <span>9h00-00h30</span></li>
                        <li class="list-group-item bg-black text-white"><span>Dimanche :</span> <span>Fermé</span></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="text-center mt-3">
            <div class="my-2 d-flex justify-content-center">
                <a href="" class="nav-link"><IconFacebook/></a>
                <a href="" class="nav-link"><IconInstagrame/></a>
            </div>
            <div class="py-3">
                Tout droit réserver
            </div>
        </div>
    </footer>
</template>
<style>
.nav-link{
    color: white;
}
.nav-link:hover{
    color: var(--primary-color);
}
.router-link-exact-active{
    color: var(--primary-color);
}
.list-group-item { 
    display: flex;
    justify-content: space-between;
}
</style>