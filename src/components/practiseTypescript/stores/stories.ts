import React from "react"
import { bindPromiseWithOnSuccess } from "@ib/mobx-promise";
import { observable, action } from "mobx";
import { API_INITIAL } from "@ib/api-constants";
import PostModel from "./model"


class PostStore {
    @observable getPostAPIStatus;
    @observable getPostAPIError;
    @observable getPostData;

    postServiceAPI

    constructor(postServiceAPI) {
        this.postServiceAPI = postServiceAPI
        this.init()
    }


    init() {
        this.getPostAPIStatus = API_INITIAL
        this.getPostAPIError = null
        this.getPostData = []
    }
    @action.bound
    setPractiseAPIStatus(status) {
        this.getPostAPIStatus = status
    }

    @action.bound
    setPractiseAPIError(error) {
        this.getPostAPIError = error
    }
    @action.bound
    setPractiseAPIResponse(data) {
        let a = data
        this.getPostData = a.map(item => {
            return new PostModel(item)
        })

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



