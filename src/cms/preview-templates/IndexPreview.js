import HomeIndex from '../../pages/index'

export default ({ entry }) => {
  const data = entry.getIn(['data']).toJS()

  return HomeIndex({
    data: {
      allMarkdownRemark: { edges: [{ node: { frontmatter: { ...data } } }] },
    },
  })
}
