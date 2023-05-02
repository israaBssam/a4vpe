import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ResourcesService {
  baseUrl = environment.baseUrl+'/resources';


  constructor(private http: HttpClient) {}
  

  MajorInvestments(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/major_investments`,data);
  }
}
