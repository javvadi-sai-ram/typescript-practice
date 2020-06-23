import { observable } from "mobx"







class PostModel {
    @observable id: number
    @observable userId: number
    @observable body: string
    @observable title: string


    constructor(practise) {
        this.id = practise.id
        this.userId = practise.userId
        this.body = practise.body
        this.title = practise.title
    }



}
export default PostModel