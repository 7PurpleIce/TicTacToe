import styles from './field.module.css'

const FieldLayout = ({field, onClick}) => {
    return(
    <div className={styles.field}>
        {field.map((cell, index) => (
            <button key={index} className={styles.cell}>
                {cell}
            </button>
        ))}
    </div>
    )
}

export const Field = ({field, onCellClick}) => {
    
    return (
        <FieldLayout field={field}/>
    )
}
