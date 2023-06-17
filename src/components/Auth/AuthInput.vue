<template>
  <input :value="value" @change="$emit('update:value', $event.target.value)" :id="id" :placeholder="placeholder"
    :type="type" class="input-item" />
</template>

<script>
export default {
  name: 'AuthInput',
  props: {
    id: String,
    value: String,
    placeholder: String,
    type: String
  }
};
</script>

<style>
.input-item {
  border: 1px solid rgba(55, 51, 51, 0.4);
  border-radius: 15px;
  min-width: 80vw;
  min-height: 6vh;
  font-size: calc(1.6875vw + 10px);
  font-family: "SourceSansProRegular";
  padding-left: 4.5%;
}
</style>
