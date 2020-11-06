import HomeIndex from '../../pages/index'

export default ({ entry }) => {
  const data = entry.getIn(['data']).toJS()

  return HomeIndex({
    data: {
      allMarkdownRemark: { nodes: [{ frontmatter: { ...data } }] },
    },
  })
}
