import React from "react";
import Cycle from "../../../Images/cycleportage.png";
import ButtonForm from "../home/ButtonForm";

//simulateur
//fonctionnement du portage salariale
//modèle du portage

const Documentation = () => {
  return (
    <div>
      <div className="has-text-centered">
        <h1 class="title is-3">Portage salarial</h1>
      </div>
      <br />
      <br />

      <div className="has-text-centered">
        <h3 class="subtitle is-3">C'est quoi ?</h3>
      </div>
      <br />
      <br />
      <article className="container is-fluid">
        <div className="notification">
          <p>
            Le principe du portage salarial est le suivant : un cadre, le «
            salarié porté » négocie une mission auprès d’une entreprise qui a un
            besoin de prestation intellectuelle externe. Lorsqu’un accord est
            intervenu entre ces deux parties, le cadre sollicite les services
            d’une société de portage, afin que celle-ci prenne à sa charge
            l’ensemble des démarches commerciales, l’ensemble des démarches
            sociales lié à son contrat de travail, et lui garantissant par là
            même le statut protecteur de salarié.
          </p>
        </div>
        <br />
      </article>

      <div className="columns">
        <div className="column is-three-fifths is-offset-one-fifth">
          <img src={Cycle} alt="" />
        </div>
      </div>
      <br />

      <div className="has-text-centered">
        <h3 class="subtitle is-3"> Pour qui ?</h3>
      </div>
      <br />
      <br />
      <article className="container is-fluid">
        <div className="notification">
          <p>
            Toute personne qui justifie de l'expertise, de la qualification et
            de l'autonomie lui permettant de rechercher ses clients peut être un
            salarié porté.
          </p>
          <p></p>
        </div>
        <br />
      </article>
      <div className="has-text-centered">
        <h3 class="subtitle is-3"> Avantages ?</h3>
      </div>
      <br />
      <br />

      <article className="container is-fluid">
        <table class="table">
          <thead>
            <tr>
              <th>
                <abbr title="Position"></abbr>
              </th>
              <th>Avantages</th>
              <th></th>
            </tr>
          </thead>
          <tfoot>
            <tr>
              <th></th>
              <th></th>
              <th></th>
            </tr>
          </tfoot>
          <tbody>
            <tr>
              <th>1</th>
              <td className="has-text-info">
                <p>Gain de temps</p>
              </td>
              <td>
                Prise en charge des parties comptables, juridiques et
                administratives de l’activité du salarié porté par sa société de
                portage salarial
              </td>
            </tr>
            <tr>
              <th>2</th>
              <td className="has-text-info">
                <p>Liberté</p>
              </td>
              <td>
                Le salarié porté profite de la même liberté que celle d’un
                travailleur indépendant. Il n’a pas de relation hiérarchique
                avec ses clients, négocie ses honoraires directement avec eux et
                choisit ses missions. Il gère son temps en autonomie.
              </td>
            </tr>
            <tr>
              <th>3</th>
              <td className="has-text-info">
                <p>Sécurité</p>
              </td>
              <td>
                Il bénéficie du statut de salarié et de tous ses avantages :
                régime général de la sécurité sociale, droit au chômage,
                cotisation retraite, mutuelle, prévoyance, etc.
              </td>
            </tr>
            <tr>
              <th>4</th>
              <td className="has-text-info">
                <p>Accompagnement</p>
              </td>
              <td>
                La société de portage salarial propose différentes solutions,
                notamment des aides dans différents domaines comme la mise en
                place de conseils de spécialistes, experts comptables, avocats,
                ect..
              </td>
            </tr>
            <tr>
              <th>5</th>
              <td className="has-text-info">
                <p>Optimisation financière</p>
              </td>
              <td>
                Le portage salarial permet de gérer son argent comme un
                véritable entrepreneur en profitant notamment de la gestion des
                frais qui sont remboursés sans charges. Accompagnement dans vos
                projets avec une aide à l'optimisation fiscale.
              </td>
            </tr>
          </tbody>
        </table>
        <br />
      </article>

      <div className="has-text-centered">
        <h3 className="subtitle is-3"> Comment cela fonctionne ?</h3>
      </div>
      <br />
      <br />
      <section className="section">
        <div className="container">
          <h2 className="subtitle ">
            <strong className="has-text-info">
              . La facturation en portage salarial :
            </strong>
            <p></p>
            <br />
            <p className="section-padding-large">
              {" "}
              L’entreprise de portage salarial facture à l’entreprise cliente
              les honoraires qui ont été convenus avec le salarié lors de la
              signature du contrat commercial de prestation de portage salarial.
              Ces honoraires sont ensuite reversés au salarié porté sur demande
              de versement sous forme de salaire (et / ou gestion des frais
              professionnels). Tout l’administratif est géré par la société de
              portage.
            </p>
          </h2>
          <h2 className="subtitle ">
            <strong className="has-text-info">
              . Portage salarial et chômage :
            </strong>
            <p></p>
            <br />
            Le salarié porté peut continuer à percevoir ses indemnités chômage
            (ARE) car son contrat de travail est à temps partiel. La seule
            condition est que le montant du total « salaire + allocations » pour
            un mois donné ne dépasse pas le montant du salaire initial perdu.
            Cette règle donne donc la possibilité de cumuler salaire et
            allocations : Pour pouvoir cumuler son salaire en portage et ses
            allocations, le calcul est disponible sur le site de l’Unedic Le
            cumul est possible jusqu’à épuisement des droits. De nouveaux droits
            sont reconstitués après chaque mois d’activité en portage salarial.
          </h2>
        </div>
      </section>
      <div className="has-text-centered">
      <ButtonForm/>
      </div>
      <br />
    </div>
  );
};

export default Documentation;
