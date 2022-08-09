import "./styles.css";

import ResultCard from "components/ResultCard";
import { useState } from "react";
import axios from "axios";
import CardLoader from "components/Loaders";

type FormData = {
  login: string;
  searched: boolean;
};

type Profile = {
  avatar_url: string;
  url: string;
  followers: string;
  location: string;
  name: string;
};

const GitSearch = () => {
  const [formData, setFormData] = useState<FormData>({
    login: "",
    searched: false,
  });
  const [profile, setProfile] = useState<Profile>();
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setIsLoading(true);
    axios
      .get(`https://api.github.com/users/${formData.login}`)
      .then((response) => {
        setProfile({ found: true, ...response.data });
        formData.searched = true;
      })
      .catch((error) => {
        setProfile(undefined);
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <>
      <div className="git-search-container">
        <h1>Encontre um perfil Github</h1>
        <div className="container search-container">
          <form onSubmit={handleSubmit}>
            <div className="form-container">
              <input
                type="text"
                name="login"
                value={formData.login}
                className="search-input"
                placeholder=" Usuário Github "
                onChange={handleChange}
              />
              <button type="submit" className="btn btn-primary search-button">
                Buscar
              </button>
            </div>
          </form>
        </div>
      </div>
      {isLoading ? (
        <CardLoader />
      ) : profile ? (
        <>
          <div className="main-result-container">
            <div className="search-result-container">
              <div className="result-container-avatar">
                <img src={profile.avatar_url} alt="Avatar" />
              </div>
              <div className="result-container-data">
                <h6>Informações</h6>
                <ResultCard title="Perfil:" description={profile.url} />
                <ResultCard
                  title="Seguidores:"
                  description={profile.followers}
                />
                <ResultCard
                  title="Localidade:"
                  description={profile.location}
                />
                <ResultCard title="Nome:" description={profile.name} />
              </div>
            </div>
          </div>
        </>
      ) : (
        formData.searched && (
          <div className="main-result-container">
            <div className="search-result-container">
              <div className="result-container-data">
                <h6>Perfil não localizado!</h6>
              </div>
            </div>
          </div>
        )
      )}
    </>
  );
};

export default GitSearch;
