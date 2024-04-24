import { defineStore } from 'pinia';
import { callAPIWithAuth } from 'src/boot/axios';

export const useProductStore = defineStore('product', {
  state: () => ({
    loading: false,
    list: [],
    detail: null,
  }),

  actions: {
    // getProductList() {
    //   const endpoint = '/products';
    //   return new Promise((resolve, reject) => {
    //     this.loading = true;
    //     callAPIWithAuth()
    //       .get(endpoint)
    //       .then((response) => {
    //         this.list = response.data.data;
    //         this.loading = false;
    //         resolve(response.data.data);
    //       })
    //       .catch((err) => {
    //         this.loading = false;
    //         reject(err);
    //       });
    //   });
    // },

    getSearchProductList({ name }) {
      const endpoint = '/products/search';
      return new Promise((resolve, reject) => {
        this.loading = true;
        callAPIWithAuth()
          .get(`${endpoint}?name=${name}`)
          .then((response) => {
            this.list = response.data.data;
            this.loading = false;
            resolve(response.data.data);
          })
          .catch((err) => {
            this.loading = false;
            reject(err);
          });
      });
    },

  },
});
