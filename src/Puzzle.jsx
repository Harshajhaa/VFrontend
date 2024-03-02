import './Puzzle.css';
import Timer from './components/Timer.jsx';
import Board from './components/board/Board.jsx'

const Puzzle = ({level,setLevel}) => {
    return(
        <>
    <Timer level={level} setLevel={setLevel}></Timer>
    <div className="App"><Board/></div>
    </>
    )
    
}


export default Puzzle;
