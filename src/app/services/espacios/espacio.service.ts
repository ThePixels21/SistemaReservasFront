import { Injectable } from '@angular/core';
import { BaseService } from '../base/base.service';
import { environment } from 'src/app/environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EspacioService extends BaseService{


  baseUrl: string = environment.baseUrl;
  
  constructor(private http: HttpClient) { 
    super()
  }


    getEspacios(): Observable<any> {
      return this.http.get<any>(`${this.baseUrl}/workspaces`, {
        headers: this.getAuthHeaders()
      });
  }

}
