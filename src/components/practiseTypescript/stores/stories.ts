import React from 'react'
import { bindPromiseWithOnSuccess } from '@ib/mobx-promise'
import { observable, action } from 'mobx'
import { API_INITIAL, APIStatus } from '@ib/api-constants'
import PostModel from './model'
import PostService from "../services"
import { PostObject } from "./types"


class PostStore {
  @observable getPostAPIStatus!: APIStatus
  @observable getPostAPIError!: Error | null
  @observable getPostData!: Array<PostModel>

  postServiceAPI: PostService

  constructor(postServiceAPI: PostService) {
    this.postServiceAPI = postServiceAPI
    this.init()
  }

  init() {
    this.getPostAPIStatus = API_INITIAL
    this.getPostAPIError = null
    this.getPostData = []
  }
  @action.bound
  setPractiseAPIStatus(status: number) {
    this.getPostAPIStatus = status
  }

  @action.bound
  setPractiseAPIError(error: Error | null) {
    this.getPostAPIError = error
  }
  @action.bound
  setPractiseAPIResponse(data: Array<PostObject> | null) {
    if (data) {
      this.getPostData = data.map(item => {
        return new PostModel(item)
      })
    }
  }
  @action.bound
  getPostLists() {
    const getPromise = this.postServiceAPI.getPostAPI()
    return bindPromiseWithOnSuccess(getPromise)
      .to(this.setPractiseAPIStatus, this.setPractiseAPIResponse)
      .catch(this.setPractiseAPIError)
  }
}

export default PostStore
