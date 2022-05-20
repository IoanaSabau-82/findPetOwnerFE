export interface IPostModel{
    id: string;
    createdBy: {id:string, name:string}; 
    phone: string;
    address: string;
    availability: string;
    details: string;
    postStatus: number;
    pictures: {url:string}[];
    createdOn:Date;
    cipId: number;
} 

