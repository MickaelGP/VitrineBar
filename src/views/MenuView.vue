<script setup>
import FooterComponent from '@/components/FooterComponent.vue';
import MenuElementComponent from '@/components/MenuElementComponent.vue';
</script>
<template>
    <main>
        <section id="cocktails">
            <div class="container">
                <div class="text-center py-5">
                    <span class="sub-title">La carte</span>
                    <h3>Cocktails</h3>
                </div>
                <div class="row mx-0 py-5">
                    <MenuElementComponent>
                        <template v-slot:title>
                            Classic Mojito
                        </template>
                        <template v-slot:price>
                            14$
                        </template>
                        <template v-slot:description>
                            Rhum, Citron Vert, Menthe Fraîche, Sucre roux, Eau
                            gazeuse
                        </template>
                    </MenuElementComponent>
                    <MenuElementComponent>
                        <template v-slot:title>
                            Mojito Exotique
                        </template>
                        <template v-slot:price>
                            14$
                        </template>
                        <template v-slot:description>
                            Rhum, Purée de Passion, Mangue, Ananas, Citron Vert,
                            Menthe Fraîche, Sucre
                            roux, Eau gazeuse
                        </template>
                    </MenuElementComponent>
                    <MenuElementComponent>
                        <template v-slot:title>
                            Apérol Spritz
                        </template>
                        <template v-slot:price>
                            14$
                        </template>
                        <template v-slot:description>
                            Apérol, Prosecco, Eau gazeuse
                        </template>
                    </MenuElementComponent>
                    <MenuElementComponent>
                        <template v-slot:title>
                            Galet’s Spritz
                        </template>
                        <template v-slot:price>
                            14$
                        </template>
                        <template v-slot:description>
                            Apérol, Jus d’Orange Pressée, Prosecco, Sirop de
                            Sucre
                        </template>
                    </MenuElementComponent>
                    <MenuElementComponent>
                        <template v-slot:title>
                            Sex on the Beach
                        </template>
                        <template v-slot:price>
                            14$
                        </template>
                        <template v-slot:description>
                            Vodka, Crème de Pêche, Jus d’Orange, Jus de
                            Cranberries
                        </template>
                    </MenuElementComponent>
                    <MenuElementComponent>
                        <template v-slot:title>
                            Caïpirinha
                        </template>
                        <template v-slot:price>
                            14$
                        </template>
                        <template v-slot:description>
                            Cachaça, Citron Vert, Cassonade
                        </template>
                    </MenuElementComponent>
                    <MenuElementComponent>
                        <template v-slot:title>
                            Moscow Mule
                        </template>
                        <template v-slot:price>
                            16$
                        </template>
                        <template v-slot:description>
                            Vodka, Ginger Beer, Jus de Citron Vert
                        </template>
                    </MenuElementComponent>
                    <MenuElementComponent>
                        <template v-slot:title>
                            Mary Pickford
                        </template>
                        <template v-slot:price>
                            16$
                        </template>
                        <template v-slot:description>
                            Rhum cubain, liqueur marasquin, ananas, citron vert,
                            grenadine
                        </template>
                    </MenuElementComponent>
                    <MenuElementComponent>
                        <template v-slot:title>
                            Cosmopolitan
                        </template>
                        <template v-slot:price>
                            16$
                        </template>
                        <template v-slot:description>
                            Rye Whisky, vermouth rouge, Angostura Bitters
                        </template>
                    </MenuElementComponent>
                    <MenuElementComponent>
                        <template v-slot:title>
                            Cuba Libre
                        </template>
                        <template v-slot:price>
                            14$
                        </template>
                        <template v-slot:description>
                            Rhum citron vert coca-cola
                        </template>
                    </MenuElementComponent>
                    <MenuElementComponent>
                        <template v-slot:title>
                            Margarita
                        </template>
                        <template v-slot:price>
                            16$
                        </template>
                        <template v-slot:description>
                            Vodka, Cointreau, cranberries, citron vert
                        </template>
                    </MenuElementComponent>
                    <MenuElementComponent>
                        <template v-slot:title>
                            Royal
                        </template>
                        <template v-slot:price>
                            20$
                        </template>
                        <template v-slot:description>
                            Kirsch, sirop de framboise, zeste d’orange, Champagne
                            Blanc de Blanc,
                            paillettes d’or
                        </template>
                    </MenuElementComponent>
                </div>
            </div>
        </section>

        <section class="image-cocktail"></section>

        <section id="whisky" class="bg-black">
            <div class="container">
                <div class="text-center py-5">
                    <span class="sub-title">La carte</span>
                    <h3>Whisky</h3>
                </div>
                <div class="row mx-0 py-5">
                    <MenuElementComponent>
                        <template v-slot:title>
                            Macallan
                        </template>
                        <template v-slot:price>
                            14$
                        </template>
                        <template v-slot:description>
                            12 ans d'age triple cask matured 6cl 
                        </template>
                    </MenuElementComponent>
                    <MenuElementComponent>
                        <template v-slot:title>
                            Macallan
                        </template>
                        <template v-slot:price>
                            16$
                        </template>
                        <template v-slot:description>
                            12 ans d'age sherry oak cask 6cl
                        </template>
                    </MenuElementComponent>
                    <MenuElementComponent>
                        <template v-slot:title>
                            Rozelieures
                        </template>
                        <template v-slot:price>
                            12$
                        </template>
                        <template v-slot:description>
                            Single malt origine collection 6cl
                        </template>
                    </MenuElementComponent>
                    <MenuElementComponent>
                        <template v-slot:title>
                            Oban
                        </template>
                        <template v-slot:price>
                            14$
                        </template>
                        <template v-slot:description>
                            14 ans d'age tourbé 6cl 
                        </template>
                    </MenuElementComponent>
                </div>
            </div>
        </section>
        <section class="image-whisky"></section>
    </main>
    <FooterComponent />
</template>
<style scoped>
footer {
    /* position: absolute; */
    bottom: 0;
}

.sub-title {
    color: var(--primary-color);
}

#cocktails {
    background-color: var(--secondary-color);
    color: white;
}
.image-cocktail{
    height: 30rem;
    background-image: url('../assets/img/cocktail.jpg');
    background-position: center;
    background-size: cover;
}
#whisky {
    color: white;
}

.image-whisky {
    height: 30rem;
    background-image: url('../assets/img/whisky.jpg');
    background-position: center;
    background-size: cover;
}
</style>