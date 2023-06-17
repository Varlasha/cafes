<template>
    <div class="container">
        <MainHeader/>
        <OwnMap/>
        <MainFooter/>
    </div>
</template>

<script>
import MainHeader from '@/components/MainHeader.vue';
import OwnMap from "@/components/Map/OwnMap.vue"
import MainFooter from '@/components/MainFooter.vue';
export default {
    components: {
        MainHeader,
        OwnMap,
        MainFooter
    }
};
</script>

<style>
.container {
    /* margin: 4% auto 0; */
    position: fixed;
  margin: 0;
  padding: 0;
  left: 0;
  /* top: 0;
  left: 0;
  right: 0;
  bottom: 0;*/
} 
</style>
