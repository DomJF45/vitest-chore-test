import React, {useEffect, useState} from 'react';

const LinkedLetters = () => {

  const [letters, setLetters] = useState<string[]>(['a', 'b', 'c']); 
  const [string, setString] = useState<string>(letters.join(''));

  const handleChange = (newChar: string, idx: number) => {
    setLetters((prevChars: string[]) => 
      prevChars.map((char, i) => (i === idx ? newChar : char))
    );
  }

  const addChar = (idx: number) => {
    setLetters((prevChars: string[]) => [
      ...prevChars.slice(0, idx + 1),
      '_',
      ...prevChars.slice(idx + 1)
    ])
  }

  useEffect(() => {
    setString(letters.join(''));
    console.log('render');
  }, [letters])
  
  return (
    <>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          height: '50vh',
          alignItems: 'center'
        }}
      > 
        {letters.map((letter, index) => (
          <div key={index}
            style={{
              display: 'flex'
            }}
          >
            <div               
              style={{
                display: 'flex',
                height: '150px',
                width: '150px',
                justifyContent: 'center',
                alignItems: 'center',
                border: '1px solid #303030',
                borderRadius: '20px',
              }}
              className={'letterBox'}
            >
              <input
                data-testid = 'change-box'
                defaultValue={letter} 
                value={letter}
                onChange={(e) => handleChange(e.currentTarget.value, index)} 
                style={{
                  border: 'none',
                  width: '50px',
                  fontSize: '2rem',
                  margin: '0 auto',
                  textAlign: 'center',
                  cursor: 'pointer'
                }}
              />
            </div>
            { index !== letters.length - 1 && (
              <div
                data-testid='add-new-box'
                style={{
                  width: '20px',
                  cursor: 'pointer',
                  height: '150px'
                }}
                onClick={() => addChar(index)}
              >
              </div>
            )}
          </div>
        ))}
      </div>
      <p data-testid='string-output'>{`"${string}"`}</p>
    </>
  )
}

export default LinkedLetters;
