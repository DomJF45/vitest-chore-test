import { render, screen } from '@testing-library/react';
import { describe, expect, test, vi } from 'vitest';
import { iChore } from '../interfaces/chore.interface';
import AddChore from './AddChore';

const testChores: iChore[] = [
  {
    id: 0,
    name: 'Chore 1',
    status: 'in-progress',
    priority: 'high'
  },
  {
    id: 1,
    name: 'Chore 2',
    status: 'in-progress',
    priority: 'high'
  },
  {
    id: 2,
    name: 'Chore 2',
    status: 'in-progress',
    priority: 'high'
  }
]

const setChores = vi.fn();

const setId = () => {
  return testChores[testChores.length - 1].id + 1;
}

const nextId: number = setId();

describe('Add Chore Suits', () => {

  test('Test next id', () => {
    expect(nextId).toEqual(3);
  })

  test('Test chore render', () => {
    render(<AddChore chores={testChores} setChores={setChores} nextId={nextId} />);
    expect(screen.getByText(/Add Chore/i)).toBeDefined();
  })
  
})
