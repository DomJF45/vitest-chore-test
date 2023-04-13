import { fireEvent, render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, test, vi } from 'vitest';
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

describe('Add Chore Suite', () => {

  beforeEach(() => {
    render(<AddChore chores={testChores} setChores={setChores} nextId={nextId} />)
  })

  test('Test next id', () => {
    expect(nextId).toEqual(3);
  })

  test('Should not show input list', () => {
    expect(screen.queryByText(/Chore Name/i)).not.toBeInTheDocument();
  })

  test('Should show input list', async () => {
    const addBtn = screen.getByText(/Add Chore/);
    fireEvent.click(addBtn);
    expect(await screen.findByText(/Chore Name/)).toBeInTheDocument();
  }) 

})

describe('Show chores after add', () => { 

  beforeEach(() => {
    render(<AddChore chores={testChores} setChores={setChores} nextId={nextId} />)
    const showBtn = screen.getByText(/Add Chore/i);
    fireEvent.click(showBtn);
  })

  test('Should show chore after add', () => {
    const input = screen.getByTestId('chore-name');
    fireEvent.change(input, {target: { value: 'Wash Dishes' }});
    expect(input).toHaveValue('Wash Dishes');
  })

  test('Should Change Priority Level', () => {
    const input = screen.getByTestId('chore-prio');
    fireEvent.change(input, {target: { value: 'low' }});
    expect(input).toHaveValue('low');
  })

  test('Should not change priortity level', () => {
    const input = screen.getByTestId('chore-prio');
    fireEvent.change(input, { target: { value: 'low' }});
    expect(input).not.toHaveValue('medium');
  })




})
