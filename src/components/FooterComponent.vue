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
            <div class="col-lg-3">
                <img src="" alt="">
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum cumque facere dolorem eveniet
                    sapiente
                    enim excepturi error, nemo sint facilis nihil corporis minus culpa a asperiores itaque provident
                    delectus veritatis.
                </p>
            </div>
            <div class="col-lg-3">
                <div class="mt-2">
                    <h4>Navigation</h4>
                    <ul>
                        <li>
                            <RouterLink to="/" class="nav-link">Acceuil</RouterLink>
                        </li>
                        <li>
                            <RouterLink to="/" class="nav-link">Menu</RouterLink>
                        </li>
                        <li>
                            <RouterLink to="/" class="nav-link">Évènement</RouterLink>
                        </li>
                        <li>
                            <RouterLink to="/" class="nav-link">Contact</RouterLink>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="col-lg-3">
                <div class="mt-2">
                    <h4>Contactez-nous</h4>
                    <div>
                        <a href="tel:+3349300000" class="nav-link"><InconTelephone/> 049300000</a>
                        <a href="tmailto:resa@bistrotdesamis.fr" class="nav-link"><IconMail/> resa@bistrotdesamis.fr</a>
                        <a href="#" class="nav-link"><IconMap/> 12 rue des amis</a>
                    </div>
                </div>
            </div>
            <div class="col-lg-3">
                <div class="mt-2">
                <h4>Horaires d'ouverture</h4>
                </div>
                <div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item bg-black text-white">Lundi 9h00-00h30</li>
                        <li class="list-group-item bg-black text-white">Mardi 9h00-00h30</li>
                        <li class="list-group-item bg-black text-white">Mercredi 9h00-00h30</li>
                        <li class="list-group-item bg-black text-white">Jeudi 9h00-00h30</li>
                        <li class="list-group-item bg-black text-white">Vendredi 9h00-00h30</li>
                        <li class="list-group-item bg-black text-white">Samedi 9h00-00h30</li>
                        <li class="list-group-item bg-black text-white">Dimanche Fermé</li>
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
