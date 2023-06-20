<template>
    <div class="card">
        <div class="image">
            <img :src="require(`@/assets/image/Card/${imageSrc}`)" alt="Card Image" />
        </div>
        <div class="details">
            <div class="title-card">{{ title }}</div>
            <div class="sub">{{ sub }}</div>
            <div class="information">{{ description }}</div>
            <div class="icons">
                <div class="icon" v-for="item in items" :key="item.icons">
                    <font-awesome-icon :icon="item.icons" class="icon-arr" :style="{ color: item.color }" @click="changeColor(item)" />
                    <div>
                        {{ item.val }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: "Test",
    props: {
        imageSrc: {
            type: String,
            default: "Photo.png"
        },
        title: String,
         sub: String,
        description: {
            type: String,
            default: "Вкусно от слова бесконечно! Ресторан в прекрасном месте с потрясающими видами."
        },
        items: {
            type: Array,
            default: () => [
                { icons: "star", val: "5", color:"#373333" },
                { icons: "heart", val: "5", color: "#373333" },
                { icons: "location-arrow", val: "5 км", color: "#373333" }
            ]
        }
    },
     methods: {
        changeColor(item) {
            if (item.color === "#373333") {
                item.color = "#0d7dcf";
            } else {
                item.color = "#373333";
            }
        },
    },
};
</script>

<style scoped>
.card {
    display: flex;
    flex-direction: row;
    box-shadow: 0px 0px 8px rgba(138, 134, 134, 0.32);
    border-radius: 10px;
    background-color: #FCFCFC;
    padding: 10px;
    margin: 10px;
}

.image {
    flex: 1;
    margin-right: 10px;
    margin-top: auto;
    margin-bottom: auto;
}

.image img {
    width: 100%;
    height: auto;
}

.details {
    flex: 2;
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
    margin-top: 5px;
}

.icon-arr{
    width: 11px;
    margin-right: 2px;
}
.title-card {
    text-align: start;
    font-size: calc(1.6875vw + 8px);
  font-family: "PlayfairDisplayBold";
}

.information {
    text-align: start;
    font-size: calc(1.6875vw + 8px);
  font-family: "SourceSansProRegular";
}

.sub{
    text-align: start;
    font-size: calc(1.6875vw + 6px);
  font-family: "SourceSansProRegular";
}
</style>