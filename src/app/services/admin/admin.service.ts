import { HttpClient, HttpParams } from "@angular/common/http";
import { Inject, Injectable } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { Observable } from 'rxjs';
import { appHeaders } from 'src/config/headers';
import { urls } from 'src/config/urls';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  constructor(@Inject(HttpClient) private httpClient: HttpClient) { }
  PREFIX = urls.ADMIN;
  upload(file: File): Observable<TreeNode[]> {
    const formdata: FormData = new FormData();
    formdata.append('file', file, file.name);
    return this.httpClient.post<TreeNode[]>(this.PREFIX + "/upload", formdata, { headers: appHeaders.getHeadersXmlUpload() }
    );
  }
  uploadIMSLocations(file: File): Observable<TreeNode[]> {
    const formdata: FormData = new FormData();
    formdata.append('file', file, file.name);
    return this.httpClient.post<TreeNode[]>(this.PREFIX + "/uploadIms", formdata, { headers: appHeaders.getHeadersXmlUpload() }
    );
  }
}
