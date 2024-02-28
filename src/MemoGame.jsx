import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './MemoGame.css'
import SingleCard from './components/SingleCard'
import Timer from './components/Timer'


const cardImages = [
  {"src" : "/img/helmet-1.png", matched: false},
  {"src" : "/img/potion-1.png", matched: false},
  {"src" : "/img/ring-1.png", matched: false},
  {"src" : "/img/scroll-1.png", matched: false},
  {"src" : "/img/shield-1.png", matched: false},
  {"src" : "/img/sword-1.png", matched: false}
]
function MemoGame() {

  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)
  const [choiceOne, setChoiceOne] = useState(null)
  const [choiceTwo, setChoiceTwo] = useState(null)
  const [disabled, setDisabled] = useState(false)
  const [memoScore, setMemoScore] = useState(0)

  const shuffleCards = ()=>{
    const shufledCards = [...cardImages, ...cardImages]
    .sort(()=> Math.random()-0.5)
    .map((card) => ({ ...card, id: Math.random() }))

    setChoiceOne(null)
    setChoiceTwo(null)
    setCards(shufledCards)
    setTurns(0)
  }

  const handleChoice = (card) =>{
     choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
  }

  useEffect(()=>{
    if(choiceOne && choiceTwo){
      setDisabled(true)
      if(choiceOne.src === choiceTwo.src){
        setCards(prev => {
          return prev.map((card) => {
            if(card.src === choiceOne.src){
                setMemoScore(memoScore+1)
              return {...card, matched: true}
            } else{
              return card
            }
          })
        })
        resetTurns()
      } else{
        
        setTimeout(() => resetTurns(), 1000)
      }
    }
  }, [choiceOne, choiceTwo])

  console.log(cards)

  const resetTurns = ()=>{
    setChoiceOne(null)
    setChoiceTwo(null)
    setTurns(prev => prev + 1)
    setDisabled(false)
  }

  useEffect(()=>{
    shuffleCards()
  },[])

  return (
    <div className='app'>
      
      {/* <button onClick={shuffleCards}>New Game</button> */}
         <Timer></Timer>
      <div className='card-grid'>
        {cards.map(card => (
          <SingleCard
          key={card.id}
          card={card}
          handleChoice={handleChoice}
          flipped={card === choiceOne || card === choiceTwo || card.matched}
          disabled={disabled}
          />
        ))}
      </div>
      <p>Score: {memoScore}</p>
    </div>
  )
}

export default MemoGame
