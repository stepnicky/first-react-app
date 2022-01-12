import styles from './TextInput.module.scss';

const TextInput = (props) => {
    return  <input placeholder={props.placeholder} className={styles.input} type="text" />
};

export default TextInput;