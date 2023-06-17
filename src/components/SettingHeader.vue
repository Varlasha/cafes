<template>
    <div
        style=" height: 8%; align-items: center; display: flex; flex-direction: column; background-color: #FCFCFC;  width: 100%;">
        <div class="filter-title">{{ title }}</div>
        <div style="display: flex; flex-direction: row; justify-content: space-between; width: 90%;padding-bottom: 2%; ">
            <div class="btn-filter" @click="goBack">{{ cantel }}</div>
            <div class="btn-filter" @click="goBack">{{ save }}</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SettingHeader',
    props: {
        title: String,
        save: {
            save: String,
            default: "Готово"
        },
        cantel: {
            color: String,
            default: "Назад"
        },
        sizeW: {
            color: String,
            default: "85vw"
        }
    },
    methods: {
        goBack() {
            this.$router.go(-1);
        }
    }
}
</script>

<style>
.filter-title {
    font-family: "PlayfairDisplayRegular";
    font-size: calc(1.6875vw + 10px);
}

.btn-filter {
    font-size: calc(1.6875vw + 9px);
    font-family: "SourceSansProRegular";
    margin-bottom: 2%;
    color: #0D7DCF;
}
</style>