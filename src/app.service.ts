import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello() {
    return {data:'hello world'};
  }
}
