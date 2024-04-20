import { Injectable } from '@nestjs/common'

@Injectable()
export class UserService {
  constructor() {}
  async findOne(email: string): Promise<any> {
    return { email: email }
  }
}
