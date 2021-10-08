import extractNodes from '~/helpers/extract-nodes'

describe('extractNodes', () => {
  const response = {
    data: {
      things: {
        edges: [
          { node: { id: '1', name: 'first' } },
          { node: { id: '2', name: 'second' } },
        ],
      },
    }
  }

  it('unwraps nodes from data.thing.edges.node', () => {
    const expected = [
      { id: '1', name: 'first' },
      { id: '2', name: 'second' },
    ]

    expect(extractNodes(response, 'things')).toEqual(expected)
  })

  it('returns empty array if property doesn’t exist', () => {
    expect(extractNodes(response, 'foo')).toEqual([])
  })
})
