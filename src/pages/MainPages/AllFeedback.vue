<template style="background-color: #E5EBEC; height: 100vh; width: 100vw ;">
    <div class="container-cards" style="background-color: #E5EBEC; height: max-content ">
        <div
            style="top: 0; left: 0; position: fixed;   padding-top: 3%; margin-right: 2%; background-color: #FCFCFC; width: 100%; ">
            <MainHeader />
        </div>
        <div style="margin-top: 10%; padding-top: 4%; padding-bottom: 20%;">
            <div v-for="(item, index) in 10" :key="index"  class="arr-card">
                <Card name="Название ресторана" info="от имя пользователя" />
            </div>
        </div>
        <div
            style="bottom: 0; left: 0; position: fixed;  padding-top: 2%; margin-right: 2%; background-color: #FCFCFC; width: 100%; ">
            <MainFooter />
        </div>
    </div>
</template>
<script>
import MainHeader from '@/components/MainHeader.vue';
import MainFooter from '@/components/MainFooter.vue';
import Card from '@/components/Card.vue';
export default {
    name: 'AllFeedback',
    components: {
        Card,
        MainFooter,
        MainHeader
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
</style>