<template>
    <div class="flex-container">
        <div class="flex-item">
            <img src="../assets/MainHeader/Menu.svg" alt="menu">
        </div>
        <div class="flex-item">
            <img src="../assets/MainHeader/Search.svg" alt="search">
        </div>
    </div>
</template>

<script>
export default {
    name: 'MainHeader'
}
</script>

<style>
.flex-container {
    margin: 1.5% auto 2.5%;
    width: 90%;
    height: 4.5%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

.flex-item {
    flex-shrink: 2;
}

.flex-item img {
    height: 100%;
    width: 100%;
}
</style>