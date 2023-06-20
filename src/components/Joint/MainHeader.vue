<template>
    <div class="header">
        <router-link to="/BGMenu" class="menu-icons">
            <font-awesome-icon icon="bars" size="7px" />
        </router-link>  
        <div class="search-icons">
            <font-awesome-icon icon="search" />
        </div>
    </div>
</template>

<script>
export default {
    name: "MainHeader",
};
</script>

<style>
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    background-color:  #FCFCFC;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    flex-basis: 100%;
    position: fixed;
    top: 0;
    width: 100%;
}

.menu-icons,
.search-icons {
    color: #373333;
    margin: 5%;
    display: flex;
  flex-direction: column;
}

.menu-icons:hover,
.search-icons:hover {
    background-color: #0D7DCF;
}

</style>