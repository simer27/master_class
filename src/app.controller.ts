import { Body, Controller, Post } from '@nestjs/common';
import { randomUUID } from 'node:crypto';
import { MemberBody } from './dtos/member.dto';
import { MembersRepository } from './repositories/members.repository';

@Controller('/app')
export class AppController {
  constructor(private membersRepository: MembersRepository) {}

  @Post('/member')
  async getMember(@Body() body: MemberBody) {
    const { name, function: memberFunction } = body;

    await this.membersRepository.create(name, memberFunction);
  }
}
