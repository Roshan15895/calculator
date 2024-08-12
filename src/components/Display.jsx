import styles from './Display.module.css';

const Display = ({displayValue}) => {

  return <input className={styles.display} type="display" value={displayValue} readOnly />
}

export default Display;