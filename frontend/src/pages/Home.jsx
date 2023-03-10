import { useEffect, useState } from "react";
import Card from "@components/Card";
import apiConnexion from "@services/apiConnexion";

import "./Home.css";

function Home() {
  const [randomData, setRandomData] = useState([]);

  useEffect(() => {
    apiConnexion
      .get(`/vinyles/rand`)

      .then((data) => setRandomData(data.data))

      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <header className="bg-head  d-flex flex-column justify-content-center">
        <div className="left ">
          <h1 className="gradient-text ">
            TR
            <span className="icon" />C
          </h1>
          <h2 className="gradient-text mt-1">VINYLE</h2>
          <div className="cta">
            <div className="btn btn-outline color-gradient text-white ">
              Troc Now
            </div>
          </div>
        </div>
      </header>
      <section>
        <h2 className="mt-2">Bienvenue sur TrocVinyle</h2>
        <div className="d-flex justify-content-center ">
          <div className="p-3 left-section">
            <p className="article-left">
              Rejoignez notre communauté de passionnés de vinyle pour échanger
              et découvrir de nouvelles perles musicales sur notre plateforme
              dédiée à l'échange de vinyles.
            </p>
            <p className="second-article">
              Le principe de troc de vinyles est un échange entre deux personnes
              dans lequel chacun donne un vinyle en échange d'un autre vinyle.
              L'échange se fait généralement en fonction de la qualité et de la
              rareté des disques.
            </p>
            <div className="cta">
              <div className="btn btn-outline color-gradient text-white ">
                Troc Now
              </div>
            </div>
          </div>
          <div className="p-3">
            <img src="./src/assets/perso2.jpg" alt="perso" />
          </div>
        </div>
        <div className="d-flex justify-content-center ">
          <div className="p-3">
            <img src="./src/assets/perso1.jpg" alt="perso" />
          </div>
          <div className="p-3 left-section">
            <p className="article-left text-justify">
              Cela signifie que les deux vinyles échangés doivent avoir une
              qualité similaire et une rareté équivalente.
            </p>
            <div>
              <p className="second-article text-justify">
                Le but de cet échange est de permettre à chacun d'acquérir des
                disques qu'ils souhaitent sans avoir à dépenser de l'argent.
                C'est un moyen de partager sa passion pour la musique et de
                découvrir de nouveaux artistes ou albums.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="section-title mb-4">Nos Top Vinyles</div>
        <div className="container d-flex justify-content-center ">
          {randomData.map((vinyles) => (
            <Card key={vinyles.id} vinyles={vinyles} />
          ))}
        </div>
      </section>
    </div>
  );
}
export default Home;
