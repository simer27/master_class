import { IsNotEmpty } from 'class-validator';

export class MemberBody {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  function: string;
}
