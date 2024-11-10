

const AboutMe = () => {
  return (
    <section className="about-me-section">
      <div className="container">
        <h2 className="title">About Me</h2>
        <p className="description">
          Hi! I&apos;m Muhammad Abdul Wahid, a 20-year-old passionate web developer with a keen eye for design and functionality.
          I’m currently diving deep into the world of front-end development, specializing in creating interactive and responsive
          user interfaces. My journey began with simple HTML and CSS, and now I&apos;m expanding my skills in JavaScript, Next.js and Tailwind CSS.
          I strive to create websites that offer both great performance and an engaging user experience, with a focus on clean, modern design.
        </p>

        <h3 className="skills-title">Skills</h3>
        <ul className="skills-list">
          <li className="skill-item">HTML</li>
          <li className="skill-item">CSS</li>
          <li className="skill-item">JavaScript</li>
          <li className="skill-item">TypeScript</li>
          <li className="skill-item">Next.js</li>
          <li className="skill-item">Tailwind CSS</li>
          <li className="skill-item">UI/UX Design</li>
        </ul>
      </div>
    </section>
  );
};

export default AboutMe;
