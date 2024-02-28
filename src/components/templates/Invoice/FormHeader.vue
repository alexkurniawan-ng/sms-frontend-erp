<template>
  <q-card class="card-container">
    <q-card-section>
      <!-- INV DATE -->
      <div class="row">
        <div class="col-auto column">
          <div class="text-column">Tanggal Invoice</div>
          <FieldTextDate />
        </div>
      </div>

      <!-- CUSTOMER -->
      <div class="row q-mt-md">
        <div class="col column">
          <div class="text-column">Nama Customer</div>
          <div class="row">
            <FieldText class="col" placeholder="Ketik nama customer..." style="min-width: 150px" />
            <q-btn unelevated dense icon="add" color="blue" class="col-auto q-ml-sm" style="width: 40px" />
          </div>
          <div class="text-column" style="margin-top: 14px">No. Telp Penagihan</div>
          <FieldText placeholder="Ketikkan nomor telepon..." style="min-width: 200px" />
        </div>
        <div class="col column q-ml-md">
          <div class="text-column">Alamat Penagihan</div>
          <FieldText class="col" style="min-width: 200px" type="textarea" rows="5" />
        </div>
        <div class="col column q-ml-md">
          <div class="text-column">No. Referensi / PO</div>
          <FieldText class="col" placeholder="Ketik no referensi..." style="min-width: 200px" />
          <q-checkbox 
            class="col text-column" 
            style="margin-left: -5px; margin-top: -100px" 
            v-model="addDetail" label="Detail Pengiriman" size="xs" 
          />
        </div>
      </div>

      <!-- DELIVERY DETAIL -->
      <div class="row q-mt-lg" v-if="addDetail">
        <div class="col column">
          <div class="text-column">Nama Kontak Pengiriman</div>
          <FieldText class="col" placeholder="Ketik nama kontak..." style="min-width: 200px" />
          <div class="text-column" style="margin-top: 14px">No. Telp Pengiriman</div>
          <FieldText placeholder="Ketikkan nomor telepon..." style="min-width: 200px" />
        </div>
        <div class="col column q-ml-md">
          <div class="text-column">Alamat Pengiriman</div>
          <FieldText class="col" style="min-width: 200px" type="textarea" rows="5" />
        </div>
        <div class="col column q-ml-md">
          <div class="text-column">Tanggal Kirim</div>
          <FieldTextDate style="max-width: 200px" />
        </div>
      </div>

    </q-card-section>
  </q-card>
</template>
<script>
import { defineComponent, reactive, ref } from 'vue';
import FieldTextDate from 'src/components/fields/TextDate.vue';
import FieldText from 'src/components/fields/Text.vue';

export default defineComponent({
  name: 'TemplateInvoiceFormHeader',
  components: { FieldTextDate, FieldText },
  setup() {
    const form = reactive({
      startDate: null,
      endDate: null,
      invoiceNumber: null,
      customer: null,
      status: 'Semua',
    });
    const addDetail = ref(false);

    return {
      form,
      addDetail,
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
