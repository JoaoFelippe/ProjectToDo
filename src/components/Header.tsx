import LogoToDo from '../assets/LogoToDo.svg';
import styles from './Header.module.css'

export function Header(){
    return (
        <header className={styles.header}>
            <img src={LogoToDo} alt='Logo do ToDo'/>
        </header>
    )
}