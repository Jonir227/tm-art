import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import MandalObject from './MandalObject';
import User from './User';

@Entity()
class MandalArt extends BaseEntity {
  @PrimaryGeneratedColumn()
  public id!: number;

  @CreateDateColumn()
  public createdAt!: Date;

  @ManyToOne(type => User, user => user.mandalArts)
  public author!: User;

  @Column({ type: 'varchar', default: '' })
  public goal!: string;

  @OneToMany(type => MandalObject, mandalObject => mandalObject.mandalArt)
  public mandalObjects!: MandalObject[];
}

export default MandalArt;
