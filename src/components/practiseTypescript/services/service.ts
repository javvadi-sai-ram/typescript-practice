import { create } from 'apisauce'

import { networkCallWithApisauce } from '../../../utils/APIUtils'

import { apiMethods } from '../../../constants/APIConstants'

import { TODO_BASE_URL } from '../../../constants/EnvironmentConstants'

import endpoints from './endpoints'

import PostService from '.'

class PostAPIService implements PostService {
  api: Record<string, any>

  constructor() {
    this.api = create({
      baseURL: 'https://jsonplaceholder.typicode.com/'
    })
  }

  async getPostAPI() {
    console.log(12345667)
    return networkCallWithApisauce(
      this.api,
      endpoints.posts.postList,
      {},
      apiMethods.get
    )
  }

  // async updateTodoCompletionAPI(requestObject) {
  //     return networkCallWithApisauce(
  //         this.api,
  //         endpoints.todos.updateCompletion,
  //         requestObject,
  //         apiMethods.post
  //     )
  // }
}

export default PostAPIService
