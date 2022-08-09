import "./styles.css";

import ResultCard from "components/ResultCard";

const GitSearch = () => {
  return (
    <>
      <div className="git-search-container">
        <h1>Encontre um perfil Github</h1>
        <div className="container search-container">
          <form>
            <div className="form-container">
              <input
                type="text"
                className="search-input"
                placeholder=" Usuário Github "
                onChange={() => {}}
              />
              <button type="submit" className="btn btn-primary search-button">
                Buscar
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="main-result-container">
      <div className="search-result-container">
        <div className="result-container-avatar">
          <img
            src="https://avatars.githubusercontent.com/u/13897257?v=4"
            alt="Avatar"
          />
        </div>
        <div className="result-container-data">
          <h6>Informações</h6>
          <ResultCard
            title="Perfil:"
            description="https://api.github.com/users/acenelio"
          />
          <ResultCard title="Seguidores:" description="4379" />
          <ResultCard title="Localidade:" description="Uberlândia" />
          <ResultCard title="Nome:" description="Nelio Alves" />
        </div>
      </div>
      </div>
    </>
  );
};

export default GitSearch;
