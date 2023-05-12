import "./HowToHelp.css";
import Children from "../assets/children.png";
import facebook from "../assets/facebook.png";
function HowToHelp() {
  return (
    <>
      <div className="HowToHelp">
        <h3 className="HowToHelp-title">¿Cómo puedo ayudar?</h3>
        <img id = "how-Children" src={Children} alt="children" />
        <i>Existen varias maneras en las que puedes ayudar:</i>
        <ul>
          <li>Ofrecer tu tiempo como voluntario en la casa hogar.</li>
          <li>Compartir tus habilidades o conocimientos con los residentes.</li>
          <li>Ofrecer tu experiencia en alguna área en particular.</li>
          <li>
            Aportar con productos que puedan ser de utilidad para la casa hogar.
          </li>
          <li>
            Promocionar Casa Hogar Todos Somos Hermanos entre tus amigos y
            familiares.
          </li>
        </ul>
        Para más información, comunicate a través de nuestra página de Facebook
        o Instagram.
        <div id="smallFacebook">
          <a href="https://www.facebook.com/CasaHogarTodosSomosHermanos/?locale=es_LA" target = '_blank'>
            <img id = "smallFacebook" src={facebook} alt="facebook" />
          </a>
        </div>
      </div>
    </>
  );
}

export default HowToHelp;
