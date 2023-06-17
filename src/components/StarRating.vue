<template>
    <div class="rating">
        <span v-for="(star, index) in stars" :key="index" class="star" :class="{ 'filled': index < currentRating }"
            @click="setRating(index + 1)">
            <img class="star-image" src="../assets/Card/star.svg" alt="star">
        </span>
    </div>
</template>

<script>
export default {
    data() {
        return {
            maxRating: 5,
            currentRating: 0,
            stars: Array(5).fill(null),
        };
    },
    methods: {
        setRating(rating) {
            this.currentRating = rating;
        },
    },
};
</script>

<style>
.rating {
    display: flex;
    justify-content: center;
}

.star {
    cursor: pointer;
    margin-right: 10%;
}

.star-image {
    width: 30px;
    height: 30px;
}

.filled .star-image {
    filter: invert(20%) sepia(100%) saturate(7500%) hue-rotate(190deg) brightness(95%) contrast(120%);
}
</style>