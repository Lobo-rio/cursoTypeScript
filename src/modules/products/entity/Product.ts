import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('product')
export default class Product {

  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  prod_name: string;

  @Column()
  factory_id: number;

  @Column()
  model_furniture_id: number;

  @Column()
  description: string;

  @Column()
  color: string;

  @Column()
  height: number;

  @Column()
  width: number;

  @Column()
  depth: number;

  @Column()
  min_stock: number;

  @Column()
  stock: number;

  @Column()
  ipi: number;

  @Column()
  price_coast: number;

  @Column()
  price: number;

  @Column()
  price_old: number;

  @Column()
  price_financed: number;

  @Column()
  qrcode: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @Column()
  percentage_price: number;

  @Column()
  percentage_price_financed: number;

  @Column()
  price_ipi: number;

  @Column()
  freight: number;

}
