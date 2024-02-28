<template>
  <q-input
    outlined
    :value="props.value"
    @input="onChangeInput"
    no-error-icon
    dense
    clearable
    clear-icon="close"
    :style="props.style"
    :placeholder="props.placeholder"
    :type="props.type"
    :rows="props.rows"
  />
</template>

<script>
export default {
  name: 'FieldTextSearch',
};
</script>

<script setup>
import { ref } from 'vue';

const emit = defineEmits(['input', 'value']);
const inputText = ref();

const props = defineProps({
  value: { type: String, default: null },
  placeholder: { type: String, default: null },
  style: { type: String, default: 'width: 200px' },
  type: { type: String, default: 'text' },
  rows: { type: String, default: null },
});

function onChangeInput(val) {
  emit('input', val);
}

function validateText() {
  return inputText.value.validate();
}

defineExpose({
  validateText,
});
</script>
