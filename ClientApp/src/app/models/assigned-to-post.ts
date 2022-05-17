export interface IAssignedToPost {
    id: string;
    post: {id:string, 
            createdBy:{name:string, phone:string, address:string },
    pictures:{url:string}[], phone:string, availability:string, details:string, address:string, postSttus:number, cipId:number};
    scheduledTime: Date;
    assignedStatus: number;
}