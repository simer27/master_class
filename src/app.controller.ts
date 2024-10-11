import { Body, Controller, Get } from '@nestjs/common';
import { PrismaService } from './database/prisma.service';
import { randomUUID } from 'node:crypto';

@Controller('/app')
export class AppController {
  constructor(private prisma: PrismaService) {}

  @Get('/member')
  async getMember(@Body() body: any) {
    const { name, function: memberFunction } = body;

    const member = await this.prisma.membroDoTime.create({
      data: {
        id: randomUUID(),
        name,
        function: memberFunction,
      },
    });

    return { member };
  }
}
