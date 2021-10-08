<template>
  <ul className="grid grid-cols-2 md:grid-cols-3">
    <li v-for="product in products">
      {{ product.title }}
    </li>
  </ul>
</template>

<script>
import Vue from 'vue'
import extractNodes from '~/helpers/extract-nodes'
import getAllProducts from '~/gql/get-all-products.gql'

export default Vue.extend({
  data() {
    return {
      products: [],
    }
  },
  async fetch() {
    try {
      const response = await this.$apollo.query({
        query: getAllProducts,
      })

      this.products = extractNodes(response, 'products')
    } catch (error) {
      console.log(error)
    }
  },
})
</script>
