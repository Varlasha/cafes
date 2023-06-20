<template>
    <div class="container">
        <MainHeader />
            <OwnMap />
        <MainFooter />
    </div>
</template>

<script>
import MainHeader from "@/components/Joint/MainHeader.vue";
import MainFooter from "@/components/Joint/MainFooter.vue";
import OwnMap from "@/components/Map/OwnMap.vue";
export default {
    components: {
        MainHeader,
        OwnMap,
        MainFooter,
    },
};
</script>

<style>
.container {
     height: 100vh;
    width: 100%;
    margin: 0;
    position: fixed;
    left: 0;
    display: grid;
    grid-template-columns: auto 1fr auto;
    gap: 0;
    justify-content: center;
    align-items: center;
    background-color: #FCFCFC;
}
</style>