import Gallery from '../../components/Gallery'

const absLink = (relLink) => (relLink ? relLink.split('../../static')[1] : '')

export default ({ entry }) => {
  const rawData = entry.getIn(['data']).toJS()
  const data = { ...rawData }
  data.paintings = data.paintings.map((p) => ({
    ...p,
    img: { publicURL: absLink(p.img) },
  }))

  return Gallery({ data: { markdownRemark: { frontmatter: data } } })
}
