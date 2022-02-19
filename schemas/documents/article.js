import {DocumentsIcon} from '@sanity/icons'

export default {
  name: 'article',
  title: 'Articles',
  type: 'document',
  icon: DocumentsIcon,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      }
    },
    {
      name: 'articleCategory',
      title: 'Category',
      type: 'reference',
      to: {type: 'category'}
    },
    {
      name: 'body',
      title: 'Body',
      type: 'portableText'
    }
  ]
}