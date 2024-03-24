<template>
  <div class="col row q-mt-md" :key="product.totalPrice">
    <div class="col column">
      <div class="text-column">Nama Barang</div>
      <FieldText placeholder="Ketikkan nama barang..." style="min-width: 200px" />
    </div>
    <div class="col-auto column q-ml-md">
      <div class="text-column">Qty</div>
      <div class="row">
        <FieldTextNumber :value="props.product?.qty" style="max-width: 100px" @update-value="updateQty" />
        <FieldDropdown 
          class="q-ml-xs" style="max-width: 80px" 
          :value="props.product?.unit" :options="options"
          @update-value="updateUnit"
        />
      </div>
    </div>
    <div class="col-2 column q-ml-md">
      <div class="text-column">Harga</div>
      <FieldTextNumber :value="props.product?.unitPrice" style="min-width: 200px" @update-value="updatePrice" />
    </div>
    <div class="col-3 column q-ml-md">
      <div class="text-column">Jumlah</div>
      <FieldTextNumber 
        :value="props.product.totalPrice" 
        :disable="true" filled style="min-width: 200px" 
      />
    </div>
  </div>
</template>

<script>
import FieldText from 'src/components/fields/Text.vue';
import FieldTextNumber from 'src/components/fields/TextNumber.vue';
import FieldDropdown from 'components/fields/Dropdown.vue';

export default {
  name: 'OrganismInvoiceProductUnit',
  components: { FieldText, FieldTextNumber, FieldDropdown },
};
</script>

<script setup>
import { reactive } from 'vue';

const emit = defineEmits(['update-qty', 'update-price', 'update-unit']);

const props = defineProps({
  product: { type: Object, default: null },
});

const options = reactive(['pcs', 'ls', 'set', 'unit', 'bh']);

function updateQty(value) {
  emit('update-qty', value);
}

function updatePrice(value) {
  emit('update-price', value);
}

function updateUnit(value) {
  emit('update-unit', value);
}

</script>

<style scoped>
.text-column {
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 11px;
  line-height: 14px;
  letter-spacing: 0.005em;
  color: #2b2626;
}
</style>
