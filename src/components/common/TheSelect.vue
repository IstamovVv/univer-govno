<template>
  <div>
    <label>{{ label }}</label>
    <select @change="onChange">
      <option
          v-for="option in options" :key="option.value"
          :value="option.value"
      >
        {{ option.text }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: "TheSelect",
  props: ['label', 'options', 'value']
}
</script>

<script setup>
import { ref, watch } from "vue";

const emit = defineEmits(['update:value']);

const props = defineProps({
  label: {
    type: String,
    required: false,
    default: ''
  },
  options: {
    type: Array,
    required: true
  },
  value: {
    type: null,
    required: false,
    default: ''
  }
})

const proxyValue = ref(props.value);

watch(() => props.value, newValue => {
  proxyValue.value = newValue
})

const onChange = (event) => {
  emit('update:value', event.target.value)
}
</script>

<style scoped>

</style>