import { IsString, Length } from 'class-validator';

export class UserData {
  @IsString()
  @Length(3, 20)
  name?: string;

  @IsString()
  @Length(3, 40)
  phone_number: string;
}
