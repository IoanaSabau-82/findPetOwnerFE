import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataExchangeService {

  assignmentFormPostId:any = "text";
  assignmentForm:any
  postForm:any
  
  basicUser = {id:"81B4F391-AF27-4424-322D-08DA2370E543"}
  volunteer = {id:"B6DC674E-E6AE-4815-324C-08DA236C3BCC"}

  userFormDataBasicUser = {id:"81B4F391-AF27-4424-322D-08DA2370E543", firstName:"Cristian", lastName:"Pop", email:"example@mail.com", phone:"07500563",address: "Adresa userului logat"}
  userFormData = {id:"81B4F391-AF27-4424-322D-08DA2370E543", firstName:"Cristian", lastName:"Pop", email:"example@mail.com", phone:"07500563",address: "Adresa userului logat"}

  constructor() { }


}
