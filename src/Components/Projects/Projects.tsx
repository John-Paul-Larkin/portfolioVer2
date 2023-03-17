import YouTube from "react-youtube";
import floorPlan from "../../Assets/Images/FloorPlan.jpg";
import kitchenDisplay from "../../Assets/Images/KitchenDisplay.jpg";
import posImage from "../../Assets/Images/KitchenPOS.jpg";
import posMove from "../../Assets/Images/PosMove.webp";
import "./Projects.css";

export default function Projects() {
  return (
    <section className="projects">
      <div className="container">
        <div className="project1">
          <div className="project1-description">
            <h2>Kitchen management</h2>
            <p>
              "Kitchen POS" is a point of sale application for restaurants, designed to simplify the process of order taking, while streamlining
              communication between the server in the front of house, and the chefs in the kitchen. I built this app to work in conjunction with a
              kitchen display application, which is an app for orchestrating the various sections of a commercial kitchen, such that orders are
              displayed, timed and prepared in a logical, sequential manner. The app provides a timeline, which arranges the orders depending on the
              station(grill, fry), so that each chef can, at a glance, determine which item they should be preparing, if there are any modifications
              to the ingredients and the remaining time before the order should be sent.
            </p>
          </div>
          <img className="pos-move" src={posMove} alt="" />
        </div>
          <YouTube
            videoId="j1p1O0-Bl50"
            opts={{
              width: "800",
              playerVars: { autoplay: 1, controls: 1, cc_load_policy: 1, cc_lang_pref: "en", modestbranding: 1, rel: 0 },
            }}
            className="youtube"
          />
      </div>




    </section>
  );
}

//
//
//

/* <img className="floor-plan" src={FloorPlan} alt="" /> */
/* <img className="pos-image" src={posImage} alt="" /> */
/* <img className="kitchen-display" src={kitchenDisplay} alt="" /> */
