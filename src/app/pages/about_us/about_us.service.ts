import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AboutUsService {
  baseUrl = environment.baseUrl+'/about_us';


  constructor(private http: HttpClient) {}
  
  get(id: any): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${id}`);
  }
  getDirector(id: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/getDirector/${id}`,{});
  }
}
