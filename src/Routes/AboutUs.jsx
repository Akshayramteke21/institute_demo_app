import React from "react";
import "../Components/CSS/AboutUs.css";

function AboutUs() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <section className="title">
              <h2>About us</h2>
            </section>
          </div>
        </div>

        <div className="row">
          <div className="col-md-4 card-body" >
            <div className="content">
            <section>History</section>

            <ul>
              Tech Hub was established in 2010 by Mr. Adinath Giri who had a
              passion for teaching and who wanted to pass on the knowledge he
              had accumulated over a period of 10 years to people who want to
              make a career in the IT industry. We wanted to provide the
              industry with people having good Technical Skills and people with
              the desired knowledge and ability to make successful career in the
              Software industry.
              </ul>

            </div>
          </div>
          <div className="col-md-4 card-body" >
            <section>Mission</section>
            <ul>
              <li>
                To bridge the gap between candidates and the corporate / IT
                sector by creating skilled resources who can build their career
                in the industry.
              </li>
              <li>
                
                To become a leading and well known institute for creating
                skilled Professionals which sets a benchmark for other to
                follow.
              </li>
            </ul>
          </div>
          <div className="col-md-4 card-body" >
            <section>Vision</section>
            <ul>
              <li>
                To provide candidates with Technical knowledge that is at-par
                with the IT industry, but also in a pocket friendly way so that
                everyone can take benefit of our courses
              </li>
              <li>
                To provide training to candidates in various technologies by
                experts who have first-hand industry knowledge so that
                candidates can start their career and be in sync with the
                industry.
              </li>
              <li>
                To bridge expectation gap between the corporate sector and
                candidates.
              </li>
              <li>
                To provide corporate training to the candidates as per their
                requirements.
              </li>
            </ul>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12 card-body">
                   <h1>Why Tech Hub</h1>

            <ul>
              <li>
                We strive to teach the latest and most advanced technologies to
                our candidates so that they are not left behind while the
                industry is making progress.
              </li>
              <li>
                Our faculty consists of experienced, real-time working IT
                professionals which means that candidates get trained with the
                latest knowledge base.
              </li>
              <li>
                We provide placements to Candidates who successfully complete
                our Training courses and after cracking third party external
                Expert Interviews.
              </li>
              <li>
                We have kept our training programs very cost-effective so as to
                ensure that everyone can take benefit of our courses.
              </li>
              <li>
                Candidates can attend the classes as many times as they want
                till they get placed. This ensures that they can keep themselves
                updated for interviews, clear their doubts on a topic (if it did
                not get cleared the first time) and also cover up on any classes
                they may have missed.
              </li>
              <li>
                We believe that candidates will have a lot of confidence when
                they know that we are with them all the way in making their
                career. That's why; candidates have an option to pay after they
                get placed.
              </li>
              <li>
                During the course, candidates get to face mock interviews by
                industry experts. This gives them the benefit of facing real
                life interviews in the course itself.
              </li>
              <li>
                We provide maximum support to candidates even after they get
                placed.
              </li>
              <li>
                During their course, candidates get to work on live projects,
                giving them exposure of scenarios from the industry.
              </li>
              <li>
                We have a great lab facility and infrastructure to complement
                our excellent faculty.
              </li>
              <li>
                On weekends, We arrange guest Seminars by Industry Experts.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
