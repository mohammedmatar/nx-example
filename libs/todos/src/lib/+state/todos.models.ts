/**
 * Interface for the 'Todos' data
 */
export interface TodosEntity {
  id: string | number; // Primary ID
  userId: number;
  title: string;
  completed: boolean;
}
