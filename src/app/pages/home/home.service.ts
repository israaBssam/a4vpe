import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  baseUrl = environment.baseUrl+'/home';


  constructor(private http: HttpClient) {}
  
  getAll(): Observable<any> {
    return this.http.get(this.baseUrl);
  }  

}
