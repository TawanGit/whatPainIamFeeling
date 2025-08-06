import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';

@Injectable()
export class WebhookService {
  constructor(private readonly httpService: HttpService) {}

  testN8n(body) {
    return this.httpService.post(
      'http://localhost:5678/webhook-test/b1355106-ec6e-46ef-9067-6cb30946e338',
      body,
    );
  }
}
