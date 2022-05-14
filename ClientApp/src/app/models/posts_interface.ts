export interface IPostModel{
    id: string;
    createdBy: {id:string, name:string}; 
    phone: string;
    address: string;
    availability: string;
    details: string;
    postStatus: number; // asta sa il trimit mai bine ca si valoare? ca sa nu il convertesc si aici? desi imi va trebui oricum ca si lista de optiuni in select
    pictures: {url:string}[];
} 

