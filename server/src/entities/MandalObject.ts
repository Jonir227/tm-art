import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  ObjectID,
  ObjectIdColumn,
  OneToMany,
} from 'typeorm';
import MandalArt from './MandalArt';
import MandalTodo from './MandalTodo';

@Entity()
class MandalObject extends BaseEntity {
  @ObjectIdColumn()
  public id!: ObjectID;

  @Column()
  public mission!: string;

  @OneToMany(type => MandalTodo, mandalTodo => mandalTodo.mandalObject)
  public mandalTodo!: MandalTodo[];

  @ManyToOne(type => MandalArt, mandalArt => mandalArt.mandalObjects)
  public mandalArt!: MandalArt;
}

export default MandalObject;
