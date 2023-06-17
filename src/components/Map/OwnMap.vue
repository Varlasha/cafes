<template>
    <div id="map">
        <yandex-map :coords="coords" :zoom="zoom" @click="onClick">
            <ymap-marker v-for="(marker, index) in markers" :key="index" :coords="marker.coords"
                :balloon-template="marker.balloonTemplate"></ymap-marker>
        </yandex-map>
        <div v-if="showPopup" class="popup">
            <div class="Owntitle">Новый отзыв</div>
           <form @submit.prevent="addMarker">
          <label for="name" class="title-labl" style="margin-top: 5%;">Название ресторана:</label>
          <input class="smth" type="text" id="namess" v-model="name" placeholder="Введите название ресторана">
          <label for="description" class="title-labl">Отзыв:</label>
          <StarRating/>
          <textarea id="description" v-model="description" placeholder="Напишите ваш отзыв"></textarea>
          <div style="display: flex; flex-direction: row; justify-content: space-between; width: 90%;">
            <button style="width: 45%;" type="button" @click="cancelAdd">Отмена</button>
          <button style="width: 45%; color: #FCFCFC; background-color:  #0D7DCF ;" type="submit">Создать</button>
          </div>
        </form>
      </div>
    </div>
</template>

<script>
import StarRating from '../StarRating.vue';
export default {
  name: "OwnMap",
  components: {
    StarRating
  },
  data: () => ({
    coords: [59.9386, 30.3141], // координаты Санкт-Петербурга
    zoom: 10, // начальный зум
    markers: [],
    showPopup: false,
    name: "",
    description: "",
  }),
  computed: {
    balloonTemplate() {
      return` 
        <h1 class="notred">${this.name}</h1>
        <p>${this.description}</p>
        <p>I am here: ${this.coords}</p>
        <img src="http://via.placeholder.com/350x150">`
      ;
    },
  },
  methods: {
    onClick(e) {
      this.showPopup = true;
      this.coords = e.get("coords");
    },
    addMarker() {
      if (this.name && this.description) {
        const newMarker = {
          coords: this.coords,
          balloonTemplate: this.balloonTemplate,
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

<style>
.ymap-container {
    height: 83vh;
    width: 100vw;
    margin: 0 auto;
}

.notred {
    color: #373333;;
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
}

.title-labl{
  text-align: left;
font-size: calc(1.6875vw + 12px);
  font-family: "SourceSansProRegular";
  width: 90%;
}

.smth {
  border: 1px solid rgba(55, 51, 51, 0.4);
  border-radius: 15px;
  min-width: 80vw;
  min-height: 6vh;
  font-size: calc(1.6875vw + 10px);
  font-family: "SourceSansProRegular";
  padding-left: 4.5%;
}

textarea{
    border: 1px solid rgba(55, 51, 51, 0.4);
  border-radius: 15px;
  min-width: 80vw;
  min-height: 12vh;
  font-size: calc(1.6875vw + 15px);
  font-family: "SourceSansProRegular";
  padding: 4%;
}

.Owntitle{
  font-size: calc(1.6875vw + 20px);
  font-family: "PlayfairDisplayBold";
}

#map {
  margin: 0 auto;
}
</style>