import styles from './Hero.module.css'

function Hero() {
    return (
        <section className={styles.hero}>
            <p className={styles.saudacao}>Olá, eu sou</p>
            <h1 className={styles.nome}>Guilherme Almeida</h1>
            <h2 className={styles.cargo}>Desenvolvedor Web</h2>
            <p className={styles.descricao}>
                Apaixonado por criar interfaces bonitas e funcionais. Focado em React, JavaScript e PHP.
            </p>
            <div className={styles.botoes}>
                <a href="#projetos" className={styles.btnPrimario}>Ver Projetos</a>
                <a href="#contato" className={styles.btnSecundario}>Contato</a>
            </div>
        </section>
    )
}

export default Hero;