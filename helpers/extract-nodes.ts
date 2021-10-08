type ResponseObject = {
  data: {
    [key: string]: {
      edges: {
        node: Record<string, any>
      }[]
    }
  }
}

export default function extractNodes(res: ResponseObject, nodeName: string) {
  try {
    return res.data[nodeName].edges.map(({ node }) => node)
  } catch (error) {
    console.error(`Error unwrapping "${nodeName}" nodes: ${error}`)

    return []
  }
}
