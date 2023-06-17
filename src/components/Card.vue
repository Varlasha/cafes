<template>
    <div class="card">
        <img :src="require(`@/assets/Card/${links}`)" alt="photo">
        <div class="colmn">
            <div class="words">
                <div id="namesis"> {{ name }}</div>
                <div id="info">{{ info }}</div>
                <div id="description">{{ description }}</div>
            </div>
            <div class="content">
            <div id="card-items" v-for="item in items" :key="item.icons">
                <img :src="require(`@/assets/Card/${item.icons}`)" alt="icons">
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
    name: 'Card',
    props: {
        links: {
            links: String,
            default: "Photo.png"
        },
        name: String,
        info: String,
        description: {
            description: String,
            default: "Вкусно от слова бесконечно! Ресторан в прекрасном месте с потрясающими видами."
        },
        items: {
            type: Array,
            default: () => [
                { icons: "star.svg", val: "5" },
                { icons: "location.svg", val: "5 км" },
                { icons: "like.svg", val: "5" }
            ]
        }

    },
}
</script>
<style>
.card {
    background: #FCFCFC;
    box-shadow: 0px 0px 8px rgba(138, 134, 134, 0.32);
    border-radius: 10px;
    /* grid-template-rows: 1fr 1fr; */
    flex-direction: row;
    width: 80%;
    justify-content: center;
    margin: 7% auto 0;
    display: flex;
}


#card-items {
    display: flex;
    flex-wrap: nowrap;
}

.content{
    display: flex;
    justify-content: end;
    width: 95%;
    gap: 2%;
    margin: 3% auto 4%;
}

#card-items {
    width: fit-content;
    margin-right: 7%;
}

.card>img {
    width: 30%;
    height: 30%;
    margin: 3% 2%;
}

.colmn {
    text-align: left;
    display: flex;
    flex-direction: column;
    width: 70%;
}

.words {
    display: flex;
    flex-direction: column;
}

#namesis {
    margin: 2% 0 1%;
    font-size: calc(1.6875vw + 8px);
  font-family: "PlayfairDisplayBold";
}

#info {
    font-size: calc(1.6875vw + 6px);
  font-family: "SourceSansProRegular";
}

#description {
    margin: 2.5% 0 1%;
    font-size: calc(1.6875vw + 8px);
  font-family: "SourceSansProRegular";
}
</style>