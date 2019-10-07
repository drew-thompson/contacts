import { Contact, Message } from '@contacts/api-interface';
import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello')
  getData(): Message {
    return this.appService.getData();
  }

  @Post('hello')
  fakerPost(): { data: Message } {
    return { data: this.appService.getData() };
  }

  @Get('contacts')
  getContacts(): { data: Contact[] } {
    return { data: this.appService.getContacts() };
  }

  @Post('contacts')
  postContacts(): { data: Message } {
    return { data: this.appService.getData() };
  }
}
