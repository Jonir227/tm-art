import {
  AfterInsert,
  BaseEntity,
  Column,
  Entity,
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

  @AfterInsert()
  public async createMandalTodo() {
    const mandalTodos = [];
    for (let i = 0; i < 8; i++) {
      mandalTodos.push(await MandalTodo.create({ mandalObject: this }));
    }
    this.mandalTodo = mandalTodos;
  }
}

export default MandalObject;
