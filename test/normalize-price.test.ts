import normalizePrice from '~/helpers/normalize-price'

describe('normalizePrice', () => {
  it('returns minVariantPrice if min and max are equal', () => {
    const product = {
      priceRange: {
        minVariantPrice: {
          amount: '100.00',
          currencyCode: 'GBP',
        },
        maxVariantPrice: {
          amount: '100.00',
          currencyCode: 'GBP',
        },
      },
    }

    expect(normalizePrice(product)).toBe('GBP 100')
  })
})
