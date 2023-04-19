import { motion } from "framer-motion";
import { animate, initialRight } from "../../../Assets/AnimateValues";
import jsQuestions from "../../../Assets/Images/QuestionsAppCompressed.webp";

export default function Jsquestions() {
  return (
    <motion.aside initial={initialRight} whileInView={animate} className="other-projects-container jsquestions">
      <div className="other-projects-description">
        <h3 className="project-heading">Coding questions</h3>
        <p>
          An app for testing coding related questions. I used react for the front end and firestore for the back. Aloing the way I implemented the
          react context API for state management and the intersection observer API for infinite scrolling.
        </p>
      </div>
      <div className="outer">
        <div className="project-img-wrapper img-btn-container">
          <img width="500" height="406" src={jsQuestions} alt="landing page for the coding questions app" />

          <div className="overlay"></div>
          <div className="overlay-text">
            <h4>Coding questions</h4>
            <p>An app for testing javascript and other programming knowlegde</p>
          </div>

          <form name="gitJsQ" target="_blank">
            <button className="highlight-btn github-btn" type="submit" formAction="https://github.com/Fishamble/QuestionApp">
              GitHub
            </button>
          </form>
          <form name="liveJsQ" target="_blank">
            <button className="highlight-btn live-btn" type="submit" formAction="https://jsqapp.netlify.app/">
              Live
            </button>
          </form>
        </div>
      </div>
    </motion.aside>
  );
}
