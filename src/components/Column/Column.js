import styles from './Column.module.scss';

const Column = (props) => {
    return (
        <article className={styles.column}>
            <h4 className={styles.title}><span className={styles.icon + ' fa fa-' + props.icon}></span>{props.title}</h4>
        </article>
    );
};

export default Column;