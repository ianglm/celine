import React from "react";
import Paiement1 from "../../assets/cheque.png";
import Paiement2 from "../../assets/cb.png";
import Paiement3 from "../../assets/espece.png";
import "./Info.css";

export default function Info() {
  return (
    <div>
      <div className="info-container">
        <div className="info-horaires">
          <h4>Horaires du cabinet</h4>
          <p>
            <strong>Du lundi au vendredi</strong> <br />
            de 09h00 à 13h00 et de 14h00 à 19h00
          </p>
        </div>
        <div className="info-paiement">
          <h4>Moyens de paiements acceptés :</h4>
          <ul>
            <li>
              <div>
                <img src={Paiement1} alt="" />
              </div>
              <p>Chèques</p>
            </li>
            <li>
              <div>
                <img src={Paiement2} alt="" />
              </div>
              <p>Carte bleue</p>
            </li>
            <li>
              <div>
                <img src={Paiement3} alt="" />
              </div>
              <p>Espèces</p>
            </li>
          </ul>
        </div>
        <div className="info-mutuelle">
          <p>
            Certaines mutuelles proposent le remboursement, Vérifier votre
            contrat auprès de votre mutuelle
          </p>
        </div>
      </div>
    </div>
  );
}
