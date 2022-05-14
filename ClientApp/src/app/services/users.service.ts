import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class UsersService {

  apiUsersUrl = "https://localhost:7172/api/Users"
  apiPostsUrl = "https://localhost:7172/api/FoundPetPosts"
  apiAssignedtoPostsUrl = "https://localhost:7172/api/AssignedVolunteers"

  constructor(private http: HttpClient) { }

  getPosts(): Observable<any>{
    return this.http.get(this.apiPostsUrl);
  }

   //users calls 

    getEntity(id:string): Observable<any>{
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


//should replace any with needed object!
//daca nu merg metodele incearca dupa verb <any>



  /*
    }
    }
    delete(id: string): Observable<{}> {
      return this.http.delete(`${this.apiUrl}/${id}`);
    }
    search(name: string): Observable<Hero[]> {
      const params = new HttpParams();
      return this.http.get<Hero[]>(this.apiUrl, { params });
    }*/
    

}