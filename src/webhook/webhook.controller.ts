import {
  Body,
  Controller,
  InternalServerErrorException,
  Post,
} from '@nestjs/common';
import { WebhookService } from './webhook.service';
import { BodyDto } from './dto/BodyDto';

@Controller('webhook')
export class WebhookController {
  constructor(private readonly webhookService: WebhookService) {}
  @Post()
  sendDataToN8N(@Body() body: BodyDto) {
    try {
      return this.webhookService.SendResponseN8NTo(body);
    } catch (e) {
      return new InternalServerErrorException(e.message);
    }
  }
}
