import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ConfigService {
  configUrl = 'assets/config.json';

  constructor(private http: HttpClient) { }
}
