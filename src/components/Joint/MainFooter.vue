<template>
  <div class="footer">
    <router-link to="/Profile" class="footer-item" :class="{ active: $route.path === '/Profile' }">
      <font-awesome-icon icon="home" />
      <div>Профиль</div>
    </router-link>
    <router-link to="/MapPage" class="footer-item" :class="{ active: $route.path === '/MapPage' }">
      <font-awesome-icon icon="map" />
      <div>Карта</div>
    </router-link>
    <router-link to="/AllFeedback" class="footer-item" :class="{ active: $route.path === '/AllFeedback' }">
      <font-awesome-icon icon="users" />
      <i class="fas fa-users"></i>
      <div>Отзывы</div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "MainFooter",
};
</script>

<style>
.footer {
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color:  #FCFCFC;
  height: 65px;
  position: fixed;
  bottom: 0;
  width: 100%;
  font-family: "SourceSansProRegular", sans-serif;
}

.footer-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
  color: #373333;
}

.footer-item div {
  font-size: 14px;
  margin-top: 5px;
}

.footer-item.active {
  color: #0D7DCF;
  font-family: "SourceSansProRegular", sans-serif;
}
</style>