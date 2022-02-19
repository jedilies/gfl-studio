import {DocumentsIcon} from '@sanity/icons'

export default {
  name: 'company',
  title: 'Company',
  type: 'document',
  icon: DocumentsIcon,
  fields: [
    {
      name: 'title',
      title: 'Company Name',
      type: 'string'
    },
    {
      name: 'slug',
      title: 'URL Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      }
    },
    {
      name: 'body',
      title: 'Body',
      type: 'portableText'
    }
  ]
}