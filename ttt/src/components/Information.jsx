import styles from './information.module.css'

const InformationLayout = ({ isDraw, isGameEnded, currentPlayer }) => {
    const turn = `Ходит: ${currentPlayer}`;
    const victory = `Победа: ${currentPlayer}`;
    return (
      <>
        {isDraw && <h3>Ничья</h3>}
        {!isDraw && isGameEnded && <div>{victory}</div>}
        {!isDraw && !isGameEnded && <div>{turn}</div>}
      </>
    );
};

export const Information = () => {

    return(
        <InformationLayout />
    )
}