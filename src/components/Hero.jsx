import { logo } from "../assets";

const Hero = () => {
  return (
    <header className="w-full flex flex-col justify-center items-center">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src={logo} alt="Logo" className="w-28 object-contain" />
        <button
          type="button"
          onClick={() =>
            window.open("https://github.com/adrianhajdin/project_ai_summarizer")
          }
          className="black_btn"
        >
          Github
        </button>
      </nav>
      <h1 className="head_text">
        Summarize Articles with <br className="max-md:hidden" />
        <span className="orange_gradient">with AI GPT-4</span>
      </h1>
      <h2 className="desc">
        Introducing Sumz, an AI which summarizes any lengthy article. Unlock the
        essence of long-form content - Get the key takeaways in seconds with our
        Sumz summarizer
        <br />
        <br />
        <span className="italic ">Step 1: Find a lengthy blog/article</span>
        <br />
        <span className="italic ">Step 2: Paste the blog/article below</span>
        <br />
        <span className="italic ">Step 3: Hit the "Enter", Voila!</span>
        <br />
      </h2>
    </header>
  );
};

export default Hero;
