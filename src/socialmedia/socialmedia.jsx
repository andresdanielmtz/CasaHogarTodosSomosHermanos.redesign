import "./socialmedia.css";
import SocialMediaImages from "./socialimages/socialimages";
import instagram from "../../src/assets/instagram.png";
import facebook from "../../src/assets/facebook.png";

function SocialMedia() {
  return (
    <>
      <div className="socialMedia">
        <h3 className="socialMedia-title">Redes sociales</h3>
        <h4 className="socialMedia-subtitle">Buscanos como...</h4>
        <div className="socialMedia-div">
          <SocialMediaImages link = "" description="instagram" imgDir={instagram} />
          <SocialMediaImages link = "https://www.facebook.com/CasaHogarTodosSomosHermanos/?locale=es_LA" description="facebook" imgDir={facebook} />
        </div>
      </div>
    </>
  );
}

export default SocialMedia;
