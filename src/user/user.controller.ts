import { Body, Controller, Post, ValidationPipe, UsePipes } from '@nestjs/common';

// swagger
import { ApiOperation, ApiResponse, ApiTags, ApiBody } from '@nestjs/swagger';

// project imports
import { UserService } from './user.service';

// configs
import { RegisterUserResponse } from './configs/register-user-response.config';
import { LoginUserResponse } from './configs/login-user-response.config';
import { UserBody } from './configs/user-body.config';

// types
import { UserData } from './dto/userData';

@Controller('/')
@ApiTags('User')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('register')
  @ApiOperation({ summary: 'Register a user' })
  @ApiBody(UserBody)
  @ApiResponse(RegisterUserResponse)
  @UsePipes(ValidationPipe)
  register(@Body() registerInput: UserData) {
    return this.userService.register(registerInput);
  }

  @Post('login')
  @ApiOperation({ summary: 'Logging in user' })
  @ApiBody(UserBody)
  @ApiResponse(LoginUserResponse)
  @UsePipes(ValidationPipe)
  login(@Body() loginInput: UserData) {
    return this.userService.login(loginInput);
  }
}
