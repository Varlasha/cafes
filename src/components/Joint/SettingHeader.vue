<template>
    <div class="header-container">
        <div class="filter-title">{{ title }}</div>
        <div class="btn-container">
            <div class="btn-filter" @click="goBack">{{ cantel }}</div>
            <div class="btn-filter" @click="goSucsess">{{ save }}</div>
        </div>
    </div>
</template>

<script>
export default {
    name: "SettingHeader",
    props: {
        title: String,
        save: {
            save: String,
            default: "Готово",
        },
        cantel: {
            color: String,
            default: "Назад",
        },
        sizeW: {
            color: String,
            default: "85vw",
        },
    },
    methods: {
        goBack() {
            this.$router.go(-1);
        },
        goSucsess() {
            this.$router.go(-2);
        },
    },
};
</script>

<style scoped>
.header-container {
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    height: 50px;
    background-color:  #FCFCFC;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    flex-basis: 100%;
    position: fixed;
    top: 0;
    width: 100%;
}

.filter-title {
    margin-top: 2px;
    font-family: "PlayfairDisplayRegular";
    font-size: calc(1.6875vw + 10px);
}

.btn-container {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    margin: 0 auto;
    width: 90%;
}

.btn-filter {
    font-size: calc(1.6875vw + 9px);
    font-family: "SourceSansProRegular";
    color: #0d7dcf;
}
</style>