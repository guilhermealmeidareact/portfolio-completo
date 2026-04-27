import styles from './Projetos.module.css'

const projetos = [
    {
        
    id: 1,
    nome: "CineApp",
    descricao: "App de filmes completo com filmes populares, busca e página de detalhes com sinopse, avaliação e duração. Desenvolvido com React, React Router e CSS Modules.",
    tecnologias: ["React", "React Router", "CSS Modules", "API REST"],
    github: "https://github.com/guilhermealmeidareact/cine-app",
    demo: null

    },
]

function Projetos() {
    return (
        <section id="projetos" className={styles.projetos}>
            <div className={styles.container}>
                <h2 className={styles.titulo}>Projetos</h2>
                <div className={styles.grid}>
                    {projetos.map(projeto => (
                        <div key={projeto.id} className={styles.card}>
                            <div className={styles.cardTopo}>
                                <h3 className={styles.nome}>{projeto.nome}</h3>
                                <p className={styles.descricao}>{projeto.descricao}</p>
                            </div>
                            <div className={styles.cardBase}>
                                <div className={styles.tags}>
                                    {projeto.tecnologias.map(tech => (
                                        <span key={tech} className={styles.tag}>{tech}</span>
                                    ))}
                                </div>
                                <div className={styles.links}>
                                    <a href={projeto.github} target="_blank" className={styles.link}>
                                        GitHub
                                    </a>
                                    {projeto.demo && (
                                        <a href={projeto.demo} target="_blank" className={styles.linkDemo}>
                                            Demo
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projetos;