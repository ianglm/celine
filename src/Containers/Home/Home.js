import React from "react";
import "./Home.css";
import "../Pages/Pages.css";
import "../../index.css";
import Navbar from "../../Components/Navbar/Navbar";
import Competences from "../../Components/Competences/Competences";
import Info from "../../Components/Paiement/Info";
import { Link } from "react-router-dom";
import Cabinet1 from "../../assets/cabinet1.jpg";
import Cabinet2 from "../../assets/cabinet2.jpg";
import Profile from "../../assets/profile.jpg";
import Tel from "../../Components/Tel/Tel";

export default function Home() {
  return (
    <div>
      <Navbar />

      <section class="page">
        <div class="container">
          <div class="title">
            <h1>Psychologue à Antony</h1>
            <h3>Céline Brocheray</h3>
            <div className="sub-title">
              <p class="intro">
                Avancer, se libérer des traumas, gérer ses angoisses : pas
                facile d’y parvenir par soi-même. En tant que
                <strong> psychologue à Antony </strong>
                (proche de Massy), je mets mon savoir-faire à profit en vue
                d’accompagner enfants, adolescents et adultes dans la recherche
                de solutions durables. A l’écoute des besoins et accordant une
                réelle importance à la liberté de parole, je suis là pour
                identifier les blocages qui vous paralysent et les faire
                disparaître. Contactez mon cabinet pour organiser un rendez-vous
                que vous soyez à Wissous ou encore Massy.
              </p>
            </div>
          </div>

          <div class="double-colonne">
            <div class="home text">
              <h2>Psychologue spécialisée dans l'enfance et l'adolescence</h2>
              <p>
                Forte d’une solide expérience dans l’
                <Link to="enfant">
                  accompagnement psychologique d’enfants à Antony
                </Link>
                , je réponds aux besoins de parents qui s’inquiètent de l’
                <strong>anxiété</strong>, des{" "}
                <strong>troubles du comportement</strong> ou encore du sommeil
                perturbé de leur progéniture. Un entretien clinique sera mener
                afin de mieux comprendre le motif de consultation. Quelle que
                soit la situation rencontrée, je veillerai à définir des actions
                adaptées qui mèneront votre enfant vers un épanouissement
                psycho-affectif.
              </p>
              <p>
                Mon intervention s’étend également au suivi d’adolescents
                rencontrant des difficultés scolaires, des{" "}
                <strong>tensions familiales</strong> ou des{" "}
                <strong>idées suicidaires</strong>. A ce titre, je leur offre
                mon appui pour affronter cette période complexe qu’est
                l’adolescence et leur donner les clés pour entrer dans la vie
                d’adulte avec davantage de sérénité.
              </p>
            </div>
            <div class="home first image">
              <img src={Profile} alt="bilan psychologique pour enfant" />
            </div>
          </div>
          <Info />
          <div class="double-colonne">
            <div class="second image">
              <img
                title="bilan psychologique pour enfant"
                src={Cabinet2}
                alt="bilan psychologique pour enfant"
              />
            </div>
            <div class="text second">
              <h2>Déroulement de séance par Mme Guiot à Antony</h2>
              <p>
                Chaque première séance débute par un état des lieux de la
                situation. Chez l’enfant, je réalise un
                <strong> bilan psychologique</strong> ou
                <strong> neuropsychologique</strong>, par le biais de différents
                tests choisis en fonction des circonstances. Tests d’efficience
                intellectuelle, test d’attention, tests de personnalité : je
                détermine les examens à réaliser au regard des besoins de votre
                enfant.
              </p>
              <p>
                Lors de la consultation, j’accorde aussi un temps à l’anamnèse.
                Cela consiste en un rapide interrogatoire visant à découvrir de
                possibles antécédents familiaux, médicaux… mais aussi
                d’identifier si des traumatismes ont pu survenir récemment.
                Plusieurs rendez-vous seront ensuite nécessaires pour discuter
                ensemble de la situation et vous aider à avancer efficacement
                vers la voie de la libération. Quelles que soient les
                circonstances, comptez sur moi pour vous accompagner au mieux, à
                Antony ou à Massy.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Tel />

      <div className="lid-btn">
        <Link to="/actualites">
          Voir les actualités
        </Link>
      </div>

      <Competences />

      <Link to="/enfant">Page Enfant</Link>
      <Link to="/cabinet">Presentation Cabinet</Link>
    </div>
  );
}
