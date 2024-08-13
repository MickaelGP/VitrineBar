<script setup>
import InputComponent from './InputComponent.vue';
</script>
<template>
    <section id="reservation">
        <div class="container text-white">
            <div class="text-center py-5">
                <span class="sub-title">Reservation</span>
                <h3>Faire une reservation</h3>
            </div>
            <div class="container w-50">
                <form action="">
                    <InputComponent label-title="Email :" id-input="inputMail" type="email"/>
                    <InputComponent label-title="Nom :" id-input="inputName" type="text"/>
                    <InputComponent label-title="Téléphone :" id-input="inputPhone" type="number"/>
                    <InputComponent label-title="Date :" id-input="inputDate" type="date"/>
                    <InputComponent label-title="Commentaire :" id-input="inputComment" type="text"/>
                    <InputComponent label-title="Heure :" id-input="inputhour" type="time"/>
                    <div class="text-center py-3">
                        <button class="btn btn-primary">Réserver</button>
                    </div>
                </form>
            </div>
        </div>
    </section>
</template>
<style scoped>
#reservation{
    background-color: var(--secondary-color);
}
.sub-title{
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