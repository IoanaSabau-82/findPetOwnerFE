import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAssignedToPost } from '../models/assigned-to-post';

@Injectable()
export class UsersService {

  apiUsersUrl = "https://localhost:7172/api/Users"
  apiPostsUrl = "https://localhost:7172/api/FoundPetPosts"
  apiAssignedtoPostsUrl = "https://localhost:7172/api/AssignedVolunteers"
  apiUserAssignedtoPostsUrl = "https://localhost:7172/api/AssignedVolunteers/posts"

  apiBlobUrl = "https://localhost:7172/api/Blob"

  constructor(private http: HttpClient) { }

   //users calls 

    getUser(id:string): Observable<any>{
      return this.http.get(`${this.apiUsersUrl}/${id}`);
    }

    post(item: any): Observable<any> {
      return this.http.post(`${this.apiUsersUrl}`,item)
    }

    put(id:string,item:any): Observable<any>{
      return this.http.put(`${this.apiUsersUrl}/${id}`,item)
    }

    //posts calls 
    postPost(item: any): Observable<any> {
      return this.http.post(`${this.apiPostsUrl}`,item)
    }

    putPost(id:string,item:any): Observable<any>{
      return this.http.put(`${this.apiUsersUrl}/${id}`,item)
    }

    getPost(id:string): Observable<any>{
      return this.http.get(`${this.apiPostsUrl}/${id}`);
    }

    getPosts(): Observable<any>{
      return this.http.get(this.apiPostsUrl);
    }

    deletePost(id: string): Observable<{}> {
      return this.http.delete(`${this.apiPostsUrl}/${id}`);
      }

    //assignment calls 
    postAssignment(item: any): Observable<any> {
      return this.http.post(`${this.apiAssignedtoPostsUrl}`,item)
    }

    putAssignment(id:string,item:any): Observable<any>{
      return this.http.put(`${this.apiAssignedtoPostsUrl}/${id}`,item)
    }

    getAssignment(id:string): Observable<any>{
      return this.http.get(`${this.apiAssignedtoPostsUrl}/${id}`);
    }

    getAssignments(): Observable<any>{
      return this.http.get(this.apiAssignedtoPostsUrl);
    }

    getUserAssignments(assignedToId:string):Observable<any>{
      return this.http.get(`${this.apiUserAssignedtoPostsUrl}/${assignedToId}`)
    }

  //blobs
    getBlob(name:string): Observable<any>{
      return this.http.get(`${this.apiBlobUrl}/${name}`);
    }




//should replace any with needed object!
//daca nu merg metodele incearca dupa verb <any>

  /*
    search(name: string): Observable<Hero[]> {
      const params = new HttpParams();
      return this.http.get<Hero[]>(this.apiUrl, { params });
    }*/
    

}