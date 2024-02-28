<template>
  <q-card class="card-container">
    <q-card-section>
      <!-- FILTER -->
      <div class="row">
        <div class="col-auto column">
          <div class="text-column">Start date</div>
          <FieldTextDateStart />
        </div>
        <div class="col-auto column q-ml-md">
          <div class="text-column">End date</div>
          <FieldTextDateStart />
        </div>
        <div class="col-auto column q-ml-md">
          <div class="text-column">No. Invoice</div>
          <FieldText placeholder="Ketikkan invoice..." />
        </div>
        <div class="col-auto column q-ml-md">
          <div class="text-column">Customer</div>
          <FieldText placeholder="Ketikkan nama..." />
        </div>
        <div class="col-auto column q-ml-md">
          <div class="text-column">Status Pembayaran</div>
          <FieldDropdown :value="filterData.status" :options="options" />
        </div>
      </div>

      <!-- TABLE -->
      <div class="q-pa-md">
        <q-table
          :rows="rows"
          :columns="columns"
          row-key="number"
          flat bordered
          table-header-class="bg-blue-2"
          no-data-label="Sorry, I didn't find anything for you"
          rows-per-page-label="Menampilkan:"
          :pagination="pagination"
        />
      </div>
    </q-card-section>
  </q-card>
</template>
<script>
import { defineComponent, reactive } from 'vue';
import FieldTextDateStart from 'src/components/fields/TextDate.vue';
import FieldText from 'components/fields/Text.vue';
import FieldDropdown from 'components/fields/Dropdown.vue';

export default defineComponent({
  name: 'TemplateInvoiceListContainer',
  components: { FieldTextDateStart, FieldText, FieldDropdown },
  setup() {
    const options = reactive(['Semua', 'Lunas', 'Sebagian', 'Belum Bayar']);
    const filterData = reactive({
      startDate: null,
      endDate: null,
      invoiceNumber: null,
      customer: null,
      status: 'Semua',
    });
    const pagination = reactive({
      rowsPerPage: 25,
    });
    const columns = [
      {
        name: 'number',
        required: true,
        label: 'No. Invoice',
        align: 'left',
        field: (row) => row.invoiceNumber,
        format: (val) => `${val}`,
        sortable: true,
      },
      {
        name: 'date', align: 'left', label: 'Tanggal Invoice', field: 'date', sortable: true, 
      },
      {
        name: 'customer', align: 'left', label: 'Customer', field: 'customer', sortable: true, 
      },
      {
        name: 'created', label: 'Dibuat Oleh', align: 'left', field: 'createdBy', sortable: true,
      },
      {
        name: 'value', label: 'Nilai', align: 'right', field: 'value',
      },
      {
        name: 'status', label: 'Status Pembayaran', field: 'status', align: 'left', sortable: true,
      },
    ];
    const rows = [
      {
        invoiceNumber: 'RT/24/01/25/010',
        date: '25 Jan 2024',
        customer: 'Cash',
        createdBy: 'Josh doe',
        value: parseFloat(400000000).toLocaleString(),
        status: 'Paid',
      },
      {
        invoiceNumber: 'RT/24/01/25/010',
        date: '25 Jan 2024',
        customer: 'Cash',
        createdBy: 'Josh doe',
        value: parseFloat(400000000).toLocaleString(),
        status: 'Paid',
      },
      {
        invoiceNumber: 'RT/24/01/25/010',
        date: '25 Jan 2024',
        customer: 'Cash',
        createdBy: 'Josh doe',
        value: parseFloat(400000000).toLocaleString(),
        status: 'Paid',
      },
      {
        invoiceNumber: 'RT/24/01/25/010',
        date: '25 Jan 2024',
        customer: 'Cash',
        createdBy: 'Josh doe',
        value: parseFloat(400000000).toLocaleString(),
        status: 'Paid',
      },
      {
        invoiceNumber: 'RT/24/01/25/010',
        date: '25 Jan 2024',
        customer: 'Cash',
        createdBy: 'Josh doe',
        value: parseFloat(400000000).toLocaleString(),
        status: 'Paid',
      },
      {
        invoiceNumber: 'RT/24/01/25/010',
        date: '25 Jan 2024',
        customer: 'Cash',
        createdBy: 'Josh doe',
        value: parseFloat(400000000).toLocaleString(),
        status: 'Paid',
      },
      {
        invoiceNumber: 'RT/24/01/25/010',
        date: '25 Jan 2024',
        customer: 'Cash',
        createdBy: 'Josh doe',
        value: parseFloat(400000000).toLocaleString(),
        status: 'Paid',
      },
      {
        invoiceNumber: 'RT/24/01/25/010',
        date: '25 Jan 2024',
        customer: 'Cash',
        createdBy: 'Josh doe',
        value: parseFloat(400000000).toLocaleString(),
        status: 'Paid',
      },
    ];

    return {
      options,
      filterData,
      rows,
      columns,
      pagination,
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
