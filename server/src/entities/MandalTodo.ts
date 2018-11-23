import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import MandalObject from './MandalObject';

@Entity()
class MandalTodo extends BaseEntity {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column({ type: 'varchar', default: '' })
  public object!: string;

  @Column({ type: 'varchar', default: '' })
  public description!: string;

  @Column({ type: 'int', default: 0 })
  public score!: number;

  @ManyToOne(type => MandalObject, mandalObject => mandalObject.mandalTodo)
  public mandalObject!: MandalObject;
}

export default MandalTodo;
