import React, { Component, ReactElement, ReactHTMLElement } from 'react'
import { observer, inject } from 'mobx-react'

import LoadingWrapperWithFailure from '../../components/common/LoadingWrapperWithFailure'

import Posts from '../../components/practiseTypescript/components/index'

import PostStore from '../../components/practiseTypescript/stores/stories'
import { PostObject } from '../../components/practiseTypescript/stores/types'

interface PostsRouteProps {}

interface InjectedProps extends PostsRouteProps {
  postStore: PostStore
}

@inject('postStore')
@observer
class PostRoute extends Component<PostsRouteProps> {
  componentDidMount() {
    this.getPosts()
  }

  getInjectedProps = (): InjectedProps => this.props as InjectedProps

  getPostStore = () => {
    return this.getInjectedProps().postStore
  }

  getPosts = () => {
    this.getPostStore().getPostLists()
  }

  renderSuccessUI = observer(() => {
    const { getPostData } = this.getPostStore()

    return (
      <React.Fragment>
        {getPostData.map(item => (
          <Posts data={item} />
        ))}
      </React.Fragment>
    )
  })

  render() {
    const {
      getPostAPIStatus,
      getPostAPIError,
      getPostData
    } = this.getPostStore()
    console.log(getPostAPIStatus)
    return (
      <LoadingWrapperWithFailure
        apiStatus={getPostAPIStatus}
        apiError={getPostAPIError}
        onRetry={this.getPosts}
        renderSuccessUI={this.renderSuccessUI}
      />
    )
  }
}

export default PostRoute
