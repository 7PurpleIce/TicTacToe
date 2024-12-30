import styles from './field.module.css'
import PropTypes from 'prop-types'; 
const FieldLayout = ({field, onCellClick}) => {
    return(
        <div className={styles.field}>
            {field.map((cell, index)=> (
                <button key={index} className={styles.cell} onClick={() => onCellClick(index)}>{cell}</button>
            ))}
        </div>
    )
}

export const Field = ({field, onCellClick}) => {
    
    return (
        <FieldLayout field={field} onCellClick={onCellClick}/>
    )
}


Field.propTypes = {
    field: PropTypes.arrayOf(PropTypes.string), // Массив строк
    onCellClick: PropTypes.func             // Функция для обработки кликов
};

FieldLayout.propTypes = {
    field: PropTypes.arrayOf(PropTypes.string),
    onCellClick: PropTypes.func
};