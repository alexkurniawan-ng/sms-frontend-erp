<template>
  <q-page>
    <div class="q-mx-lg">
      <div class="row q-my-lg">
        <div class="col text-title">Buat Invoice</div>
      </div>
      <TemplateInvoiceFormHeader />
      <TemplateInvoiceFormBody />
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';
import TemplateInvoiceFormHeader from 'src/components/templates/Invoice/FormHeader.vue';
import TemplateInvoiceFormBody from 'src/components/templates/Invoice/FormBody.vue';

export default defineComponent({
  name: 'PageInvoiceCreate',
  components: { TemplateInvoiceFormHeader, TemplateInvoiceFormBody },
  setup() {
    
  },
});
</script>
<style scoped>
.text-title {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  color: rgba(0, 0, 0, 0.9);
}
</style>
