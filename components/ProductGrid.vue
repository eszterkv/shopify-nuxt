<template>
  <div>
  </div>
</template>

<script>
import Vue from 'vue'
import getAllProducts from '../gql/get-all-products.gql'

export default Vue.extend({
  data() {
    return {
      products: [],
    }
  },
  async fetch() {
    try {
      const products = await this.$apollo.query({
        query: getAllProducts,
      })
      console.log(products)
    } catch (error) {
      console.log(error)
    }
  },
})
</script>
