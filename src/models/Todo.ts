import { Entity, PrimaryGeneratedColumn, Column } from '@jussikinnula/typeorm';

@Entity()
export class Todo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  done: boolean;
}
