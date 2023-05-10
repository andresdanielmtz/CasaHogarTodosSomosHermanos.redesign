import './HowToHelp.css'
import Children from '../assets/children.png'
function HowToHelp() {
  return (
    <>
      <div className="HowToHelp">
        <h3 className="HowToHelp-title">¿Cómo puedo ayudar?</h3>
        <img src = {Children} alt = "children"/>
        <p> Existen varias maneras en las que puedes ayudar. </p>


      </div>
    </>
  );
}

export default HowToHelp;
