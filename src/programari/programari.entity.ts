import { Client } from 'src/client/client.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

@Entity()
export class Programari {
    @PrimaryGeneratedColumn()
    programare_id: number;

    @Column()
    client_id: number;

    @Column()
    client_type: number;

    @Column()
    car_model: string;

    @Column()
    an_fabricare: number;

    @Column()
    problem_description: string;

    @Column({ type: 'timestamp' })
    registr_date: Date;

    /*  @ManyToOne(() => Client, (clientId) => clientId.client_id, { onDelete: 'CASCADE' })
     @JoinColumn({ name: "client_id" })
     clientId: Client */
}
