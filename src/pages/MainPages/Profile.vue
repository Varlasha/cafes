<template style=" height: 100vh; width: 100vw;" >
   <div class="container-cards" >
            <SettingHeader title="Ваши отзывы"/>
             <img src="../../assets/Card/add.svg" alt="add.svg" style="padding: 3% 0 8%;"/>
        <router-link to="/Liked">
            <div style="display: inline-flex; width: 80%; align-items: start;">
            <div style="text-align: start;">
                <div id="actions">Избранное</div>
                <div id="recenrly">Недавние</div>
            </div>
            <img src="../../assets/Card/arrow.svg" alt="arrow">
        </div>
        </router-link>
        <div style="display: flex; flex-direction: row; width: 90%; gap: 4%; 
  flex-wrap: no-wrap;
  overflow-x: auto;
  padding: 0 3%;">
            <div v-for="(item, index) in 10" :key="index" class="arr-card">
                <CardProfil />
            </div>
        </div>
        <router-link to="/OwnFeed">
                <div style="display: inline-flex; width: 80%; align-items: start; margin-top: 7%;">
                <div style="text-align: start;">
                    <div id="actions">Ваши отзывы</div>
                    <div id="recenrly">Недавние</div>
                </div>
                <img src="../../assets/Card/arrow.svg" alt="arrow">
            </div>
            </router-link>
           <div style="display: flex; flex-direction: row; width: 96%; gap: 4%;
  flex-wrap: no-wrap;
  overflow-x: auto;
 padding: 3% 0 20%;">
                <div v-for="(item, index) in 10" :key="index" class="arr-card">
                    <CardProfil />
                </div>
            </div>
        <div
            style="bottom: 0; left: 0; position: fixed;  padding-top: 2%; margin-right: 2%; background-color: #FCFCFC; width: 100vw; ">
            <MainFooter />
        </div>
    </div>
</template>
<script>
import SettingHeader from '@/components/SettingHeader.vue';
import MainFooter from '@/components/MainFooter.vue';
import CardProfil from '@/components/CardProfil.vue';
export default {
    name: 'AllFeedback',
    components: {
        CardProfil,
        MainFooter,
        SettingHeader
    }
}
</script>
<style>
.conteiner-cards {
    display: flex;
    gap: 10%;
}

.arr-card {
    margin-bottom: 5%;
}
#actions {
    font-size: calc(1.6875vw + 12px);
    color: #373333;
}
#recenrly {
    font-size: calc(1.6875vw + 8px);
    color: #8D8D90;
}

#actions
#recenrly{
  font-family: "SourceSansProRegular";
}
</style>