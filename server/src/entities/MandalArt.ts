import {
  AfterInsert,
  BaseEntity,
  BeforeInsert,
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

  @Column({ default: '' })
  public goal!: string;

  @OneToMany(type => MandalObject, mandalObject => mandalObject.mandalArt)
  public mandalObjects!: MandalObject[];

  @BeforeInsert()
  public async createChildren() {
    const mandalObjs: MandalObject[] = [];
    for (let i = 0; i < 8; i++) {
      mandalObjs.push(await MandalObject.create({ mandalArt: this }).save());
    }
    this.mandalObjects = mandalObjs;
  }
}

export default MandalArt;
