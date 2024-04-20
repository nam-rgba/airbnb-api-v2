import { Body, Controller, HttpStatus, HttpCode, Post } from '@nestjs/common'
import { AuthService } from './auth.service'

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @HttpCode(HttpStatus.OK)
  @Post('login')
  async login(@Body() signInDto: Record<string, any>): Promise<any> {
    return this.authService.validateUser(signInDto.email, signInDto.password)
  }
}
