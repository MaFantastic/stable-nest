import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/login')
  getHello(@Query() query) {
    console.log(query, 'query');
    return this.appService.getHello();
  }
}
