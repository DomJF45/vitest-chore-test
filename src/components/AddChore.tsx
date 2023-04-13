import React, { useState } from 'react';
import { iChore } from '../interfaces/chore.interface';

interface Props {
  chores: iChore[];
  setChores: React.Dispatch<React.SetStateAction<iChore[]>>;
  nextId: number;
}

const AddChore = ({ chores, setChores, nextId }: Props) => {

  const [showAdd, setShowAdd] = useState<boolean>(false); 
  const [choreName, setChoreName] = useState<string>('');
  const [chorePriority, setChorePriority] = useState<string>('high');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setChores([...chores, {
      id: nextId += 1,
      name: choreName,
      status: 'in-progress',
      priority: chorePriority
    }])
    cleanUp();
  }

  const cleanUp = () => {
    setShowAdd(false);
    setChoreName('');
    setChorePriority('');
  }
    
  return (

    <div
      className='add-container'
      style={{
        position: 'relative',
        width: '100%',
        height: '20vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
        
      }}
      
    >
      
      <button 
        className="add-btn"
        onClick={() => setShowAdd(!showAdd)}
        style={{
          height: '20px'
        }}
      >Add Chore</button>
      { showAdd && (
      <div
        className="add-modal"
        style={{
          display: 'flex',
          width: '100%',
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          right: 0
        }}
      >
        <form onSubmit={handleSubmit}>
          <div>
            <label>Chore Name</label>
            <input data-testid='chore-name' type="text" value={choreName} onChange={(e) => setChoreName(e.currentTarget.value)}/> 
          </div>
          <div>
            <label>Priority Level</label>
            <select data-testid='chore-prio' value={chorePriority} onChange={(e) => setChorePriority(e.currentTarget.value)}>
              <option value={'high'}>high</option>
              <option value={'medium'}>medium</option>
              <option value={'low'}>low</option>
            </select>

          </div>
          <button data-testid='add-chore' type='submit'>Add</button>
        </form>

      </div>
      )}
      

    </div>

  )

}

export default AddChore;

/*
      <div
        className="add-modal"
        style={{
        display: showAdd ? 'flex' : 'none', 
          width: '100%',
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          right: 0
        }}
      >
        <form onSubmit={handleSubmit}>
          <div>
            <label>Chore Name</label>
            <input type="text" value={choreName} onChange={(e) => setChoreName(e.currentTarget.value)}/> 
          </div>
          <div>
            <label>Priority Level</label>
            <select value={chorePriority} onChange={(e) => setChorePriority(e.currentTarget.value)}>
              <option value={'high'}>high</option>
              <option value={'medium'}>medium</option>
              <option value={'low'}>low</option>
            </select>

          </div>
          <button type='submit'>Add</button>
        </form>

      </div>
*/
