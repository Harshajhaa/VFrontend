import React from 'react'
import { useState } from 'react'
import MemoGame from './MemoGame';
import Puzzle from './Puzzle';
import Instruction from './components/Instruction';
import Finish from './components/Finish';
import Scramble from './Scramble';


function Game() {
 
  const [level, setLevel] = useState(0);

  if (level%2 == 0){
    return (
    <>
      <Instruction level={level} setLevel={setLevel}></Instruction>
    </>
    )
  }
  else if(level == 1){
    return(
      <>
        <MemoGame level={level} setLevel={setLevel}></MemoGame>
      </>
    )
  }
  else if(level == 3){
    return(
      <Puzzle level={level} setLevel={setLevel}></Puzzle>
    )
  }
  else if(level == 5){
    return(
      <Scramble level={level} setLevel={setLevel}></Scramble>
    )
  }
  else if(level == 7){
    return(
      <Finish></Finish>
    )
  }
    

  return (
    <>
      <div>Instruction</div>
      <button onClick={handleGame}>start Level 1</button>

    </>

  )
}

export default Game