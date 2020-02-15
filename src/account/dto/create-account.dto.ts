import { IsNotEmpty } from 'class-validator';

export class CreateAccountDto {
    readonly login: string;

    @IsNotEmpty()
    readonly password: string;

    createdAt: Date;
}
