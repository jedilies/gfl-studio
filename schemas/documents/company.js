import React from 'react'
import Icon from '../../components/emojiIcon'

export default {
  name: 'company',
  title: 'Company',
  type: 'document',
  icon: () => <Icon emoji="🎭" />,
  preview: {
    select: {
      title: 'title',
      media: 'image'
    },
    prepare({title, media}) {
      return {
        title: title,
        media: media || <Icon emoji="🎭" />
      }
    }
  },
  // groups: [
  //   {name:'details', title: 'Details', default: true },
  //   {name:'contact', title: 'Contact Info' },
  //   {name:'media', title: 'Media' },
  // ],
  fields: [
    {
      name: 'title',
      title: 'Company Name',
      type: 'string',
      // group: 'details',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'Page URL (site.com/{slug})',
      options: {
        source: 'title',
        maxLength: 96
      }
    },
    {
      name: 'imageAlt',
      type: 'string',
      // group: 'media',
      title: 'Image Alt Text',
      description: 'Optional Custom Promo "imageAlt"'
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image',
      // group: 'media',
      description: 'Company Promo Image',
      // TODO: add image ref to  description
      options: {
        hotspot: true
      }
    },
    {name: 'url', title: '🌐 URL', type: 'string', },
    {name: 'email', title: '＠ Email', type: 'string', },
    {name: 'phone', title: '📞 Phone', type: 'string', },
    {name: 'twitter', title: '🐦 Twitter', type: 'string', },
    {name: 'instagram', title: '🤳 Instagram', type: 'string', },
    {name: 'facebook', title: '👍 Facebook', type: 'string', },
    {name: 'other', title: '👤 Other', type: 'string', },
    {
      name: 'summary',
      title: 'Summary',
      type: 'text',
      // group: 'details',
      description: 'Company Summary (SEO)',
    },
    {
      name: 'body',
      title: 'Body',
      // group: 'details',
      type: 'pText'
    }
  ]
}
