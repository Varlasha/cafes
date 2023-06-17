<template>
    <button :type="type" :style="{ backgroundColor: BGcolor, color: color, width: sizeW }">
        <slot />
    </button>
</template>

<script>
export default {
    name: 'CustomButton',
    props: {
        type:String,
        btnName: String,
        BGcolor: {
            BGcolor: String,
            default: "#0D7DCF"
        },
        color: {
            color: String,
            default: "#FCFCFC"
        },
         sizeW: {
            color: String,
            default: "85vw"
        }
    },
};
</script>

<style>
button {
    border: none;
    border-radius: calc(1.6875vw + 15px);
    /* min-width: 85vw; */
    min-height: 6.5vh;
    font-size: calc(1.9875vw + 13px);
    font-family: "SourceSansProBold";
    margin-top: 3%;
}
</style>