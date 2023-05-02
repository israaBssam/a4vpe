import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DonateService {
  baseUrl = environment.baseUrl+'/donate';


  constructor(private http: HttpClient) {}
  
  getAll(): Observable<any> {
    return this.http.get(this.baseUrl);
  }  

  create(data: any): Observable<any> {
    return this.http.post(this.baseUrl, data);
  }
}
