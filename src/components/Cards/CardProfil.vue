<template>
  <div class="card-profil">
    <div class="card-body">
      <div class="card-title">{{ title }}</div>
      <div class="card-text">{{ description }}</div>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'CardProfil',
  props: {
    title: {
      type: String,
      default: "Название ресторана"
    },
    description: {
      type: String,
      default: "Вкусно от слова бесконечно! Ресторан в прекрасном месте с потрясающими видами."
    }
  }
}
</script>

<style scoped>
.card-profil {
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-right: 20px;
    background: #BACED2;
    box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    width: 150px;
    height: 185px;
    flex: 1;
}


.card-body {
  padding: 5px 20px;
}

.card-title {
   font-size: calc(1.6875vw + 8px);
  font-family: "PlayfairDisplayBold";
  margin-bottom: 10px;
}

.card-text {
  font-size: calc(1.6875vw + 8px);
  font-family: "SourceSansProRegular";
}
</style>