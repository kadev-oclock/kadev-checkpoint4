import React from "react";

import "./Home.css";

export default function Home() {
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
          </div>
          <div className="p-3">
            <img src="./src/assets/perso2.jpg" alt="perso" />
          </div>
        </div>
      </section>
    </div>
  );
}
