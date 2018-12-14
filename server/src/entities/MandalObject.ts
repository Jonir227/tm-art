import {
  AfterInsert,
  BaseEntity,
  Column,
  Entity,
  JoinTable,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import MandalArt from './MandalArt';
import MandalTodo from './MandalTodo';

@Entity()
class MandalObject extends BaseEntity {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column({ type: 'varchar', default: '' })
  public mission!: string;

  @OneToMany(type => MandalTodo, mandalTodo => mandalTodo.mandalObject)
  public mandalTodo!: MandalTodo[];

  @ManyToOne(type => MandalArt, mandalArt => mandalArt.mandalObjects)
  public mandalArt!: MandalArt;
}

export default MandalObject;
