import React from "react";
import Medical1 from "../../assets/medical-1.jpg"
import Medical2 from "../../assets/medical4.jpg"
import Medical3 from "../../assets/medical5.jpg"
import "./Competences.css"
import Navbar from "../Navbar/Navbar";

export default function Competences() {
  return (
    <div>
      <div class="competences">
        <div class="intro_competences">
          <p>Votre Psychologue met à votre service ses compétences</p>
        </div>
        <div class="container-competences">
          <a href="#" class="link-competences" id="encart1">
            <img src={Medical1} alt="psychologue pour enfant" />
            <div class="mask-img">
              <p class="titre-competences">Psychologue pour enfant</p>
            </div>
          </a>

          <a href="#" class="link-competences" id="encart2">
            <img src={Medical2} alt="pyshcologue pour adolescent" />
            <div class="mask-img">
              <p class="titre-competences">Psychologue pour adolescent</p>
            </div>
          </a>

          <a href="#" class="link-competences" id="encart3">
            <img src={Medical3} alt="psyhcologue adultes" />
            <div class="mask-img">
              <p class="titre-competences">Psychologue pour Adulte</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
