<template>
  <q-card class="card-container">
    <q-card-section>
      <div class="row">

        <!-- DESCRIPTION -->
        <div class="col column">
          <div class="col row q-mt-md">
            <div class="col column">
              <div class="text-column">Nama Barang</div>
              <FieldText placeholder="Ketikkan nama barang..." style="min-width: 200px" />
            </div>
            <div class="col-auto column q-ml-md">
              <div class="text-column">Qty</div>
              <div class="row">
                <FieldText type="number" style="max-width: 100px" />
                <FieldDropdown class="q-ml-xs" style="max-width: 80px" :value="form.unit" :options="options" />
              </div>
            </div>
            <div class="col-2 column q-ml-md">
              <div class="text-column">Harga</div>
              <FieldText type="number" style="min-width: 200px" />
            </div>
            <div class="col-3 column q-ml-md">
              <div class="text-column">Jumlah</div>
              <FieldText type="number" :disable="true" filled style="min-width: 200px" />
            </div>
          </div>
  
          <div class="col row q-mt-md">
            <div class="col column">
              <div class="text-column">Nama Barang</div>
              <FieldText placeholder="Ketikkan nama barang..." style="min-width: 200px" />
            </div>
            <div class="col-auto column q-ml-md">
              <div class="text-column">Qty</div>
              <div class="row">
                <FieldText type="number" style="max-width: 100px" />
                <FieldDropdown class="q-ml-xs" style="max-width: 80px" :value="form.unit" :options="options" />
              </div>
            </div>
            <div class="col-2 column q-ml-md">
              <div class="text-column">Harga</div>
              <FieldText type="number" style="min-width: 200px" />
            </div>
            <div class="col-3 column q-ml-md">
              <div class="text-column">Jumlah</div>
              <FieldText type="number" :disable="true" filled style="min-width: 200px" />
            </div>
          </div>
        </div>
      </div>
      
      <!-- TOTAL -->
      <div class="column">
        <div class="col row justify-end q-mt-md">
          <div class="col-3 column">
            <div class="text-column">Subtotal</div>
            <FieldText type="number" :disable="true" filled style="min-width: 200px" />
          </div>
        </div>
        
        <div class="col row justify-end q-mt-md">
          <div class="col-3 column">
            <div class="text-column">include PPn 11%</div>
            <FieldText type="number" :disable="true" filled style="min-width: 200px" />
          </div>
        </div>
        
        <div class="col row justify-end q-mt-md">
          <div class="col-3 column">
            <div class="text-column">Discount</div>
            <FieldText type="number" style="min-width: 200px" />
          </div>
        </div>
        
        <div class="col row justify-end q-mt-md">
          <div class="col-3 column">
            <div class="text-column">Total</div>
            <FieldText type="number" :disable="true" filled style="min-width: 200px" />
          </div>
        </div>
        
        <div class="col row justify-end q-mt-md">
          <div class="col-3 column">
            <div class="text-column">Down Payment</div>
            <FieldText type="number" style="min-width: 200px" />
          </div>
        </div>
        
        <div class="col row justify-end q-mt-md">
          <div class="col-3 column">
            <div class="text-column">Sisa Tagihan</div>
            <FieldText type="number" :disable="true" filled style="min-width: 200px" />
          </div>
        </div>
        
        <div class="col row justify-end q-mt-md">
          <div class="col-3 column">
            <q-btn label="Submit" no-caps color="blue" unelevated />
          </div>
        </div>
      </div>
        
    </q-card-section>
  </q-card>
</template>
<script>
import { defineComponent, reactive } from 'vue';
import FieldText from 'src/components/fields/Text.vue';
import FieldDropdown from 'components/fields/Dropdown.vue';

export default defineComponent({
  name: 'TemplateInvoiceFormBody',
  components: { FieldText, FieldDropdown },
  setup() {
    const options = reactive(['pcs', 'ls', 'set', 'unit']);

    const form = reactive({
      startDate: null,
      endDate: null,
      invoiceNumber: null,
      customer: null,
      unit: 'pcs',
    });

    return {
      form,
      options,
    };
  },
});
</script>
<style scoped>
.card-container {
  box-shadow: 1px 2px 10px 0px rgba(0, 0, 0, 0.12);
}
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
