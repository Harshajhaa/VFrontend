import React from 'react'


function Instruction({level,setLevel}) {

const handleClick = ()=>{
    setLevel(level+1)
}

  return (
    <>
    <div>Instruction</div>
    <button onClick={handleClick}>start level:{level/2+1}</button>
    </>
    
  )
}

export default Instruction