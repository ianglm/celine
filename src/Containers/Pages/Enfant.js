import React from "react";
import "./Pages.css";
import "../../index.css";
import { Link } from "react-router-dom";
import psyEnfant1 from '../../assets/medical-1.jpg'
import psyEnfant2 from '../../assets/medical4.jpg'
import Tel from "../../Components/Tel/Tel";


export default function Enfant() {


    return (
        <div>
            <section class="page">
                <div class="container">
                    <div class="title">
                        <h1>Psychologue pour enfant à Antony près de Massy</h1>
                        <div className="sub-title">
                            <p class="intro">
                                Une thérapie réalisée pendant l’enfance peut avoir de nombreux
                                bénéficies sur le développement psychologique de l’enfant, surtout
                                s’il montre des signes d’anxiété dès le plus jeune âge. En tant que
                                <Link to="/">
                                    <strong> pédopsychologue à Antony</strong>
                                </Link>
                                , situé près de Massy, je me tiens à votre
                                disposition pour soutenir votre enfant durant cette phase complexe.
                                Contactez mon cabinet pour organiser une rencontre.
                            </p>
                        </div>
                    </div>

                    <div class="double-colonne">
                        <div class="text">
                            <h2>Gérer anxiété, insomnies, irritabilité chez l’enfant</h2>
                            <p>
                                En difficulté scolaire,  <strong>souffrant de troubles de sommeil</strong>
                                , <strong>anxieux</strong>, il doit chaque jour faire face à des problématiques que vous êtes
                                incapable d’identifier ou de régler ? Je suis là pour vous
                                soutenir dans votre rôle de parent. La prise en charge que je
                                propose s'adresse aux enfants en âge scolaire (à partir de 6 ans).
                                Il s’agira pour moi de déterminer ce qui bloque votre enfant en
                                vue de dénouer ces liens qui l’empêchent d’avancer ou de jouir
                                pleinement de sa jeunesse. tensions dans le foyer, difficultés
                                d'intégration à l'école, précocité, retard dans les
                                apprentissages, agitation : <strong>une observation psychologique</strong> sera
                                indispensable pour déceler ce qui pose problème.
                            </p>
                            <p>
                                On l’oublie parfois, mais la <strong>psychologie</strong> peut également montrer
                                ses bienfaits chez les enfants victimes de <strong>terreurs nocturnes</strong> ou
                                d’<strong>énurésie nocturne</strong> (pipi au lit). Ces manifestations sont souvent
                                le signe d’un mal-être. A moi donc de le détecter et de trouver
                                les moyens de le résoudre durablement. Mais parce que ce travail
                                ne peut pas toujours se construire seul, comptez sur moi pour vous
                                transmettre mes observations et quelques recommandations que vous
                                pourrez, par exemple, mettre en place à la maison.
                            </p>
                        </div>
                        <div class="first image">
                            <img
                                src={psyEnfant1}
                                alt="bilan psychologique pour enfant"
                            />
                        </div>
                    </div>
                    <Tel />
                    <div class="double-colonne">
                        <div class="second image">
                            <img
                                title="bilan psychologique pour enfant"
                                src={psyEnfant2}
                                alt="bilan psychologique pour enfant"
                            />

                        </div>
                        <div class="text second">
                            <h2>Trouver la thérapie qui correspond à Massy</h2>
                            <p>
                                Parce que votre enfant est mineur, il est normal – et indispensable – que vous soyez présent lors des consultations. La première séance, d’ailleurs, sera réalisée avec vous. Seul ou en couple, vous serez amené à participer à ce rendez-vous dédié à la présentation de chacun et de vos attentes. Je réaliserai une <strong>observation psychologique de votre enfant</strong> via le jeu, le dessin, le langage et si nécessaire des tests psychotechniques que je choisirai au regard des circonstances. Les séances suivantes se dérouleront en individuel avec votre enfant. Nous pourrons ainsi apprendre à nous apprivoiser et discuter à cœur ouvert de ce qui le gêne, l’angoisse, etc. Néanmoins, un débriefing aura lieu de façon régulière afin de définir notre projet commun, les prochaines rencontres, etc. Selon les besoins, nous pourrons convenir de séances mensuelles ou d’une thérapie hebdomadaire.
                            </p>
                            <p>
                                En fonction des situations, il peut m’arriver de me mettre en contact avec l’école de l’enfant en vue d’obtenir davantage de renseignements sur mon patient mais aussi pour travailler en lien avec l'équipe pédagogique à l’amélioration de l’<strong>état psychologique</strong> de ce dernier.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
