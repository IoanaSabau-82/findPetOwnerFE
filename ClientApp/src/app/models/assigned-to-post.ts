import {IPostModel} from "./posts_interface"

export interface IAssignedToPost {
    id: string;
    post: IPostModel;
    scheduledTime: Date;
    assignedStatus: number;
}


