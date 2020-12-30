import page from '../../pages/index'

const absLink = (relLink) => (relLink ? relLink.split('../../static')[1] : '')

export default ({ entry }) => {
  const rawData = entry.getIn(['data']).toJS()
  const data = { ...rawData }
  data.painting01.img = { publicURL: absLink(data.painting01.img) }
  data.painting02.img = { publicURL: absLink(data.painting02.img) }

  return page({ data: { markdownRemark: { frontmatter: rawData } } })
}
