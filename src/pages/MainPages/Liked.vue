<template style="background-color: #E5EBEC; height: 100vh; width: 100vw ;">
    <div class="container-cards" style="background-color: #E5EBEC; height: max-content ">
        <SettingHeader title="Избранное" />
        <div style="padding-top: 4%; padding-bottom: 20%;">
            <div v-for="(item, index) in 10" :key="index" class="arr-card">
                <Card name="Название ресторана" info="01.12.2022" :items="[
                    { icons: 'location.svg', val: '' },
                    { icons: 'likes.svg', val: '' },
                ]"/>
            </div>
        </div>
        <div
            style="bottom: 0; left: 0; position: fixed;  padding-top: 2%; margin-right: 2%; background-color: #FCFCFC; width: 100%; ">
            <MainFooter />
        </div>
    </div>
</template>
<script>
import MainFooter from '@/components/MainFooter.vue';
import Card from '@/components/Card.vue';
import SettingHeader from '@/components/SettingHeader.vue';
export default {
    name: 'OwnFeed',
    components: {
        Card,
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
</style>