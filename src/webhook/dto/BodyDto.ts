import { IsNotEmpty } from 'class-validator';

export class BodyDto {
  @IsNotEmpty()
  symptonOne: string;
  @IsNotEmpty()
  symptonTwo: string;
  @IsNotEmpty()
  symptonThree: string;
  @IsNotEmpty()
  symptonFour: string;
  @IsNotEmpty()
  message: string;
}
