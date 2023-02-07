import { useEffect, useState } from "react";
import Card from "@components/Card";
import apiConnexion from "@services/apiConnexion";

import "./TrocMarket.css";

function TrocMarket() {
  const [trocData, setTrocData] = useState([]);

  useEffect(() => {
    apiConnexion
      .get(`/vinyles`)

      .then((data) => setTrocData(data.data))

      .catch((err) => console.error(err));
  }, []);
  return (
    <div>
      <section className="container-fluid">
        <h1 className="section-title">TrocMarket</h1>
        <div className="container-lg d-flex flex-wrap  justify-content-center ">
          {trocData.map((vinyles) => (
            <Card key={vinyles.id} vinyles={vinyles} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default TrocMarket;
