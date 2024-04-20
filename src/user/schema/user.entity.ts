import { Entity, Column, PrimaryGeneratedColumn, ObjectIdColumn } from 'typeorm'

@Entity()
export class User {
  @ObjectIdColumn()
  id: string

  @Column()
  name: string

  @PrimaryGeneratedColumn()
  email: string

  @Column()
  password: string
}
