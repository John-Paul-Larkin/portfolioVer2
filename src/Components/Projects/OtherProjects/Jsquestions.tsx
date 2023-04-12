// import jsQuestions from "../../../Assets/Images/QuestionsApp.jpg";
import jsQuestions from "../../../Assets/Images/QuestionsAppCompressed.webp";

export default function Jsquestions() {
  return (
    <aside className="other-projects-container jsquestions">
      <div className="other-projects-description">
        <h3 className="project-heading">Coding questions</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui aliquam suscipit, pariatur repudiandae accusamus molestias, esse aut est
          repellat accusantium minus eius tempora quam sit alias perspiciatis eligendi. Minus, velit.
        </p>
      </div>
      <div className="project-img-wrapper img-btn-container">
        {/* <img width='1921' height='1561' src={jsQuestions} alt="landing page for the coding questions app" /> */}
        <img width="500" height="406" src={jsQuestions} alt="landing page for the coding questions app" />

        <div className="overlay"></div>
        <div className="overlay-text">
          <h4>Coding questions</h4>
          <p>Fill in some inforamtion here</p>
        </div>

        <form target="_blank">
          <button className="highlight-btn github-btn" type="submit" formAction="https://github.com/Fishamble/QuestionApp">
            GitHub
          </button>
        </form>
        <form target="_blank">
          <button className="highlight-btn live-btn" type="submit" formAction="https://jsqapp.netlify.app/">
            Live
          </button>
        </form>
      </div>
    </aside>
  );
}
