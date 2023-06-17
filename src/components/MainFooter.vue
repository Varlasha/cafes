<template>
  <div class="menu_container">
    <router-link to="/Profile" class="written" :class="{ active: $route.path === '/Profile' }">
      <img src="../assets/MainFooter/house.svg" alt="home" />
      <div>Профиль</div>
    </router-link>
    <router-link to="/MapPage" class="written" :class="{ active: $route.path === '/MapPage' }">
      <img src="../assets/MainFooter/Map.svg" alt="map" />
      <div>Карта</div>
    </router-link>
    <router-link to="/AllFeedback" class="written" :class="{ active: $route.path === '/AllFeedback' }">
      <img src="../assets/MainFooter/Users.svg" alt="community" />
      <div>Отзывы</div>
    </router-link>
  </div>
</template>
<script>
export default {
  name: 'MainFooter'
}
</script>
<style>
.menu_container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 2% auto;
  height: 4.5%;
  width: 100%;
}

.written img {
  width: calc(1.4875vw + 24px);
  height: calc(1.4875vw + 20px);
color: #0126A8;
}

.written {
  display: flex;
  color: #373333;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 4.5%;
  text-decoration: none;
  font-size: calc(1.6875vw + 10px);
  font-family: "SourceSansProRegular";
}

.written.active {
  color: #0D7DCF;
}

.written.active img {
  filter: invert(20%) sepia(100%) saturate(7500%) hue-rotate(190deg) brightness(95%) contrast(120%);
}
</style>