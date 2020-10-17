import React from "react";
import Workerge from "../../assets/workerge-Recovered.png";
import Banner from "../../assets/banner.png";
import Lines from "../../assets/lines.png";
import "./homepage.styles.css";
import RegisterBox from "../../components/register-box/register-box.component";

function HomePage() {
  return (
    <div>
      <section id="sec-2">
        <div className="mainlogo">
          <img src={Workerge} id="imge" />
        </div>
        <div className="tagline">
          <h1>HELPING YOU WORK THROUGH HARD TIMES</h1>
          <img src={Lines} />
        </div>
        <div className="boxes">
          <RegisterBox workType="Worker" />
          <RegisterBox workType="Employer" />
        </div>
      </section>
      <section className="slider bg">
        <h1>
          "India's unemployment rate rises to 27.11% amid COVID-19 crisis"
        </h1>
        <h1>-The Hindu</h1>
      </section>
      <section className="help">
        <h1>How We can Help?</h1>

        <div className="boxes2">
          <h3>
            Workerge connects workers with employers seamlessly and helps them
            get employed in these turbulent times. This platform allows workers
            to explore a large pool of work requirements and choose what suits
            them best. It strives to be a reliable source of work for people who
            want a better work-finding experience.
          </h3>
        </div>
      </section>
      <section class="footer">
        <div class="fbox">
          <img src={Banner} />
          <h2>
            Any Queries ?
            <br />
            Drop us an email at- workerge@gmail.com
          </h2>
        </div>
      </section>
      <p class="ftext">2020 &copy; Workerge</p>
    </div>
  );
}

export default HomePage;
