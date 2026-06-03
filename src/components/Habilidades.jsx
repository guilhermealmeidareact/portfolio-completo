import styles from './Habilidades.module.css'

const habilidades = [
    { nome: "HTML", nivel: 85 },
    { nome: "CSS", nivel: 85 },
    { nome: "JavaScript", nivel: 75 },
    { nome: "React", nivel: 65 },
    { nome: "Git & GitHub", nivel: 70 },
    { nome: "Flexbox & Grid", nivel: 85 },
    { nome: "API REST", nivel: 70 },
    { nome: "Responsividade", nivel: 80 },
    {nome: "PHP", nivel: 65 },
    {nome: "MySQL", nivel: 60 }
]

function Habilidades() {
    return (
        <section id="habilidades" className={styles.habilidades}>
            <div className={styles.container}>
                <h2 className={styles.titulo}>Habilidades</h2>
                <div className={styles.grid}>
                    {habilidades.map(h => (
                        <div key={h.nome} className={styles.card}>
                            <div className={styles.topo}>
                                <span className={styles.nome}>{h.nome}</span>
                                <span className={styles.nivel}>{h.nivel}%</span>
                            </div>
                            <div className={styles.barra}>
                                <div
                                    className={styles.progresso}
                                    style={{ width: `${h.nivel}%` }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Habilidades;