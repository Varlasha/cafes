<template>
    <div class="menu">
        <div class="user">
            <font-awesome-icon icon="user" class="iconka" />
            <div>Имя пользователя</div>
            <font-awesome-icon icon="cog" class="iconka-setting" />
        </div>
        <router-link to="/NewFeedback" class="linked">
            <font-awesome-icon icon="file-alt" class="iconka" />
            <div>Добавить отзыв</div>
        </router-link>
        <router-link to="/OWnFeed" class="linked">
            <font-awesome-icon icon="file" class="iconka" />
            <div>Ваш отзыв</div>
        </router-link>
        <router-link to="/Liked" class="linked">
            <font-awesome-icon icon="heart" class="iconka" />
            <div>Избранное</div>
        </router-link>
    </div>
</template>

<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: "Burger"
};
</script>

<style>
.menu {
    background-color: #E5EBEC;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 70%;
    height: 100vh;
    padding-top: 4px;
    font-family: "SourceSansProRegular", sans-serif;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.menu>div ,
.menu>.linked {
    display: flex;
    align-items: center;
    padding: 20px;
    padding-left: 9%;
    cursor: pointer;
    color: #373333;
    text-decoration: none;
}

.menu>div:hover ,
.menu>.linked:hover  {
    background-color: #f5f5f5;
}

.menu>div>.iconka,
.menu>.linked>.iconka {
    margin-right: 15px;
    font-size: 20px;
}

.iconka-setting {
    margin-left: 20px;
}
</style>