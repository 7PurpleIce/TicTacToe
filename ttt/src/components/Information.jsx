import PropTypes from 'prop-types';
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

Information.propTypes = {
    isDraw: PropTypes.bool,          // Логическое значение: ничья
    isGameEnded: PropTypes.bool,     // Логическое значение: завершение игры
    currentPlayer: PropTypes.string, // Символ текущего игрока ('X' или 'O')
};

InformationLayout.propTypes = {
    isDraw: PropTypes.bool,
    isGameEnded: PropTypes.bool,
    currentPlayer: PropTypes.string,
};