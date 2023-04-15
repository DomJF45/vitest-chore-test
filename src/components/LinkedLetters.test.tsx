import { describe, expect, test, beforeEach, expectTypeOf } from 'vitest';
import { screen, render, fireEvent, getByTestId, getAllByTestId } from '@testing-library/react';
import LinkedLetters from './LinkedLetters';

const mockArray = ['a', 'b', 'c'];
const badMockArray = [2, 2, 2];

describe('type checking', () => {

  beforeEach(() => {
    render(<LinkedLetters />);
  })

  test('test letter array type', () => {
    expectTypeOf(mockArray).toBeArray();
    expectTypeOf(mockArray).items.toEqualTypeOf<string>();

  })

  test('test bad letters', () => {
    expectTypeOf(badMockArray).toBeArray();
    expectTypeOf(badMockArray).items.not.toEqualTypeOf<string>();
  })

})

describe('functionality tests', () => {

  beforeEach(() => {
    render(<LinkedLetters />);
  })

  test('new box on click', () => {
    const newBox = screen.getAllByTestId('add-new-box');
    for (let i = 0; i < newBox.length; i++) {
      fireEvent.click(newBox[i]);
    }

    const scoreArr = screen.getAllByText(/_/i);
    //expect(mockArray.length - (newBox.length)).toEqual(scoreArr.length);
    expect(scoreArr.length + 1).toEqual(newBox.length);
  })

  test('last box has no click', () => {
    const newBox = screen.getAllByTestId('add-new-box');
    expect(mockArray.length - newBox.length + 1).toEqual(newBox.length);
  })

  test('change letter', () => {
    const changeBox = screen.getAllByTestId('change-box');
    
    changeBox.forEach((char: HTMLElement) => {
      fireEvent.change(char, { target: { value: 'z' } });
    })

    changeBox.forEach((char: HTMLElement) => {
      expect(char).toHaveValue('z');
    })

  })

  test('string output is correct', () => {
    const changeBox = screen.getAllByTestId('change-box');
    
    changeBox.forEach((char: HTMLElement) => {
      fireEvent.change(char, { target: { value: 'z' } });
    })
    
    expect(screen.getByText((content, element) => {
      return element?.tagName.toLowerCase() === 'p' && content.startsWith('"zzz"')
    }));

  })

})
