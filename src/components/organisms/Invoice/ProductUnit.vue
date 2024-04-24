<template>
  <div class="col row q-mt-md" :key="product.totalPrice">
    <div class="col column">
      <div class="text-column">Nama Barang</div>
      <!-- <FieldText placeholder="Ketikkan nama barang..." style="min-width: 200px" /> -->
      <q-select class="col" style="min-width: 150px"
        use-input outlined dense flat :placeholder="props.product?.name ? '' : 'Ketik nama barang...'" 
        v-model="props.product.name" :options="productList" @input-value="searchProduct" 
        @update:model-value="updateProduct" map-options="label" :emit-value="false" clearable
      >
    </q-select>
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
// import FieldText from 'src/components/fields/Text.vue';
import FieldTextNumber from 'src/components/fields/TextNumber.vue';
import FieldDropdown from 'components/fields/Dropdown.vue';
import { useProductStore } from 'src/stores/product';

export default {
  name: 'OrganismInvoiceProductUnit',
  components: { FieldTextNumber, FieldDropdown },
};
</script>

<script setup>
import { reactive } from 'vue';

const emit = defineEmits(['update-qty', 'update-price', 'update-unit']);
const productStore = useProductStore();

const productList = reactive([' ']);
function updateProduct(value) {
  props.product.name = value.label;
  // props.product.qty = value.data.productQty;
  // props.customer.address = value.data.customerIdentityAddress;
  // props.customer.deliveryContact = value.data.customerDeliveryContactPerson;
  // props.customer.deliveryNumber = value.data.customerDeliveryContactNumber;
  // props.customer.deliveryAddress = value.data.customerDeliveryAddress;
}
function searchProduct(value) {
  if (value.length === 0) {
    productList.splice(0, productList.length);
    return;
  }
  productStore.getSearchProductList({ name: value })
    .then(onSuccessSearchProduct)
    .catch((err) => console.error(err));
} 

function onSuccessSearchProduct(data) {
  const newOptions = data.map((item) => ({
    label: item.productName,
    value: item.id,
    data: item,
  }));
  productList.splice(0, productList.length, ...newOptions); 
}

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
