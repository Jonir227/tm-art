import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import MandalArt from './MandalArt';

@Entity()
class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column({ type: 'varchar' })
  public username!: string;

  @Column({ type: 'varchar' })
  public nickName!: string;

  @Column({ type: 'varchar' })
  public password!: string;

  @OneToMany(type => MandalArt, mandalArt => mandalArt.author)
  public mandalArts!: MandalArt[];

  @CreateDateColumn()
  public createdAt!: Date;
}

export default User;
