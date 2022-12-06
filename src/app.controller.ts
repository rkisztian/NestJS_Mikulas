import { Get, Controller, Render, Post, Body } from '@nestjs/common';
import { CsomagDto } from './text-color.dto';

@Controller()
export class AppController {
  @Get()
  @Render('form')
  root() {
    return {};
  }

  @Post()
  @Render('csomag')
  csomag(@Body() csomag: CsomagDto): object {
    return csomag;
  }
}
