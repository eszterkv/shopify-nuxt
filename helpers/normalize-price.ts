type MoneyV2 = {
  amount: string
  currencyCode: string
}

// TODO get types from Shopify
interface Product {
  priceRange: {
    minVariantPrice: MoneyV2
    maxVariantPrice: MoneyV2
  }
  [key: string]: any
}

export default function normalizePrice(product: Product) {
  try {
    const { minVariantPrice, maxVariantPrice } = product.priceRange
    const { currencyCode } = minVariantPrice

    if (minVariantPrice.amount === maxVariantPrice.amount) {
      return {
        ...product,
        price: `${currencyCode} ${minVariantPrice.amount}`,
      }
    } else {
      return {
        ...product,
        price: `${currencyCode} ${minVariantPrice.amount}—${maxVariantPrice.amount}` }
    }
  } catch (error) {
    console.error(error)
    return product
  }
}

