<template>
  <div class="cards-profl">
      <div id="namesis">{{ name }}</div>
      <div id="description">{{ description }}</div>
    </div>
</template>
<script>
  export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: "CardProfil",
    props: {
      name: {
        name: String,
        default: "Название ресторана",
      },
      description: {
        description: String,
        default:
          "Вкусно от слова бесконечно! Ресторан в прекрасном месте с потрясающими видами.",
      },
    },
  };
</script>
<style>
  .cards-profl {
    background: #baced2;
    box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    flex-direction: column;
    width: 30vw;
    justify-content: space-evenly;
    margin: 7% auto 0;
    display: flex;
  }

  #namesis {
    margin: 2% 0 1%;
    font-size: calc(1.6875vw + 7px);
    font-family: "PlayfairDisplayBold";
  }

  #description {
    text-align: start;
    margin: 2.5% 15% 2%;
    font-size: calc(1.6875vw + 6px);
    font-family: "SourceSansProRegular";
  }
</style>
