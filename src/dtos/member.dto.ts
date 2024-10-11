import { IsNotEmpty, Length } from 'class-validator';

export class MemberBody {
  @IsNotEmpty({
    message: 'Precisa preencher a name.',
  })
  @Length(5, 100)
  name: string;

  @IsNotEmpty({
    message: 'Precisa preencher a function.',
  })
  function: string;
}
