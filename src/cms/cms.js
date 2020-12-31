import CMS from 'netlify-cms-app'
import IndexPreview from './preview-templates/IndexPreview'
import galleryPreview from './preview-templates/galleryPreview'

CMS.registerPreviewTemplate('index', IndexPreview)
CMS.registerPreviewTemplate('wall', galleryPreview)
CMS.registerPreviewTemplate('portraits', galleryPreview)
