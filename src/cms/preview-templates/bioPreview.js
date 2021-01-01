import page from '../../pages/bio'

const absLink = (relLink) => (relLink ? relLink.split('../../static')[1] : '')

export default ({ entry }) => {
  const rawData = entry.getIn(['data']).toJS()
  const hint =
    '<p style="font-size: small">(Hint: Formatting will be better, when site is live)</p>'
  const data = {
    markdownRemark: {
      html: hint + rawData.body,
      frontmatter: { ...rawData },
    },
  }
  data.markdownRemark.frontmatter.img = {
    publicURL: absLink(data.markdownRemark.frontmatter.img),
  }

  return page({ data })
}
