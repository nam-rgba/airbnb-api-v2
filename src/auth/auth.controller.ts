import { Body, Controller, HttpStatus, HttpCode, Post, Request, UseGuards, Get } from '@nestjs/common'
import { AuthService } from './auth.service'
import { AuthGuard } from './auth.guard'

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @HttpCode(HttpStatus.OK)
  @Post('login')
  async login(@Body() signInDto: Record<string, any>): Promise<any> {
    return this.authService.validateUser(signInDto.email, signInDto.password)
  }

  @UseGuards(AuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user
  }
}
