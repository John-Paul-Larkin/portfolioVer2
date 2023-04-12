import JpMazon from "../../../Assets/Images/JpMazon.jpg";
// import TextScrollHighlight from "../MainProject/TextScrollHighlight";
export default function Jpmazon() {
  return (
    <aside className="other-projects-container jpmazon">
      <div className="other-projects-description">
        <h3 className="project-heading">JPMazon</h3>
        <p>
          An amazon clone built using react. I used dummyjson.com, which provides fake product data and images through REST endpoints, to create
          responsive product pages and a basic shopping cart.
        </p>
      </div>
      <div className="project-img-wrapper img-btn-container">
        <img src={JpMazon} alt="landing page for the jpmazon project" />
        <div className="overlay"></div>
        <div className="overlay-text">
          <h4>JpMazon</h4>
          <p>JPMAZON: Mediocre prices on books, clothes and other crap you dont need.</p>
        </div>

        <form target="_blank">
          <button className="highlight-btn github-btn" type="submit" formAction="https://github.com/Fishamble/jpmazonV2">
            GitHub
          </button>
        </form>
        <form target="_blank">
          <button className="highlight-btn live-btn" type="submit" formAction="https://jpmazon.netlify.app/">
            Live
          </button>
        </form>
      </div>
    </aside>
  );
}
