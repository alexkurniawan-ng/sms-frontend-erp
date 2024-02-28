export default {
  path: '/invoice',
  component: () => import('layouts/MainLayout.vue'),
  children: [
    {
      path: '',
      name: 'PageMainInvoice',
      component: () => import('pages/Invoice/InvoiceList.vue'),
    },
    {
      path: 'create',
      name: 'PageInvoiceCreate',
      component: () => import('pages/Invoice/Form.vue'),
    },
  ],
};
