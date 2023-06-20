<template>
    <div class="page-wrapper">
        <MainHeader />
        <div class="content-wrapper">
            <div v-for="(item, index) in 10" :key="index" class="arr-card">
                <Card title="Название ресторана" sub="от имя пользователя" />
            </div>
        </div>
        <MainFooter />
    </div>
</template>

<script>
import MainHeader from '@/components/Joint/MainHeader.vue';
import MainFooter from '@/components/Joint/MainFooter.vue';
import Card from '@/components/Cards/Card.vue';

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
.page-wrapper {
    height: 100vh;
    width: 100%;
    margin: 0;
    position: fixed;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #E5EBEC;
}

.content-wrapper {
   height: 100%;
  overflow-y: scroll;
  padding-top: 9%;
  padding-bottom: 20%;
  margin-top: 20px;
  width: 95%;
}

.content-wrapper::-webkit-scrollbar {
  width: 0px;
}
</style>