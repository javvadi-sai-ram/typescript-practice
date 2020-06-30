import React from 'react'
import { PostObject } from '../stores/types'
import { withTranslation, WithTranslation } from 'react-i18next'

interface PostTypescriptprops {
  data: PostObject
}

interface PostTypescriptprops extends WithTranslation {}

class Posts extends React.Component<PostTypescriptprops> {
  render() {
    const { data, t } = this.props

    return (
      <div style={{ boxShadow: '1px 1px 0px 0px' }}>
        <div>{t('posts:posts.postUserId', { count: data.userId })}</div>
        <div>{data.userId}</div>
        <div>{data.title}</div>
        <div>{data.body}</div>
      </div>
    )
  }
}

export default withTranslation('translation', { withRef: true })(Posts)
