<template>
    <div class="wrapper-page">
        <MainHeader />
        <div class="conteiner-pages">
        <img src="../../assets/image/Card/add.svg" alt="" class="add-image" />
        <router-link to="/OwnFeed" class="menu-profil">
            <div class="text-profil">Ваши отзывы</div>
            <font-awesome-icon icon="caret-right" class="icon-right" />
        </router-link>
        <div class="wrapper">
            <div v-for="(item, index) in 5" :key="index" class="array-card">
                <CardProfil title="Название ресторана" sub="от имя пользователя" />
            </div>
        </div>
        <router-link to="/Liked" class="menu-profil">
            <div class="text-profil">Избранное</div>
            <font-awesome-icon icon="caret-right" class="icon-right" />
        </router-link>
        <div class="wrapper">
            <div v-for="(item, index) in 5" :key="index" class="array-card">
                <CardProfil title="Название ресторана" sub="от имя пользователя" />
            </div>
        </div>
        </div>
        <MainFooter />
    </div>
</template>

<script>
import MainHeader from '@/components/Joint/MainHeader.vue';
import MainFooter from '@/components/Joint/MainFooter.vue';
import CardProfil from '@/components/Cards/CardProfil.vue';

export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Profile',
    components: {
        CardProfil,
        MainFooter,
        MainHeader
    }
}
</script>

<style>
.wrapper-page {
    margin: 0;
     position: absolute;
    left: 0;
    display: grid;
    justify-content: center;
    align-items: center;
    background-color: #FCFCFC;
}

.conteiner-pages {
    padding-top: 55%;
    padding-bottom: 15%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow-y: scroll;
}

.conteiner-pages::-webkit-scrollbar {
  width: 0px;
}
.add-image {
    margin-top: 60px;
    margin-bottom: 5%;
}

.wrapper{
    display: flex;
    flex-direction: row;
    justify-content: flex-start; 
    align-items: center;
    height: 220px;
    overflow-x: scroll; 
    padding-left: 20px;
    width: 90%; 
} 

.wrapper::-webkit-scrollbar {
  width: 0px;
}

.menu-profil {
    display: flex;
    margin-top: 10px;
    margin-bottom: 5px;
    width: 80%;
    justify-content: start;
    align-items: center;
    color: #373333;
    text-decoration: none;
    margin-top: 4%;
}

.menu-profil:hover {
    color: #0d7dcf;
}

.icon-right {
    width: 6px;
    margin-top: 2px;
    margin-left: 4px;
}

.text-profil {
    font-size: calc(1.6875vw + 11px);
    font-family: "SourceSansProRegular";
}
</style>