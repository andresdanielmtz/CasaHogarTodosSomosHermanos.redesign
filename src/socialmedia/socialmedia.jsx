import "./socialmedia.css";
import SocialMediaImages from "./socialimages/socialimages";

function SocialMedia() {
  return (
    <>
      <div className="socialMedia">
        <h3 className="socialMedia-title">Redes sociales</h3>
        <h4 className="socialMedia-subtitle">Buscanos como...</h4>
        <SocialMediaImages x = "this"/>
      </div>
    </>
  );
}

export default SocialMedia;
