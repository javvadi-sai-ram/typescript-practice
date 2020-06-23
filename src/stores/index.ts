// All the stores will be initialised here
import TodoService from '../services/TodoService/index.api'

import TodoStore from './TodoStore'

import PostStore from '../components/practiseTypescript/stores/stories'
import PostAPIService from '../components/practiseTypescript/services/service'

const postService = new PostAPIService()
const postStore = new PostStore(postService)

const todoStore = new TodoStore(new TodoService())

const stores = {
  todoStore,
  postStore
}

export default stores
