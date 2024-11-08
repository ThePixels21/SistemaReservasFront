import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/app/environments/environment.development';
//import { environment } from 'src/app/environments/enviroment';
import { Notice, NoticeResponse } from 'src/app/model/noticia/noticia';
import data from '../../json/notices.json';
import { BaseService } from '../base/base.service';


@Injectable({
  providedIn: 'root',
})
export class NewsService extends BaseService{
  baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) {
    super();
  }
 
  //SHJ
  getCompanies(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/notices/companies`);
  }

  //SHJ
  getNoticiasByCompany(documentType: string, documentNumber: number): Observable<NoticeResponse> {
    return this.http.get<NoticeResponse>(
      `${this.baseUrl}/notices/external?tdcTd=${documentType}&empNd=${documentNumber}`
    );
  }

  getNoticias(page: number, pageSize: number): Observable<NoticeResponse> {
    return this.http.get<NoticeResponse>(
      `${this.baseUrl}/notices?page=${page}&pageSize=${pageSize}`
    );
  }
  getNoticiaInfo(idNoticia: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/buscarNoticiaId/${idNoticia}`);
  }
  

  //SH
  addNoticia(noticeData: any): Observable<any> {
    console.log(noticeData)
    return this.http.post(`${this.baseUrl}/notices/save/`,JSON.stringify(noticeData),{
      headers: this.getAuthHeaders()
    });
  }

  // Método para obtener una noticia por ID desde la API
  getNoticiaById(id: number): Observable<any> {
    console.log(id)
    return this.http.get(`${this.baseUrl}/notices/${id}`,{
      headers: this.getAuthHeaders()
    });
  }

  //SHJ
  getNoticiaByIdJSON(id: number): Observable<any> {
    const noticia = data.data.find((n) => n.id === id);
    return of(noticia ? noticia : null); 
  }


  //SHJ
  updateNoticia(noticia: Notice): Observable<any>{
    return this.http.put(this.baseUrl + "/notices/", JSON.stringify(noticia),{
      headers: this.getAuthHeaders()
    });
  }

  //SHJ
  deleteNoticia(id: number): Observable<any> {
    return this.http.post(`${this.baseUrl}/notices/delete/`, { id },{
      headers: this.getAuthHeaders()
    });
  }
  

  //SHJ
  getNoticiasJSON(page: number, pageSize: number): Observable<NoticeResponse> {
    const start = (page - 1) * pageSize;
    const paginatedData = data.data.slice(start, start + pageSize);

    return of({
      data: paginatedData,
      totalRecords: data.data.length,
    } as NoticeResponse);
  }

  //SHJ
  addNoticiaJSON(noticeData: any): Observable<any> {
    console.log(noticeData)
    data.data.push({ ...noticeData, id: data.data.length + 1 });
    return of(noticeData);
  }

  //SHJ
  updateNoticiaJSON(id: number, noticeData: any): Observable<any> {
    const index = data.data.findIndex((n) => n.id === id);
    if (index > -1) {
      data.data[index] = { ...data.data[index], ...noticeData };
      return of(data.data[index]);
    }
    return of(null);
  }

  //SHJ
  deleteNoticiaJSON(id: number): Observable<any> {
    const index = data.data.findIndex((n) => n.id === id);
    if (index > -1) {
      const deletedNoticia = data.data.splice(index, 1);
      return of(deletedNoticia);
    }
    return of(null);
  }
}
