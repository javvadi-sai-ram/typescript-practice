import { PostObject } from '../stores/types'

interface PostService {
  getPostAPI: () => Promise<Array<PostObject>>
}

export default PostService
