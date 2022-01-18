import styles from './TextInput.module.scss';

const TextInput = (props) => {
    return  <input placeholder={props.placeholder} value={props.value} onChange={props.onChange} className={styles.input} type="text" />
};

export default TextInput;