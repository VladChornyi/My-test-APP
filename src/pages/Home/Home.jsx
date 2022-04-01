import { CV } from "./Home.styled";
import {
  contacts,
  techSkills,
  softSkills,
  languages,
  projectExperiance,
  career,
  education,
} from "./data";

const Home = () => {
  return (
    <CV className="container cv">
      <h1 className="cv-name">Chornyi Vladyslav</h1>
      <p className="cv-position">FRONT-END DEVELOPER</p>
      <div className="cv-wrapper">
        <div className="cv-leftSide">
          <h2>HOW TO REACH ME</h2>
          <ul className="cv-list">
            {contacts.map((contact) => (
              <li className="cv-item" key={contact.id}>
                <a
                  target={"_blank"}
                  rel="noopener noreferrer"
                  className="cv-link"
                  href={contact.href}
                >
                  {contact.content}
                </a>
              </li>
            ))}
          </ul>
          <h2>TECHNICAL SKILLS</h2>
          <ul className="cv-list">
            {techSkills.map((item) => (
              <li key={item.id} className="cv-item">
                {item.title}
              </li>
            ))}
          </ul>
          <h2>SOFT SKILLS</h2>
          <ul className="cv-list">
            {softSkills.map((item) => (
              <li key={item.id} className="cv-item">
                {item.title}
              </li>
            ))}
          </ul>
          <h2>Languages</h2>
          <ul className="cv-list">
            {languages.map((item) => (
              <li key={item.id} className="cv-item">
                {item.title}
              </li>
            ))}
          </ul>
        </div>
        <div className="cv-rightSide">
          <h2>SUMMARY</h2>
          <p>
            &emsp;I am a Front-End developer looking for a permanent position in
            companies with a friendly team and interesting projects. I have
            completed front-end developer courses and I'm good at HTML, CSS,
            JavaScriptб React.
            <br />
            &emsp; I have experience working in a team, as well as managing a
            team at a high-intensity pace of work. I am a fast learner,
            responsible and ready to tackle complex problems.
            <br /> &emsp;I also have commercial experience in web development.
          </p>
          <h2 className="cv-exp">PROJECT EXPERIENCE</h2>
          <ul className="cv-list">
            {projectExperiance.map((item) => (
              <li className="cv-item" key={item.id}>
                <p>
                  Project :&nbsp;
                  <a
                    className="cv-link"
                    target={"_blank"}
                    rel="noopener noreferrer"
                    href={item.link}
                  >
                    {item.name}
                  </a>
                  {item.git ? (
                    <>
                      <span> | </span>
                      <a
                        className="cv-link"
                        target="_blank"
                        rel="noopener noreferrer"
                        href={item.git}
                      >
                        github.link
                      </a>
                    </>
                  ) : null}
                </p>
                <p>Technologies: {item.technologies}</p>
                <p>About project: {item.about}</p>
              </li>
            ))}
          </ul>
          <h2>CAREER SUMMARY</h2>
          <ul>
            {career.map((item) => (
              <li className="career-list" key={item.id}>
                <h3>{item.position}</h3>
                <p>{item.company}</p>
                <ul>
                  {item.responsibilities.map((resp) => (
                    <li key={resp.id}>{resp.content}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
          <h2>EDUCATIONAL TRAINING</h2>
          <ul className="cv-list">
            {education.map((item) => (
              <li className="cv-item" key={item.id}>
                <h3>{item.school}</h3>
                <p>{item.degree}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </CV>
  );
};

export default Home;
