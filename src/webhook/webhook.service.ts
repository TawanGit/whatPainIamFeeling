import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { lastValueFrom, Observable } from 'rxjs';
import { BodyDto } from './dto/BodyDto';

@Injectable()
export class WebhookService {
  constructor(private readonly httpService: HttpService) {}

  async testN8n(body: BodyDto) {
    try {
      const response = await lastValueFrom(
        this.httpService.post(
          'http://localhost:5678/webhook-test/b1355106-ec6e-46ef-9067-6cb30946e338',
          body,
        ),
      );

      console.log('N8N response:', response.data);
      return response.data;
    } catch (error) {
      console.error('Error sending to N8N:', error.message);
      throw new Error('Failed to send request to N8N');
    }
  }
}
