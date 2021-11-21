import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Category } from '../models/category';


@Injectable()
export class CategoryService {
  apiUrl = "http://localhost:3000/categories";

  constructor(
    private httpClient: HttpClient,
  ) { }

  getCategories(): Observable<Category[]> {
    return this.httpClient.get<Category[]>(this.apiUrl);

  }

}
