export interface iChore {
  id: number;
  name: string;
  status: 'complete' | 'in-progress';
  priority: string;
}
