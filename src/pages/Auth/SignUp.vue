<template>
    <div class="containers">
        <img src="@/assets/Auth/logo.svg" alt="logo" class="logo">
        <div class="container-form">
            <form>
                <AuthInput id="name" type="text" v-model="name" placeholder="Введите ваше имя">
                </AuthInput>
                <AuthInput id="email" type="email" v-model="email" placeholder="Введите ваш email">
                </AuthInput>
                <AuthInput id="password" type="password" v-model="password" placeholder="Введите ваш пароль">
                </AuthInput>
                <AuthInput id="password" type="password" v-model="password" placeholder="Повторите ваш пароль">
                </AuthInput>
                <router-link to="/MapPage">
                <CustomButton>Регистрация</CustomButton>
                </router-link>
            </form>
            <div class="link">
                У вас уже есть аккаунт? <router-link to="/SignIn" class="active"> Вход</router-link>
            </div>
            <div class="line">
                <span>или</span>
            </div>
            <CustomButton BGcolor="#1877F2">
                <div class="btn-container">
                    <img src="@/assets/Button/Facebook.svg" alt="facebook" id="icon" />
                    <div>Facebook</div>
                </div>
            </CustomButton>
            <CustomButton BGcolor="#373333">
                <div class="btn-container">
                    <img src="@/assets/Button/Google.svg" alt="google" id="icon" />
                    <div>Google</div>
                </div>
            </CustomButton>
        </div>
    </div>
</template>

<script>
import AuthInput from "@/components/Auth/AuthInput.vue";
import CustomButton from "@/components/CustomButton.vue";

export default {
    components: {
        AuthInput,
        CustomButton
    }
};
</script>

<style>
 .containers {
    margin: 8% auto ;
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
}

.link,
.active {
font-family: "SourceSansProBold";
    font-size: calc(1.4875vw + 9px);
}

.link {
    margin: 1vh auto;
}

.active {
    color: #0D7DCF;
}

.line {
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
}
</style>
