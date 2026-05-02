import styles from './Projetos.module.css'

const projetos = [
    {
        
    id: 1,
    nome: "CineApp",
    descricao: "App de filmes completo com filmes populares, busca e página de detalhes com sinopse, avaliação e duração. Desenvolvido com React, React Router e CSS Modules.",
    tecnologias: ["React", "React Router", "CSS Modules", "API REST"],
    github: "https://github.com/guilhermealmeidareact/cine-app",
    demo: "https://cine-app-navy.vercel.app"

    },
    
    {
    id: 2,
    nome: "DevQuiz",
    descricao: "Quiz interativo de desenvolvimento web com 10 perguntas, feedback visual de acerto/erro, perguntas e alternativas embaralhadas a cada jogo.",
    tecnologias: ["React", "CSS Modules", "JavaScript"],
    github: "https://github.com/guilhermealmeidareact/devquiz",
    demo: "https://devquiz-nu.vercel.app"
    },

    {
    id: 3,
    nome: "Dashboard Financeiro",
    descricao: "Dashboard de finanças pessoais com cards de resumo, gráfico de barras, gráfico de pizza por categoria e lista de transações recentes.",
    tecnologias: ["React", "Recharts", "CSS Modules"],
    github: "https://github.com/guilhermealmeidareact/dashboard",
    demo: "https://dashboard-seven-flax-46.vercel.app"
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