<template>
    <div class="bg">
    <Burger/>
    <div @click="goBack" class="empty"></div>
    </div>
</template>

<script>
import Burger from '@/components/menu/Burger.vue'
export default {
    components: {
       Burger
    },
    methods: {
        goBack() {
            this.$router.go(-1);
        }
    }
};
</script>

<style>

.empty {
    height: 100vh;
    width: 30%;
    position: fixed;
    background-color: rgb(124 146 150 / 65%);
    top: 0;
    right: 0;
}
</style>