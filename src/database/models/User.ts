import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('User')
export default class User {
    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column()
    email: string;
}
