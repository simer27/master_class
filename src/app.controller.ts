import { Controller, Get } from '@nestjs/common';
import { PrismaService } from './database/prisma.service';

@Controller('/app')
export class AppController {
  constructor(private prisma: PrismaService) {}

  @Get('/member')
  async getMember() {
    const member = await this.prisma.membroDoTime.create({
      data: {
        id: 'lateral',
        name: 'junior',
        function: 'marcação, se lançar a frente e cruzar',
      },
    });

    return { member };
  }
}
