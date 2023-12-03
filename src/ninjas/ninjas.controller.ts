import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';

@Controller('ninjas')
export class NinjasController {
  @Get()
  getNinjas(@Query('type') type: string) {
    return [{ type }];
  }

  @Get(':id')
  getOneNinja(@Param('id') id: string) {
    return {
      id,
    };
  }

  @Post()
  createNinjas(@Body() createNinjaDto) {
    return { createNinjaDto };
  }
}
