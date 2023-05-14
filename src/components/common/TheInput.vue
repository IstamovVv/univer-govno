<template>
  <div>
    <label>{{ label }}</label>
    <input
        v-bind:value="value"
        v-bind="$attrs"
        @change="$emit('update:value', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  name: "TheInput",
  props: ['label', 'value']
}
</script>

<style scoped>

</style>