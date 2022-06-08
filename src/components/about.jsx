import React from "react";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      skills: [
        { id: "HTML5_skill", content: "HTML5", porcentage: "65%", value: "65" },
        { id: "CSS3_skill", content: "CSS3", porcentage: "60%", value: "60" },
        {
          id: "JavaScript_skill",
          content: "JavaScript",
          porcentage: "70%",
          value: "70",
        },
        {
          id: "ReactJS_skill",
          content: "ReactJS",
          porcentage: "75%",
          value: "75",
        },
        {
          id: "NodeJS_skill",
          content: "NodeJS",
          porcentage: "70%",
          value: "70",
        },
        {
          id: "PostgreSQL_skill",
          content: "PostgreSQL",
          porcentage: "60%",
          value: "60",
        },

        {
          id: "GIT_skill",
          content: "GIT",
          porcentage: "65%",
          value: "65",
        },
        {
          id: "Linux_skill",
          content: "Linux",
          porcentage: "60%",
          value: "60",
        },
      ],
      about_me: [
        {
          id: "first-p-about",
          content:
            "Junior web developer with strong technical skills, passionate about creating perfect digital solutions with clean code and the latest technologies. A quick learner, focused on gaining knowledge, new skills and continuous improvement. Described throughout career as a hardworking, highly motivated and helpful individual with self discipline.",
        },
        {
          id: "second-p-about",
          content:
            "During intensive nine months of training with the CodeYourFuture with over 800 hours of studying gained Full-stack tech skills: HTML and CSS, JavaScript, React js, Node.js, PostgreSQL, Testing, asynchronous programming; Employ-ability skills: Teamwork, Adaptability, Problem-solving, Communication and Continuous Learning Skills Project delivery experience Within a team of 5 developers created a Full Stack app Diversihire  – the hiring platform of new type on base of PERN stack.",
        },
        {
          id: "third-p-about",
          content:
            "I have engineering diplomas in Information Technology and Aircraft Engine Technology, I worked as an IT manager for more than 12 years, so I have both technical education and practical experience in the building and maintenance of complex systems.",
        },
      ],
    };
  }

  render() {
    return (
      <section id="about" className="about-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
                <div className="row">
                  <div className="col-md-6">
                    <div className="row">
                      <div
                        className="col-sm-6 col-md-5"
                        style={{ margin: "0 auto" }}
                      >
                        <div
                          className="about-img"
                          style={{ textAlign: "center" }}
                        >
                          <img
                            className="img-fluid rounded b-shadow-a"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="skill-mf">
                      {/* <p className="title-s">Skill</p> */}
                      {this.state.skills.map((skill) => {
                        return (
                          <React.Fragment key={skill.id}>
                            <span>{skill.content}</span>{" "}
                            <span className="pull-right">
                              {skill.porcentage}
                            </span>
                            <div className="progress">
                              <div
                                className="progress-bar"
                                role="progressbar"
                                style={{ width: skill.porcentage }}
                                aria-valuenow={skill.value}
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </React.Fragment>
                        );
                      })}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="about-me pt-4 pt-md-0">
                      <div className="title-box-2">
                        <h5 className="title-left">About Me</h5>
                      </div>
                      {this.state.about_me.map((content) => {
                        return (
                          <p className="lead" key={content.id}>
                            {content.content}
                          </p>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
