import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity
} from 'typeorm';
import {Field, Int, ObjectType} from 'type-graphql'

@ObjectType()
@Entity()
export class Movie extends BaseEntity{
  @Field(() => Int) // number can't be inferred
  @PrimaryGeneratedColumn()
  id: number;

  @Field() //the type is inferred
  @Column()
  title: string;

  @Field(() => Int)
  @Column('int', {default: 60})
  minutes: number;

}
