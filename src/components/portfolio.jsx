import React from "react";
import { Grid, Icon } from "semantic-ui-react";
import allProjects from "../libs/allprojects.js";

const importAll = (r) => {
  const images = r.keys().map(r);
  return images;
};

const Portfolio = () => {
  return (
    <section id="work" className="portfolio-mf sect-pt4 route">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="title-box text-center">
              <h3 className="title-a">Portfolio</h3>
              <p className="subtitle-a">There are my projects.</p>
              <div className="line-mf"></div>
            </div>
          </div>
        </div>
        <div className="row">
          {allProjects.map((project, index) => (
            <div key={"div1" + index} className="col-md-4">
              <div className="work-box">
                <a
                  href={importAll(project.contextOfImages)[0]}
                  data-lightbox={"gallery-vmarine" + index}
                >
                  <div className="work-img">
                    <img
                      src={importAll(project.contextOfImages)[0]}
                      alt="Main_picture"
                      className="img-fluid"
                    />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">{project.description}</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            {project.technologies}
                          </span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                {importAll(project.contextOfImages)
                  .slice(1)
                  .map((image, indexList) => (
                    <a
                      href={image}
                      key={indexList}
                      data-lightbox={"gallery-vmarine" + index}
                      style={{ display: "none" }}
                    >
                      jsx-a11y/anchor-has-content warning
                    </a>
                  ))}
                <Grid centered>
                  <Grid.Row columns={2}>
                    <Grid.Column
                      textAlign="center"
                      verticalAlign="middle"
                      className="links"
                      width={5}
                    >
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Icon name="code" />
                        <p>Code.</p>
                      </a>
                    </Grid.Column>
                    <Grid.Column
                      textAlign="center"
                      verticalAlign="middle"
                      className="links"
                      width={5}
                    >
                      <a
                        href={project.liveSiteLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Icon name="desktop" />
                        <p>Live site.</p>
                      </a>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
