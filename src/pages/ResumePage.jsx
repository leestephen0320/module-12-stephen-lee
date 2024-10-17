import Resume from '../assets/resume.txt'

export default function ResumePage() {
    return (
      <div>
        <div>
          <h4>Resume</h4>
          <p>Download my <a href={Resume} target='_blank' rel='noopener noreferrer' download>resume</a></p>
        </div>
        <div>
          <h4>Front-end Proficiencies</h4>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>JQuery</li>
            <li>responsive design</li>
            <li>React</li>
            <li>Bootstrap</li>
          </ul>
        </div>
        <div>
          <h4>Back-end Proficiences</h4>
          <ul>
            <li>APIs</li>
            <li>Node</li>
            <li>Express</li>
            <li>PostgressSQL, PGAdmin</li>
            <li>REST</li>
          </ul>
        </div>
      </div>
    );
  }
  