export interface IPostModel{
    id: string;
    createdBy: {id:string, name:string}; 
    phone: string;
    address: string;
    lat:number;
    lng:number;
    availability: string;
    details: string;
    postStatus: number;
    pictures: {url:string}[];
    createdOn:Date;
    cipId: number;
} 

