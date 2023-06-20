<template>
    <div class="pages">
    <SettingHeader title="Новый отзыв" />
    <div class="feed-container">
                <label for="name" class="title-labl">Название ресторана:</label>
                <input class="restoran" type="text" id="namess" v-model="name" placeholder="Введите адрес ресторана">
                <label for="description" class="title-labl">Ваша оценка:</label>
                <StarRating />
                <textarea id="description" v-model="description" placeholder="Напишите ваш отзыв"></textarea>
    </div>
    <MainFooter />
    </div>
</template>

<script>
import StarRating from '../../components/Rating/StarRating.vue';
import SettingHeader from '@/components/Joint/SettingHeader.vue';
import MainFooter from '@/components/Joint/MainFooter.vue';

export default {
    name: "NewFeedback",
    components: {
        StarRating,
        MainFooter,
        SettingHeader
    }
};
</script>

<style scoped>
.pages {
    height: 100vh;
    width: 100%;
    margin: 0;
    position: fixed;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #FCFCFC;
}
.feed-container {
  width: 90%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}



.title-labl {
    display: flex;
    align-items: start;
    width: 90%;
    font-size: calc(1.6875vw + 10px);
    font-family: "SourceSansProRegular";
    margin-bottom: 4%;
}

.restoran {
    border: 1px solid rgba(55, 51, 51, 0.4);
    border-radius: 10px;
    width: 90%;
    height: 35px;
    padding-left: 14px;
    margin-bottom: 10%;
    font-size: calc(1.6875vw + 8px);
    font-family: "SourceSansProRegular";
}

textarea {
    border: 1px solid rgba(55, 51, 51, 0.4);
    border-radius: 15px;
    font-size: calc(1.6875vw + 8px);
    width: 90%;
    height: 170px;
    margin-top: 5%;
    padding-left: 14px;
    font-family: "SourceSansProRegular";
}
</style>