import styles from './Contato.module.css'

function Contato() {
    return (
        <section id="contato" className={styles.contato}>
            <div className={styles.container}>
                <h2 className={styles.titulo}>Contato</h2>
                <p className={styles.subtitulo}>
                    Estou disponível para oportunidades de emprego e freelas.
                    Vamos conversar?
                </p>
                <div className={styles.links}>
                    <a href="mailto:guilhermealmeida.react@gmail.com" className={styles.linkPrimario}>
                        guilhermealmeida.react@gmail.com
                    </a>
                    <div className={styles.sociais}>
                        <a href="https://github.com/guilhermealmeidareact" target="_blank" className={styles.social}>
                            GitHub
                        </a>
                        <a href="https://www.linkedin.com/in/guilherme-almeida-64379a405" target="_blank" className={styles.social}>
                            LinkedIn
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contato;