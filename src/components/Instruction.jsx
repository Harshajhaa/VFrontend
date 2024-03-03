import React from 'react'
import '../App.css'


function Instruction({level,setLevel}) {

const gameplay=[<div>
  <p>Hello Astronaut, are you ready to clear this game to reach Mercury.So follow the instructions and start the game</p>
  <p>Instructions</p>
  <p>The goal of this game is to match pairs of identical cards.</p>
  <p>You'll be presented with a grid of face-down cards, and your task is to find all the matching pairs.</p>
  <p>Turn over two cards at a time by clicking on them.</p>
  <p>If the cards match (i.e., they have the same image), they form a pair, and you keep them face up.</p>
</div>,

<div>
  <p>Congratulations, You have reached Mercury</p>
  <p>To go to Venus, follow the instructions given below and start the game</p>
  <p>Instructions</p>
  <p>You’ll see a 4x4 grid with numbered tiles.</p>
  <p>Click on a tile adjacent to the empty space to slide it into the empty position</p>
  <p>The tiles are initially scrambled, and your task is to Arrange the numbered tiles in ascending order from 1 to 15.</p>
</div>,

<div>
<p>Congratulations, You have reached Venus</p>
  <p>To go to Earth, follow the instructions given below and start the game</p>
  <p>Instructions</p>
  <p>You’ll see a set of jumbled letters on the screen</p>
  <p>Your goal is to rearrange the scrambled letters to form valid words.</p>
  <p>The clock is ticking, so think fast!</p>
</div>


]
console.log()

const handleClick = ()=>{
    setLevel(level+1)
}

  return (
    <>
    <div className="login">
    <div>{gameplay[level/2]}</div>
    </div>
    <button onClick={handleClick} className='levelstart'>start level:{level/2+1}</button>
    </>
    
  )
}

export default Instruction