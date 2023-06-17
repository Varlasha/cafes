<template>
    <div class="main">
                <router-link to="/SignIn">
                    <CustomButton>Вход</CustomButton>
                </router-link>
                <router-link to="/SignUp">
                    <CustomButton>Регистрация</CustomButton>
                    </router-link>
    </div>
</template>

<script>
import CustomButton from "@/components/CustomButton.vue"
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: "Start",
    components: {
        CustomButton
    }
};
</script>

<style>
.main {
    position: fixed;
    top: 0;
    left: 0;
  display: flex;
  flex-direction: column;
  gap: 5%;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  text-align: center;
  background-image: url('../../assets/Auth/Frame.png');
  background-position: center;
  background-size: cover;
  margin: auto 0;
  padding: 0;
}
</style>
