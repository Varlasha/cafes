<template>
    <div class="flex-card">
        <div class="title">{{ title }}</div>
        <router-link to="/AllFeedback" class="review">
            <div class="reviews">Отзывы</div>
            <font-awesome-icon icon="caret-right" class="icon-right" />
        </router-link>
        <div class="icons">
            <div class="icon">
                <font-awesome-icon icon="star" class="icon-arr" />
                <div class="text">5</div>
            </div>
            <div class="icon">
                <font-awesome-icon icon="heart" class="icon-arr" />
                <div class="text">5</div>
            </div>
            <div class="icon">
                <font-awesome-icon icon="location-arrow" class="icon-arr" />
                <div class="text">5 км</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: "Markers",
    props: {
        title: String
    },
};
</script>

<style scoped>
.flex-card {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    height: min-content;
}

.title {
    font-size: calc(1.6875vw + 8px);
    font-family: "PlayfairDisplayBold";
    margin-bottom: 5px;
}

.review {
    display: flex;
    margin-bottom: 5px;
    justify-content: center;
    align-items: center;
    color: #373333;
    text-decoration: none;
}

.review:hover {
    color: #0d7dcf;
}

.review .icon {
    font-size: 20px;
    margin-right: 10px;
}

.icons {
    display: flex;
    flex-direction: row;
}

.icon {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-right: 10px;
}

.reviews {
    text-align: start;
    font-size: calc(1.6875vw + 8px);
    font-family: "SourceSansProRegular";
}

.text {
    text-align: start;
    font-size: calc(1.6875vw + 6px);
    font-family: "SourceSansProRegular";
}

.icon-arr {
    width: 9px;
    margin-right: 2px;
}

.icon-right {
    width: 6px;
    margin-top: 2px;
    margin-left: 4px;
}

</style>