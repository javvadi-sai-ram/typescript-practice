import React from "react"
import { PostObject } from "../stores/types"



type props = {
    data: PostObject
}


class PostTypescript extends React.Component<props> {
    render() {
        const { data } = this.props
        console.log(this.props.data)
        return (
            <div>
                <div>{data.id}</div>
                <div>{data.userId}</div>
                <div>{data.title}</div>
                <div>{data.body}</div>
            </div>
        )
    }
}



export default PostTypescript