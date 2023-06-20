<template>
  <div class="map-container">
    <yandex-map :coords="coords" :zoom="zoom" @click="onClick">
      <ymap-marker v-for="(marker, index) in markers" :key="index" :coords="marker.coords">
        <Markers slot="balloon" :title="marker.name" />
      </ymap-marker>
    </yandex-map>
    <div v-if="showPopup" class="popup">
      <div class="Owntitle">Новый отзыв</div>
      <form @submit.prevent="addMarker">
        <label for="name" class="title-labl">Название ресторана:</label>
        <input class="restoran" type="text" id="namess" v-model="name" placeholder="Введите название ресторана">
        <label for="description" class="title-labl">Отзыв:</label>
        <StarRating />
        <textarea id="description" v-model="description" placeholder="Напишите ваш отзыв"></textarea>
        <div class="buttons-container">
          <CustomButton class="cancel-button" type="button" @click="cancelAdd" BGcolor="#E5EBEC" color="#373333" sizeW="45%">Отмена
          </CustomButton>
          <CustomButton class="create-button" type="submit" BGcolor="#0D7DCF" color="#FCFCFC" sizeW="45%">Создать</CustomButton>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Markers from '../Map/Markers.vue'
import StarRating from '../Rating/StarRating.vue';
import CustomButton from '../Joint/CustomButton.vue';
export default {
  name: "OwnMap",
  components: {
    StarRating,
    Markers,
    CustomButton
  },
  data: () => ({
    coords: [59.9386, 30.3141],
    zoom: 10,
    markers: [],
    showPopup: false,
    name: "",
    description: "",
  }),
  methods: {
    onClick(e) {
      this.showPopup = true;
      this.coords = e.get("coords");
    },
    addMarker() {
      if (this.name && this.description) {
        const newMarker = {
          coords: this.coords,
          name: this.name
        };
        this.markers.push(newMarker);
        this.showPopup = false;
        this.name = "";
        this.description = "";
      }
    },
    cancelAdd() {
      this.showPopup = false;
      this.name = "";
      this.description = "";
    },
  },
};
</script>

<style scoped>
.map-container {
  height: 100vh;
  padding-top: 40px;
  display: flex;
  justify-content: center;
  align-items: start;
}

.ymap-container {
  height: 100%;
  width: 100vw;
}

.popup {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  box-shadow: 0px 0px 8px rgba(138, 134, 134, 0.32);
  border-radius: 10px;
  width: 70%;
}

.title-labl {
  display: flex;
  align-items: start;
  width: 90%;
  font-size: calc(1.6875vw + 10px);
  font-family: "SourceSansProRegular";
}

.restoran {
  border: 1px solid rgba(55, 51, 51, 0.4);
  border-radius: 10px;
  width: 90%;
  height: 30px;
  padding-left: 14px;
  margin-bottom: 10px;
  font-size: calc(1.6875vw + 8px);
  font-family: "SourceSansProRegular";
}

textarea {
  border: 1px solid rgba(55, 51, 51, 0.4);
  border-radius: 15px;
  font-size: calc(1.6875vw + 8px);
  width: 90%;
  height: 60px;
  padding-left: 20px;
  font-family: "SourceSansProRegular";
}

.Owntitle {
  font-size: calc(1.6875vw + 12px);
  font-family: "PlayfairDisplayBold";
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 20px;
}

.buttons-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 90%;
}
</style>