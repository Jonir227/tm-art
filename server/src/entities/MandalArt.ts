import {
  BaseEntity,
  Column,
  Entity,
  ObjectID,
  ObjectIdColumn,
  OneToMany,
} from 'typeorm';
import MandalObject from './MandalObject';

@Entity()
class MandalArt extends BaseEntity {
  @ObjectIdColumn()
  public id!: ObjectID;

  @Column()
  public goal!: string;

  @OneToMany(type => MandalObject, mandalObject => mandalObject.mandalArt)
  public mandalObjects!: MandalObject[];
}

export default MandalArt;
