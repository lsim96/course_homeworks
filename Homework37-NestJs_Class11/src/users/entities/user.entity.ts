import { RoleType } from 'src/roles/roles.model';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    unique: true,
    name: 'email',
  })
  email: string;

  @Column()
  password: string;

  @Column({
    name: 'first_name',
  })
  firstName: string;

  @Column('text', { array: true, default: [RoleType.USER] })
  role: RoleType[];

  @Column({
    name: 'last_name',
  })
  lastName: string;

  @Column({ type: 'int' })
  age: number;

  @Column('text', {
    array: true,
    default: [],
    nullable: true,
  })
  refreshTokens: string[];
}
