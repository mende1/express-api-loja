import {Column, CreateDateColumn, Entity, PrimaryColumn} from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity('stock')
export class Stock {
  @PrimaryColumn()
    id: string;

  @Column()
    name: string;

  @Column()
    quantity: number;

  @CreateDateColumn()
    created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
