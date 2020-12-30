import page from '../../pages/gallery'

const absLink = (relLink) => (relLink ? relLink.split('../../static')[1] : '')

export default ({ entry }) => {
  const rawData = entry.getIn(['data']).toJS()
  const data = { ...rawData }
  data.paintings = data.paintings.map((p) => ({
    ...p,
    img: { publicURL: absLink(p.img) },
  }))

  return page({ data: { markdownRemark: { frontmatter: data } } })
}
