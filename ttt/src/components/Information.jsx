const InformationLayout = ({isDraw, isGameEnded, currentPlayer}) => {
    // isDraw ? "Ничья" : isGameEnded ? <h3>Победа за {currentPlayer}</h3> : <h3> Ходит {currentPlayer}</h3>
   return(
        <div>
            {isDraw && <h3>Ничья</h3>}
            {!isDraw && isGameEnded && <h3>Победа за {currentPlayer}</h3>}
            {!isDraw && !isGameEnded && <h3>Ходит: {currentPlayer}</h3>}
        </div>
   )
};

export const Information = ({isDraw, isGameEnded, currentPlayer}) => {

    return(
        <InformationLayout isDraw={isDraw} isGameEnded={isGameEnded} currentPlayer={currentPlayer}/>
    )
}