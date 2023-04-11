import React, {useState} from 'react';
import { iChore } from '../App';
import Chore from './Chore';
import AddChore from './AddChore';

const Chores = () => {

  const [chores, setChores] = useState<iChore[]>([]);

  const getId = (): number => {
    
    if (chores.length >= 1) {
      return chores[chores.length - 1].id;
    } else {
      return 0;
    }

  }

  const handleDelete = (key: number) => {
    setChores(chores => chores.filter((chore) => chore.id !== key));
  } 

  const nextId = getId(); 

  console.log(chores)

  return (

    <>
      <AddChore chores={chores} setChores={setChores} nextId={nextId} />
      <div 
        className='chores-container'
        style={{
          width: '500px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '20px'
        
        }}
      >

        {chores.map((chore) => {
          return (
            <Chore chore={chore} key={chore.id} handleDelete={handleDelete} />
          )
        })} 

      </div>
    </>

  )

}

export default Chores;
