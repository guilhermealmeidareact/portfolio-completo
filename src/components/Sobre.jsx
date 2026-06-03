import styles from './Sobre.module.css'

function Sobre() {
    return (
        <section id="sobre" className={styles.sobre}>
            <div className={styles.conteudo}>
                <div className={styles.texto}>
                    <h2 className={styles.titulo}>Sobre mim</h2>
                    <p>
                        Olá! Sou Guilherme, desenvolvedor web em formação, natural de São Paulo.
                        Estou em transição de carreira e apaixonado por tecnologia e pela arte de transformar ideias em código.
                    </p>
                    <p>
                       Estudo desenvolvimento web com foco em HTML, CSS, JavaScript, React e PHP.
                       Cada projeto é uma oportunidade de aprender algo novo e evoluir como desenvolvedor.
                    </p>
                    <p>
                        Sou movido por desafios e pela busca constante de evolução — 
                        cada linha de código é uma oportunidade de ser melhor do que ontem.
                    </p>
                </div>
                <div className={styles.imageBox}>
                    <div className={styles.placeholder}>GA</div>
                </div>
            </div>
        </section>
    )
}

export default Sobre;