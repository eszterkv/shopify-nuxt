<template>
  <ul class="grid grid-cols-2 gap-8 md:grid-cols-3 md:gap-16">
    <li v-for="product in products">
      <div class="aspect-w-3 aspect-h-4">
        <img
          :src="product.images.edges[0].node.transformedSrc"
          class="object-contain"
        />
      </div>
      <p class="text-sm text-center pt-2">
        {{ product.title }}<br />
        {{ product.price }}<br />
      </p>
    </li>
  </ul>
</template>

<script>
import Vue from 'vue'
import extractNodes from '~/helpers/extract-nodes'
import getAllProducts from '~/gql/get-all-products.gql'
import normalizePrice from '~/helpers/normalize-price'

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

      this.products = extractNodes(response, 'products').map(normalizePrice)
    } catch (error) {
      console.log(error)
    }
  },
})
</script>
