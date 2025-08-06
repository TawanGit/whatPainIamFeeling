import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WebhookController } from './webhook/webhook.controller';
import { HttpModule } from '@nestjs/axios';
import { WebhookService } from './webhook/webhook.service';

@Module({
  imports: [HttpModule],
  controllers: [AppController, WebhookController],
  providers: [AppService, WebhookService],
})
export class AppModule {}
