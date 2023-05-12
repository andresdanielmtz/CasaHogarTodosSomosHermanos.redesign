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
          <li>Compartir tus habilidades o conocimientos con los niños.</li>
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
        o Instagram. <br />
        <b> Numero telefónico:</b> 662 210 64 32 <br/> 
        <b> Correo Electrónico: </b> todosomoshermanos@gmail.com <br/>
        <div id="smallFacebook"> { /* CasaHogarTodosSomosHermanos */ }
          <a href="http://m.me/CasaHogarTodosSomosHermanos" target = '_blank'>
            <img id = "smallFacebook" src={facebook} alt="facebook" />
          </a>
        </div>
      </div>
    </>
  );
}

export default HowToHelp;
