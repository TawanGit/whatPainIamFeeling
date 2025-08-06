import { Body, Controller, Post } from '@nestjs/common';
import { WebhookService } from './webhook.service';

@Controller('webhook')
export class WebhookController {
  constructor(private readonly webhookService: WebhookService) {}
  @Post()
  sendDataToN8N(@Body() body) {
    return this.webhookService.testN8n(body);
  }
}
