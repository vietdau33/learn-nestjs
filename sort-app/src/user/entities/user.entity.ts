import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@Entity({ name: "users" })
export class User {

    @PrimaryGeneratedColumn()
    id : number;

    @Column({ length: 255 })
    fullname : string;

    @Column('date') 
    birthday : Date;

    @Column({default: 0}) 
    is_active : number;

    @Column({ length: 255 })
    username : string

    @Column({length:255})
    password : string

    @Column({length:10, default: "user"})
    role : string

    @CreateDateColumn()
    created_at : Date

}
