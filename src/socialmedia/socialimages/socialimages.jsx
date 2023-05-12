import "./socialImages.css";
import insta from "../../assets/instagram.png";

const SocialImages = (props) => {
  return (
    <>
      <a href={props.link} target="_blank">
      <div className="socialImages">
        <img
          class="socialImages-Images"
          src={props.imgDir}
          alt={props.description}
        />
        
      </div>
      </a>
    </>

  );
};

export default SocialImages;
