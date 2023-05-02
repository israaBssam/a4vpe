import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SuccessStoryService {
  baseUrl = environment.baseUrl+'/success_story';


  constructor(private http: HttpClient) {}
  
  getAll(data: any): Observable<any> {
    return this.http.get(this.baseUrl,data);
  }  

  create(data: any): Observable<any> {
    return this.http.post(this.baseUrl, data);
  }
  
  getOptions(): Observable<any> {
    return this.http.post(`${this.baseUrl}/getOptions`,[]);
  }
  get(id: any): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${id}`);
  }

}
