<template>
    <div class="containers">
        <img src="@/assets/image/Auth/logo.svg" alt="logo" class="logo">
        <div class="container-form">
            <form>
                <AuthInput id="name" type="text" v-model="name" placeholder="Введите ваше имя">
                </AuthInput>
                <AuthInput id="password" type="password" v-model="password" placeholder="Введите ваш пароль">
                </AuthInput>
                <router-link to="/MapPage">
                <CustomButton>Вход</CustomButton>
                </router-link>
            </form>
            <div class="link1">
                У вас еще нет аккаунта? <router-link to="/SignUp" class="active">Регистрация </router-link>
            </div>
            <a class="link2">Забыли пароль?</a>
            <div class="line">
                <span>или</span>
            </div>
            <CustomButton BGcolor="#1877F2">
                <div class="btn-container">
                    <img src="@/assets/image/Button/Facebook.svg" alt="facebook" id="icon" />
                    <div>Facebook</div>
                </div>
            </CustomButton>
            <CustomButton BGcolor="#373333">
                <div class="btn-container">
                    <img src="@/assets/image/Button/Google.svg" alt="google" id="icon" />
                    <div>Google</div>
                </div>
            </CustomButton>
        </div>
    </div>
</template>

<script>
import AuthInput from "@/components/Auth/AuthInput.vue";
import CustomButton from "@/components/Joint/CustomButton.vue";

export default {
    components: {
        AuthInput,
        CustomButton
    }
};
</script>

<style>
/* .container {
    margin: 8% auto;
}

.container-form,
form {
    display: flex;
    flex-direction: column;
    gap: calc(1.6875vw + 10px);
    align-items: center;
}

.logo {
    margin: 0 auto;
    width: 60vw;
    margin-bottom: calc(6% + 15px);
}

.btn-container {
    display: grid;
    grid-template-columns: 17% 65%;
    align-items: center;
    justify-items: center;
} */

.link1,
.link2 {
    font-family: "SourceSansProBold";
    font-size: calc(1.4875vw + 9px);
}

.link1 {
    color: #373333;
    margin: 1vh auto 0.1vh;
}

.link2 {
    color: #0D7DCF;
}

.link2 {
    margin: 0 auto 1vh;
}

/* .line {
    font-family: "SourceSansProRegular";
    font-size: calc(1.4875vw + 9px);
    width: 100%;
    border-bottom: 1px solid #727070;
    line-height: 0.1em;
    margin: 1.2vh auto 1.5vh;
}

.line span {
    background: #fff;
    padding: 0 10px;
} */

.active {
    text-decoration: none;
}
</style>
