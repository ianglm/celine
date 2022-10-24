import React from "react";
import "./Pages.css";
import "../../index.css";
import { Link } from "react-router-dom";
import Cabinet1 from "../../assets/cabinet1.jpg";
import Cabinet2 from "../../assets/cabinet2.jpg";
import Tel from "../../Components/Tel/Tel";

export default function Cabinet() {
  return (
    <div>
      <section class="page">
        <div class="container">
          <div class="title">
            <h1>Cabinet de psychologie à Antony</h1>
            <div className="sub-title">
              <p class="intro">
                Vous ou votre enfant faites face à une période compliquée ?
                Subissez des troubles de sommeil ou de l’attention ? En tant que
                <Link to="/enfant">
                  <strong> psychologue pour enfant à Antony</strong>
                </Link>
                (proche de Massy), je peux intervenir pour vous soulager et
                trouver le moyen de remettre les choses en ordre. Contactez mon
                cabinet de façon à nous entretenir et à découvrir comment vous
                aider.
              </p>
            </div>
          </div>

          <div class="double-colonne">
            <div class="text">
              <h2>Qui suis-je ?</h2>
              <p>
                <strong>Psychologue clinicienne</strong> diplômée de l’Ecole de
                Psychologues praticiens et titulaire d’un diplôme universitaire
                en soins palliatifs de l’Institut Gustave ROUSSY, j’assure
                depuis 2016 des consultations personnalisées au sein de mon
                <strong> cabinet de psychologie à Antony</strong>. Forte de
                plusieurs expériences en cabinets et centres spécialisées, j’ai
                à cœur d’aider mes patients dans la compréhension et la
                libération de leurs blocages. C’est donc avec bienveillance que
                je vous accueille, sur rendez-vous, du lundi au vendredi pour
                évaluer votre demande qui nous permettra de déterminer les
                moyens de vous aider durablement.
              </p>
              <p>
                En tant que
                <strong>
                  {" "}
                  spécialiste du psychisme et du comportement humain
                </strong>
                , j’accorde une réelle attention aux souffrances de mes
                patients. Aussi,ai-je développé une réelle compétence dans
                l’accompagnement de jeunes enfants et d’adolescents
                d'adolescents au travers de mon expérience institutionnelle en
                <strong> pédopsychiatrie durant 11 ans</strong>. Mon rôle ?
                Concevoir et mettre en place des actions préventives et
                curatives – comme l’écoute et les conseils – qui les aideront à
                se développer sereinement. Envie d’en savoir plus ?
                Contactez-moi pour organiser une première rencontre. Bien que
                des téléconsultations soient possibles, je vous invite néanmoins
                à privilégier une première rencontre en présentiel.
              </p>
            </div>
            <div class="first image">
              <img src={Cabinet1} alt="bilan psychologique pour enfant" />
            </div>
          </div>
          <Tel />
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
    </div>
  );
}
