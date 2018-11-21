import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  ObjectID,
  ObjectIdColumn,
} from 'typeorm';
import MandalObject from './MandalObject';

@Entity()
class MandalTodo extends BaseEntity {
  @ObjectIdColumn()
  public id!: ObjectID;

  @Column()
  public object!: string;

  @Column()
  public description!: string;

  @Column()
  public score!: number;

  @ManyToOne(type => MandalObject, mandalObject => mandalObject.mandalTodo)
  public mandalObject!: MandalObject;
}

export default MandalTodo;
