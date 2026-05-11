import { Tornado } from 'lucide-react'
import styles from './Header.module.css'

function Header() {
    return (
        <header className={styles.header}>
            <span className={styles.logo}>
                <Tornado size={24} color="#3b82f6" />
                GA
            </span>
            <nav className={styles.nav}>
                <a href="#sobre">Sobre</a>
                <a href="#habilidades">Habilidades</a>
                <a href="#projetos">Projetos</a>
                <a href="#contato">Contato</a>
            </nav>
        </header>
    )
}

export default Header;