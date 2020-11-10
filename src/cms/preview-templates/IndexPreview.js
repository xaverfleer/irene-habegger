import HomeIndex from '../../pages/index'

const absLink = (relLink) => (relLink ? relLink.split('../../static')[1] : '')

export default ({ entry }) => {
  const data = entry.getIn(['data']).toJS()
  data.bgImage = {
    childImageSharp: { fluid: { src: absLink(data.bgImage) } },
  }
  data.meImage = {
    childImageSharp: {
      fixed: { src: absLink(data.meImage), width: 200, height: 200 },
    },
  }

  data.works = data.works.map((w) => ({
    ...w,
    fluidLarge: {
      childImageSharp: { fluid: { aspectRatio: 1.33, src: absLink(w.img) } },
    },
    fluidThumb: {
      childImageSharp: { fluid: { aspectRatio: 1.33, src: absLink(w.img) } },
    },
  }))

  return HomeIndex({
    data: {
      allMarkdownRemark: { nodes: [{ frontmatter: { ...data } }] },
    },
  })
}
