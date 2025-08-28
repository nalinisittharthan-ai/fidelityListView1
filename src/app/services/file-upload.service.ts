import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Trade } from '../models/trade.model';
import { Tradestatusupdate } from '../models/tradestatusupdate';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {
  private baseUrl = 'http://localhost:8081';
  private baseUrl1 = '';
  private eventSource?: EventSource;


  constructor(private http: HttpClient) { }

  upload(file: File): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();
    this.baseUrl1 = 'http://localhost:8081/api/trades/upload';
    formData.append('file', file);

    const req = new HttpRequest('POST', `${this.baseUrl1}`, formData, {
      reportProgress: true,
      responseType: 'json'
    });
     alert("===>>"+this.baseUrl1);
    return this.http.request(req);
  }

  getFiles(): Observable<any> {
    return this.http.get(`${this.baseUrl1}`);
  }
  //getAllRecords(){
   // return this.http.get(`${this.baseUrl}/records`);
//  }
 // getUserList(): Observable<User[]> {
   // return this.httpClient.get<User[]>(`${this.basUrl}`);
// }
  getAllRecords(): Observable<Trade[]> {
    return this.http.get<Trade[]>('${this.baseUrl}/records');
  }
  //start
connectToStatusStream(): Observable<Tradestatusupdate> {
    return new Observable(observer => {
      this.eventSource = new EventSource('/api/trades/status/stream');
      
      this.eventSource.addEventListener('trade-status', (event) => {
        const update: Tradestatusupdate = JSON.parse(event.data);
        observer.next(update);
      });

      this.eventSource.addEventListener('batch-progress', (event) => {
        const progress = JSON.parse(event.data);
        observer.next(progress);
      });

      this.eventSource.onerror = (error) => {
        observer.error(error);
      };
    });
  }

  //end
}