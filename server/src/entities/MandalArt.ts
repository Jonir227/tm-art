import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import MandalObject from './MandalObject';

@Entity()
class MandalArt extends BaseEntity {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column({ type: 'varchar', default: '' })
  public goal!: string;

  @OneToMany(type => MandalObject, mandalObject => mandalObject.mandalArt)
  public mandalObjects!: MandalObject[];
}

export default MandalArt;
