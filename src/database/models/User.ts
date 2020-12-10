import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('user')
export default class User {
    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column()
    email: string;
}
