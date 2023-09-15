import styles from "./About.module.scss";

const About = () => {
  return (
    <div className="d-flex h-100 text-center text-white bg-dark">
      <div className={`${styles.coverContainer} d-flex w-100 h-100 p-3 mx-auto flex-column`}>
        <main className="px-3">
          <h1>Rick & Morty API.</h1>
          <p className="lead">
            Este proyecto esta basado en la API de la popular serie Rick & Morty y consiste en un desarrollo sobre React.js
            para consumir dicha API y hacer algunas interacciones por ejemplo la búsqueda de algunos personajes, 
            paginar los resultados de la busqueda o simplemente paginar los datos por default, además podremos acceder a cada uno de los personajes
            y conocer su ficha bibliográfica.
          </p>
          <p className="lead">
            <a href="https://rickandmortyapi.com/documentation/#rest" target="_blank" rel="noreferrer" className={`${styles.btnsecondary} btn btn-lg fw-bold border-white bg-white`}>Api Documentation</a>
          </p>
        </main>

        <footer className="mt-auto text-white-50">
          <p>Sigueme en mi perfil de github: <a href="https://github.com/Benji-Mtz" target="_blank" rel="noreferrer" className="text-white">github.com/Benji-Mtz</a>,<br />O contactame al email: <span className="text-white">benjim.flores@outlook.com</span>.</p>
        </footer>
      </div>
    </div>
  )
}

export default About