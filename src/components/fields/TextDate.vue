<template>
    <q-input 
      outlined
      :label="label"
      v-model="startDate"
      mask="date"
      no-error-icon
      dense
      readonly
    >
    <template v-slot:append>
      <q-icon name="event" class="cursor-pointer">
        <q-popup-proxy cover transition-show="scale" transition-hide="scale">
          <q-date v-model="startDate" minimal>
            <div class="row items-center justify-end">
              <q-btn v-close-popup label="OK" color="primary" flat />
            </div>
          </q-date>
        </q-popup-proxy>
      </q-icon>
    </template>
  </q-input>
</template>

<script>
export default {
  name: 'FieldTextDate',
};
</script>

<script setup>
import { ref, watch } from 'vue';
import moment from 'moment';

const emit = defineEmits(['form']);
const date = ref(new Date());
const startDate = ref(moment(new Date(date.value.setMonth(0))).format('YYYY/MM/D'));

// const props = defineProps({
//   form: { type: Object, default: null },
//   value: { type: String, default: null },
//   label: { type: String, default: null },
//   required: { type: Boolean, default: false },
// });

watch(startDate, (newValue) => {
  emit('update-start-date', newValue);
});
</script>
