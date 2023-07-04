import CMS from 'netlify-cms-app'
import IndexPreview from './preview-templates/IndexPreview'
import galleryPreview from './preview-templates/galleryPreview'
import bioPreview from './preview-templates/bioPreview'

CMS.registerPreviewTemplate('index', IndexPreview)
CMS.registerPreviewTemplate('drawings', galleryPreview)
CMS.registerPreviewTemplate('in between', galleryPreview)
CMS.registerPreviewTemplate('little windows', galleryPreview)
CMS.registerPreviewTemplate('wall', galleryPreview)
CMS.registerPreviewTemplate('portraits', galleryPreview)
CMS.registerPreviewTemplate('hedge', galleryPreview)
CMS.registerPreviewTemplate('skinAndStone', galleryPreview)
CMS.registerPreviewTemplate('inTheMorningLight', galleryPreview)
CMS.registerPreviewTemplate('bio', bioPreview)
