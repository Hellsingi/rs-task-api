import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { FilmEntity } from '../../film/entities/film.entity';

@Entity('stock')
export class StockEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  count: number;

  @OneToOne(() => FilmEntity, (film) => film.stock, { onDelete: 'CASCADE' })
  @JoinColumn()
  film: FilmEntity;

  @Column({ type: 'uuid' })
  filmId: string;
}
