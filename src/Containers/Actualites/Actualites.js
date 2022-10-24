import React from "react";
import Card from "../../Components/Card/Card";
import "./Actualites.css";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";
import Actu1 from "../../assets/actuImg1.jpg";
import Actu2 from "../../assets/actuImg2.jpg";

const dummyData = [
  {
    id: 1,
    title: "Qu'est-ce que la dépression et quels sont ses symptômes? Quand dois-je consulter?",
    bodyTitle1: "Comment savoir si l'on fait une dépression ?",
    bodyTitle2: "Voici les symptômes psychiques de la dépression les plus fréquents :",
    bodyTitle3: "Est-ce que la dépression se guérit ?",
    bodyContent1: "La dépression est une modification profonde de l'humeur dans le sens de la tristesse et de la souffrance morale. Elle peut s'accompagner d'un ralentissement psychomoteur et/ou d'anxiété. La dépression entretient chez le patient une impression douloureuse d'impuissance globale.",
    bodyContent2: "Les principaux symptômes sont de l'anxiété, des troubles du sommeil (insomnie d'endormissement ou matinale), perte d'appétit, rumination, idées négatives, faible estime de soi, ralentissement intellectuel.",
    bodyContent3: "La psychothérapie a pour objectif de permettre au patient de prendre conscience des mécanismes psychiques qui sont à l'origine de cette souffrance mentale. Elle peut être complémentaire à un traitement médicamenteux.",
    date: "Le 22 avril 2022",
    image: Actu1,
  },
  {
    id: 2,
    title: "Qu'est-ce que le suivi psychologique d'orientation analytique?",
    bodyTitle1: "Le suivi psychologique basé sur la psychanalyse:",
    bodyTitle2: "Le travail de consultation vise à soutenir et aider le patient à développer ses ressources internes afin de résoudre une problématique ponctuelle.",
    bodyTitle3: "",
    bodyContent1: "Le psychologue d'orientation analytique cherche par le biais de la parole et du langage infra-verbal à mettre en évidence la signification inconsciente des paroles, des actions et des productions imaginaires du patient. Durant le premier rendez-vous, le psychologue cherche à comprendre la demande du patient (et de sa famille s'il s'agit d'un enfant) et de se représenter son environnement, ainsi que son fonctionnement psychique. Ce travail préliminaire peut s'étaler sur plusieurs séances afin de définir au mieux le projet thérapeutique (consultations ponctuelles ou thérapie, fréquence des rendez-vous).",
    bodyContent2: "Le travail de thérapie est un travail plus en profondeur sur la personnalité du patient et ses mécanismes d'adaptation à la réalité, afin de l'aider au mieux à trouver un nouvel équilibre psychique, plus épanouissant.",
    bodyContent3: "",
    date: "Le 22 avril 2022",
    image: Actu2,
  },
  {
    id: 3,
    title: "Nouveaux horaires d'ouverture du cabinet de votre psychologue à Antony",
    bodyTitle1: "Le suivi psychologique basé sur la psychanalyse:",
    bodyTitle2: "Le travail de consultation vise à soutenir et aider le patient à développer ses ressources internes afin de résoudre une problématique ponctuelle.",
    bodyTitle3: "",
    bodyContent1: "Le psychologue d'orientation analytique cherche par le biais de la parole et du langage infra-verbal à mettre en évidence la signification inconsciente des paroles, des actions et des productions imaginaires du patient. Durant le premier rendez-vous, le psychologue cherche à comprendre la demande du patient (et de sa famille s'il s'agit d'un enfant) et de se représenter son environnement, ainsi que son fonctionnement psychique. Ce travail préliminaire peut s'étaler sur plusieurs séances afin de définir au mieux le projet thérapeutique (consultations ponctuelles ou thérapie, fréquence des rendez-vous).",
    bodyContent2: "Le travail de thérapie est un travail plus en profondeur sur la personnalité du patient et ses mécanismes d'adaptation à la réalité, afin de l'aider au mieux à trouver un nouvel équilibre psychique, plus épanouissant.",
    bodyContent3: "",
    date: "Le 22 avril 2022",
  },
  {
    id: 4,
    title: "Dépression chez l'adolescent suite au confinement par votre psychologue à Antony",
    bodyTitle1: "Le suivi psychologique basé sur la psychanalyse:",
    bodyTitle2: "Le travail de consultation vise à soutenir et aider le patient à développer ses ressources internes afin de résoudre une problématique ponctuelle.",
    bodyTitle3: "",
    bodyContent1: "Le psychologue d'orientation analytique cherche par le biais de la parole et du langage infra-verbal à mettre en évidence la signification inconsciente des paroles, des actions et des productions imaginaires du patient. Durant le premier rendez-vous, le psychologue cherche à comprendre la demande du patient (et de sa famille s'il s'agit d'un enfant) et de se représenter son environnement, ainsi que son fonctionnement psychique. Ce travail préliminaire peut s'étaler sur plusieurs séances afin de définir au mieux le projet thérapeutique (consultations ponctuelles ou thérapie, fréquence des rendez-vous).",
    bodyContent2: "Le travail de thérapie est un travail plus en profondeur sur la personnalité du patient et ses mécanismes d'adaptation à la réalité, afin de l'aider au mieux à trouver un nouvel équilibre psychique, plus épanouissant.",
    bodyContent3: "",
    date: "Le 22 avril 2022",
  },
];



export default function Actualites() {
  return (
    <div>
      <h1 className="home-title">Actualités</h1>

      <div className="container-cards">
        {dummyData.map((item) => {
          return (
            <Card key={uuidv4()}>
              <div className="img">
                <img src={item.image} alt=""/>
              </div>
              <div className="content">
                <p>{item.date}</p>
                <h2>{item.title}</h2>
              </div>
              <div className="link">
                <Link
                  to={{
                    pathname: `articles/${item.title
                      .replace(/\s+/g, "-")
                      .trim()}`,
                  }}
                  state={{
                    title: item.title,
                    date: item.date,
                    image: item.image,
                    bodyTitle1: item.bodyTitle1,
                    bodyTitle2: item.bodyTitle2,
                    bodyTitle3: item.bodyTitle3,
                    bodyContent1: item.bodyContent1,
                    bodyContent2: item.bodyContent2,
                    bodyContent3: item.bodyContent3,
                  }}
                >
                  Voir cette actualité
                </Link>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
