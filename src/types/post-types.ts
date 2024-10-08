import {LikeStatus} from "../db/like-db-type";

export interface OutputPostType {
    id: string,
    title: string,
    shortDescription: string,
    content: string,
    blogId: string,
    blogName: string,
    createdAt: string,
    extendedLikesInfo: {
        likesCount: number,
        dislikesCount: number,
        myStatus: LikeStatus,
        newestLikes: {
            addedAt: Date,
            userId: string,
            login: string
        }[]
    },

}

export interface InputPostType {
    title: string,
    shortDescription: string,
    content: string,
    blogId: string
}

export interface NewestLikes {
    addedAt: Date,
    userId: string,
    login: string
}