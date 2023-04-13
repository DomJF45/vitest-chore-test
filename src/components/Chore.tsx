import React from 'react';
import { iChore } from '../interfaces/chore.interface';

interface Props {
  chore: iChore;
  handleDelete: (key: number) => void;
}

const Chore = ({ chore, handleDelete }: Props) => {  

  const choreColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'red';
      case 'medium':
        return 'blue';
      case 'low': 
        return 'green';
      default:
        return 'red';
    }
  }

  return (
    <div
      className={'chore-card'}
      style={{
        width: '90%',
        border: '1px solid #303030',
        borderRadius: '8px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'relative',
        padding: 0,
        margin: 0,
        cursor: 'pointer'
      }}
      onDoubleClick={() => handleDelete(chore.id)}
      key={chore.id}
    > 
      <h2>{chore.name}</h2>
      <p>ID: {chore.id}</p>
      <div
        style={{
          position: 'absolute',
          left: 0,
          height: '100%',
          width: '20px',
          backgroundColor: choreColor(chore.priority),
          borderTopLeftRadius: '8px',
          borderBottomLeftRadius: '8px'
        }}
      >
      </div>
    </div>
  )
}

export default Chore;
