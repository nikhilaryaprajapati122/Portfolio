import { useEffect, useState } from 'react'
import './App.css'
import { createPortal } from 'react-dom'

function App() {
    const [activeSection, setActiveSection] = useState('home')
    const [selectedPhoto, setSelectedPhoto] = useState(null)
      
     // Detect the currently visible section
     
      
      useEffect(() => {
        document.body.classList.toggle(
          'photo-open',
          Boolean(selectedPhoto)
        )

        return () => {
          document.body.classList.remove('photo-open')
        }
      }, [selectedPhoto])


    return (
    <>
      <header>
         <nav className="navbar">
           <a href="#home" className="brand-photo" aria-label="Go to Home">
            <span className="brand-avatar">
              <img  src="/images/outer.png"  alt="Nikhil Arya Prajapati" onClick={() => setIsPhotoOpen('/images/outer.png')} />
            </span>
          </a>

          
            <ul className="nav-links">
              <li><a href="#home" className={activeSection === 'home' ? 'active' : ''}>Home</a></li>
              <li><a href="#about" className={activeSection === 'about' ? 'active' : ''}>About</a></li>
              <li><a href="#skills" className={activeSection === 'skills' ? 'active' : ''}>Skills</a></li>
              <li><a href="#education" className={activeSection === 'education' ? 'active' : ''}>Education</a></li>
              <li><a href="#experience" className={activeSection === 'experience' ? 'active' : ''}>Experience</a></li>
              <li><a href="#projects" className={activeSection === 'projects' ? 'active' : ''}>Projects</a></li>
              <li><a href="#achievements" className={activeSection === 'achievements' ? 'active' : ''}>Achievements</a></li>
              <li><a href="#activity" className={activeSection === 'activity' ? 'active' : ''}>GitHub</a></li>
            </ul>

          <div className="nav-actions">
            <a href="#contact" className={`nav-contact ${activeSection === 'contact' ? 'active' : ''}`}>
            Let's Talk <span>↗</span>
            </a>
          </div>
        </nav>
      </header>

      <main>
           <section className="hero-section" id="home">

          <div className="hero-content">

            <p className="hero-greeting">
              HELLO, WORLD! I'M
            </p>

            <h1>
              Nikhil Arya
              <span> Prajapati.</span>
            </h1>

            <h2>
              Future-Ready Developer
            </h2>

            <p className="hero-description">
              I build modern digital experiences through
              software engineering, creative thinking,
              and innovative technology.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="btn-primary">
                Explore Projects
              </a>

              <a href="#contact" className="btn-secondary">
                Contact Me
              </a>
            </div>

          </div>

          <div className="hero-visual">
             <div className="portrait-container">

              <div className="portrait-glow"></div>

              <div className="portrait-ring ring-one"></div>
              <div className="portrait-ring ring-two"></div>

              <div className="portrait-card">

                <img src="/images/profile.png"  alt="Nikhil Arya Prajapati"  className="profile-photo"  onClick={() => setSelectedPhoto('/images/profile.png')}/>

                <div className="portrait-info">
                  <span>DEVELOPER PROFILE</span>
                  <h3>Nikhil Arya Prajapati</h3>
                </div>

              </div>

                
              <div className="profile-status">
                <span className="status-dot"></span>
                SOFTWARE DEVELOPER
              </div>

            </div>
          </div>
        </section>

                {/* Professional Snapshot */}
        <section className="snapshot-section">
          <div className="snapshot-heading">
            <p>PROFILE OVERVIEW</p>
            <h2>My Developer Snapshot<span>.</span></h2>
          </div>

          <div className="snapshot-grid">
            <div className="snapshot-card">
              <span className="snapshot-number">01</span>
              <p>EDUCATION</p>
              <h3>BSc Computer Science</h3>
              <span className="snapshot-detail">2024 — 2027</span>
            </div>

            <div className="snapshot-card">
              <span className="snapshot-number">02</span>
              <p>TECHNICAL FOCUS</p>
              <h3>Software Development</h3>
              <span className="snapshot-detail">Java · Python · Web</span>
            </div>

            <div className="snapshot-card">
              <span className="snapshot-number">03</span>
              <p>CURRENT BUILD</p>
              <h3>CareFlow</h3>
              <span className="snapshot-detail">Hospital Management System</span>
            </div>

            <div className="snapshot-card">
              <span className="snapshot-number">04</span>
              <p>DEVELOPMENT MINDSET</p>
              <h3>Learn. Build. Improve.</h3>
              <span className="snapshot-detail">Focused on practical skills</span>
            </div>
          </div>
        </section>

                {/* About Section */}
        <section className="about-section" id="about">

          <div className="about-visual">
            <div className="about-card">
              <div className="about-card-top">
                <span>DEVELOPER IDENTITY</span>
                <span>NAP_001</span>
              </div>

              <div className="about-avatar">
                  <img  src="/images/me.png"  alt="Nikhil Arya Prajapati" onClick={() => setSelectedPhoto('/images/me.png')}/>
              </div>

              <h3>Nikhil Arya Prajapati</h3>
              <p>Computer Science Student</p>

              <div className="about-card-line"></div>

              <div className="about-tags">
                <span>JAVA</span>
                <span>PYTHON</span>
                <span>WEB DEV</span>
              </div>
            </div>
          </div>

          <div className="about-content">
            <p className="section-label">GET TO KNOW ME</p>

            <h2>
              Building My Journey
              <span> in Technology.</span>
            </h2>

            <p className="about-description">
              I'm Nikhil Arya Prajapati, a Computer Science student
              passionate about software development and modern technology.
              I enjoy understanding how things work and turning ideas
              into practical digital solutions.
            </p>

            <p className="about-description">
              Currently, I'm strengthening my skills in Java, Python,
              Web Development, Data Structures and Software Engineering
              while building practical projects like CareFlow.
            </p>

            <a href="#projects" className="about-button">
              Explore My Work <span>↗</span>
            </a>
          </div>

        </section>

                {/* Skills Section */}
        <section className="skills-section" id="skills">

          <div className="skills-heading">
            <p className="section-label">MY TECHNICAL ARSENAL</p>
            <h2>Skills & <span>Technologies.</span></h2>
            <p>
              Technologies and concepts I'm learning and using
              to build practical software solutions.
            </p>
          </div>

          <div className="skills-grid">

            {/* Programming Languages */}
            <div className="skill-category">
              <div className="skill-category-icon">01</div>
              <h3>Programming Languages</h3>
              <p>Core languages for problem-solving and development.</p>
              <div className="skill-tags">
                <span>Java</span>
                <span>Python</span>
                <span>C</span>
                <span>C++</span>
              </div>
            </div>

            {/* Web Development */}
            <div className="skill-category">
              <div className="skill-category-icon">02</div>
              <h3>Web Development</h3>
              <p>Building modern and responsive web experiences.</p>
              <div className="skill-tags">
                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
                <span>React</span>
              </div>
            </div>

            {/* Database */}
            <div className="skill-category">
              <div className="skill-category-icon">03</div>
              <h3>Database Management</h3>
              <p>Working with structured data and database systems.</p>
              <div className="skill-tags">
                <span>SQL</span>
                <span>MySQL</span>
              </div>
            </div>

            {/* Computer Science */}
            <div className="skill-category">
              <div className="skill-category-icon">04</div>
              <h3>Computer Science</h3>
              <p>Understanding the foundations of software engineering.</p>
              <div className="skill-tags">
                <span>OOP</span>
                <span>DSA</span>
                <span>SDLC</span>
                <span>Software Engineering</span>
              </div>
            </div>

            {/* Tools */}
            <div className="skill-category">
              <div className="skill-category-icon">05</div>
              <h3>Developer Tools</h3>
              <p>Tools for writing, managing and developing software.</p>
              <div className="skill-tags">
                <span>VS Code</span>
                <span>Git</span>
                <span>GitHub</span>
              </div>
            </div>

            {/* Currently Learning */}
            <div className="skill-category learning-card">
              <div className="skill-category-icon">06</div>
              <h3>Currently Exploring</h3>
              <p>Expanding my knowledge through continuous learning.</p>
              <div className="skill-tags">
                <span>AI & ML</span>
                <span>Advanced Java</span>
                <span>Full Stack Development</span>
              </div>
            </div>

          </div>
        </section>

        
        {/* Education Journey */}
        <section className="education-section" id="education">

          <div className="education-heading">
            <p className="section-label">MY ACADEMIC BACKGROUND</p>
            <h2>My Learning <span>Journey.</span></h2>
            <p>
              From a traditional Gurukul environment
              to modern computer science education.
            </p>
          </div>

          <div className="education-timeline">

            {/* Graduation - Latest */}
            <div className="education-item">
              <div className="timeline-marker">01</div>

              <div className="education-card">
                <span className="education-period">2024 — 2027</span>
                <span className="education-type">UNDERGRADUATE EDUCATION</span>

                <h3>BSc Computer Science</h3>
                <h4>Hari Institute of Technology, Randevi, Nakur</h4>

                <p>
                  Currently pursuing Computer Science,
                  developing knowledge in programming,
                  software engineering and modern technology.
                </p>

                <div className="education-tags">
                  <span>Computer Science</span>
                  <span>Maa Shakumbhari University</span>
                </div>
              </div>
            </div>

            {/* Class 12 */}
            <div className="education-item">
              <div className="timeline-marker">02</div>

              <div className="education-card">
                <span className="education-period">2023 — 2024</span>
                <span className="education-type">HIGHER SECONDARY EDUCATION</span>

                <h3>Maharshi Dayanand Inter College</h3>
                <h4>Class 12th — Science (Mathematics)</h4>

                <p>
                  Completed higher secondary education
                  with Mathematics as my academic stream.
                </p>

                <div className="education-tags">
                  <span>Class XII</span>
                  <span>Science</span>
                  <span>Mathematics</span>
                </div>
              </div>
            </div>

            {/* Class 10 */}
            <div className="education-item">
              <div className="timeline-marker">03</div>

              <div className="education-card">
                <span className="education-period">2021 — 2022</span>
                <span className="education-type">SECONDARY EDUCATION</span>

                <h3>Maharshi Dayanand Inter College</h3>
                <h4>Class 10th</h4>

                <p>
                  Completed secondary education while
                  living in the Gurukul environment.
                </p>

                <div className="education-tags">
                  <span>Class X</span>
                  <span>2021–2022</span>
                </div>
              </div>
            </div>

            {/* Gurukul Experience */}
            <div className="education-item gurukul-item">
              <div className="timeline-marker">04</div>

              <div className="education-card">
                <span className="education-period">2019 — 2024</span>
                <span className="education-type">RESIDENTIAL FOUNDATION</span>

                <h3>Maharshi Dayanand Gurukul</h3>
                <h4>Uggarpur</h4>

                <p>
                  Spent five years living in a Gurukul environment
                  alongside formal school education.
                  An important chapter of my personal journey.
                </p>

                <div className="education-tags">
                  <span>5 Years</span>
                  <span>Gurukul Life</span>
                  <span>Foundation</span>
                </div>
              </div>
            </div>

          </div>
        </section>

       
        {/* Professional Journey Section */}
        <section className="experience-section" id="experience">

          <div className="experience-heading">
            <span>MY PROFESSIONAL JOURNEY</span>
            <h2>Learning. Building. Growing.</h2>
            <p>
              My journey as an aspiring software developer,
              focused on continuous learning and practical development.
            </p>
          </div>

          <div className="experience-grid">

            {/* Career Status */}
            <div className="experience-card">
              <span className="experience-number">01</span>
              <span className="experience-label">CAREER STATUS</span>
              <h3>Fresher</h3>
              <p>
                Currently building a strong foundation in software
                development and preparing for professional opportunities.
              </p>
              <span className="experience-tag">Open to Opportunities</span>
            </div>

            {/* Independent Learning */}
            <div className="experience-card">
              <span className="experience-number">02</span>
              <span className="experience-label">SELF DEVELOPMENT</span>
              <h3>Independent Learning</h3>
              <p>
                Developing programming, problem-solving and software
                engineering skills through structured learning and practice.
              </p>
              <span className="experience-tag">Continuous Learning</span>
            </div>

            {/* Practical Projects */}
            <div className="experience-card">
              <span className="experience-number">03</span>
              <span className="experience-label">PRACTICAL EXPERIENCE</span>
              <h3>Project Development</h3>
              <p>
                Applying technical knowledge through personal and
                academic projects, including web development and Java.
              </p>
              <span className="experience-tag">Hands-on Practice</span>
            </div>

          </div>
        </section>

       
        {/* Projects Showcase Section */}
        <section className="projects-section" id="projects">

          <div className="projects-heading">
            <span>MY CREATIVE WORK</span>
            <h2>Featured Projects</h2>
            <p>
              Turning ideas into practical solutions through
              programming, creativity and continuous learning.
            </p>
          </div>

          <div className="projects-grid">

            {/* CareFlow Project */}
            <div className="project-card">
              <div className="project-visual careflow-visual">
                <span>01</span>
                <h3>CareFlow</h3>
                <p>HOSPITAL MANAGEMENT SYSTEM</p>
              </div>

              <div className="project-content">
                <span className="project-category">ACADEMIC MINOR PROJECT</span>
                <h3>CareFlow Hospital Management System</h3>
                <p>
                  A hospital management solution designed to manage
                  patient records, appointments, doctor workflows
                  and pharmacy inventory.
                </p>

                <div className="project-tech">
                  <span>Java</span>
                  <span>SQL</span>
                  <span>Web Development</span>
                </div>

                <span className="project-status">Design & Development Journey</span>
              </div>
            </div>

            {/* Portfolio Project */}
            <div className="project-card">
              <div className="project-visual portfolio-visual">
                <span>02</span>
                <h3>NAP.</h3>
                <p>PERSONAL DEVELOPER PORTFOLIO</p>
              </div>

              <div className="project-content">
                <span className="project-category">PERSONAL PROJECT</span>
                <h3>Personal Developer Portfolio</h3>
                <p>
                  A futuristic portfolio website showcasing my
                  education, technical skills, development journey
                  and practical projects.
                </p>

                <div className="project-tech">
                  <span>React</span>
                  <span>Vite</span>
                  <span>CSS</span>
                  <span>JavaScript</span>
                </div>

                <span className="project-status">Currently Building</span>
              </div>
            </div>

            {/* Number Guessing Game */}
            <div className="project-card">
              <div className="project-visual game-visual">
                <span>03</span>
                <h3>Guess The Number</h3>
                <p>JAVA PROGRAMMING GAME</p>
              </div>

              <div className="project-content">
                <span className="project-category">JAVA PROJECT</span>
                <h3>Number Guessing Game</h3>
                <p>
                  An interactive number guessing game developed
                  using Java programming concepts and logical
                  problem-solving.
                </p>

                <div className="project-tech">
                  <span>Java</span>
                  <span>OOP Concepts</span>
                  <span>Logic Building</span>
                </div>

                <span className="project-status">Practice Project</span>
              </div>
            </div>

          </div>
        </section>

        
        {/* Achievements & Certifications Section */}
        <section className="achievements-section" id="achievements">

          <div className="achievements-heading">
            <span>BEYOND TECHNOLOGY</span>
            <h2>Achievements & Certifications</h2>
            <p>
              Recognizing my participation, learning and
              personal growth through sports and activities.
            </p>
          </div>

          <div className="achievements-grid">

            {/* Kabaddi */}
            <div className="achievement-card">
              <div className="achievement-image">
                <img
                  src="/special-images/kabbdi.jpg" alt="Kabaddi Certificate"
                  onClick={() => setSelectedPhoto('/special-images/kabbdi.jpg')}
                />
              </div>
              <div className="achievement-content">
                <span>SPORTS</span>
                <h3>Kabaddi</h3>
                <p>Sports participation and achievement.</p>
              </div>
            </div>

            {/* Boxing */}
            <div className="achievement-card">
              <div className="achievement-image">
                <img
                  src="/special-images/boxing.jpg" alt="Boxing Certificate"
                  onClick={() => setSelectedPhoto('/special-images/boxing.jpg')}
                />
              </div>
              <div className="achievement-content">
                <span>SPORTS</span>
                <h3>Boxing</h3>
                <p>Sports participation and achievement.</p>
              </div>
            </div>

            {/* Yoga */}
            <div className="achievement-card">
              <div className="achievement-image">
                <img
                  src="/special-images/yoga.jpg" alt="Yoga Certificate"
                  onClick={() => setSelectedPhoto('/special-images/yoga.jpg')}
                />
              </div>
              <div className="achievement-content">
                <span>SPORTS & WELLNESS</span>
                <h3>Yoga</h3>
                <p>Participation and learning in yoga activities.</p>
              </div>
            </div>

            {/* Aryaveer */}
            <div className="achievement-card">
              <div className="achievement-image">
                <img
                  src="/special-images/aryaveer.jpg" alt="Aryaveer Dal Certificate"
                  onClick={() => setSelectedPhoto('/special-images/aryaveer.jpg')}
                />
              </div>
              <div className="achievement-content">
                <span>TRAINING & DEVELOPMENT</span>
                <h3>Aryaveer Shivir</h3>
                <p>
                  Training activities involving lathi practice,
                  physical exercises, games and baudhik sessions.
                </p>
              </div>
            </div>

          </div>
        </section>

        
        {/* GitHub Activity Section */}
        <section className="github-section" id="activity">

          <div className="github-heading">
            <span>CODE. COMMIT. CREATE.</span>
            <h2>GitHub Activity</h2>
            <p>
              Exploring technology, building projects and
              improving my development skills through code.
            </p>
          </div>

          {/* GitHub Profile Card */}
          <div className="github-profile-card">

            <div className="github-profile-info">
              <span className="github-label">DEVELOPER PROFILE</span>

              <h3>Nikhil Arya Prajapati</h3>

              <p className="github-username">
                @nikhilaryaprajapati122
              </p>

              <p className="github-description">
                Software Development Learner | Java | Python |
                Web Development
              </p>

              <a
                href="https://github.com/nikhilaryaprajapati122"
                target="_blank"
                rel="noreferrer"
                className="github-profile-btn"
              >
                Visit GitHub Profile ↗
              </a>
            </div>

            <div className="github-profile-icon">
              <span>GH</span>
            </div>

          </div>

            {/* GitHub Activity Features */}
            <div className="github-features">

              <div className="github-feature-card">
                <span className="github-feature-icon">01</span>
                <h3>Repositories</h3>
                <p>
                  Explore my programming practice,
                  experiments and development projects.
                </p>
                <a
                  href="https://github.com/nikhilaryaprajapati122?tab=repositories"
                  target="_blank"
                  rel="noreferrer"
                >
                  Explore Repositories ↗
                </a>
              </div>

              <div className="github-feature-card">
                <span className="github-feature-icon">02</span>
                <h3>Contribution Activity</h3>
                <p>
                  Explore my public coding contributions
                  and development activity.
                </p>
                <a
                  href="https://github.com/nikhilaryaprajapati122"
                  target="_blank"
                  rel="noreferrer"
                >
                  View Contributions ↗
                </a>
              </div>

            </div>

          </section>

          
          {/* Contact Section */}
          <section className="contact-section" id="contact">

            <div className="contact-heading">
              <span>LET'S CONNECT</span>
              <h2>Have an Idea? Let's Talk.</h2>
              <p>
                Interested in technology, software development
                or collaboration? Feel free to connect with me.
              </p>
            </div>

            <div className="contact-container">

              {/* Contact Information */}
              <div className="contact-info">

                <span className="contact-label">GET IN TOUCH</span>

                <h3>Let's Connect & Create Something Meaningful.</h3>

                <p>
                  Software development, problem-solving and cybersecurity
                  are what drive my passion for technology. I'm always open
                  to meaningful collaborations and new opportunities.
                </p>

                <div className="contact-links">

                  <a href="mailto:nikhilaryaprajapati122@gmail.com"
                    className="contact-link">
                    <span className="contact-icon">@</span>
                    <div>
                      <small>EMAIL</small>
                      <h4>Send Me an Email</h4>
                    </div>
                    <span className="contact-arrow">↗</span>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/nikhil-arya-prajapati-45a154433/"
                    target="_blank"
                    rel="noreferrer"
                    className="contact-link"
                  >
                    <span className="contact-icon">in</span>
                    <div>
                      <small>LINKEDIN</small>
                      <h4>Connect Professionally</h4>
                    </div>
                    <span className="contact-arrow">↗</span>
                  </a>

                  <a
                    href="https://github.com/nikhilaryaprajapati122"
                    target="_blank"
                    rel="noreferrer"
                    className="contact-link"
                  >
                    <span className="contact-icon">GH</span>
                    <div>
                      <small>GITHUB</small>
                      <h4>Explore My Code</h4>
                    </div>
                    <span className="contact-arrow">↗</span>
                  </a>

                </div>
              </div>

              {/* Developer Workspace Visual */}
              <div className="contact-visual">
                <img
                  src="/images/developer-workspace.png"
                  alt="Developer workspace"
                   onClick={() => setSelectedPhoto('/images/developer-workspace.png')}
                />
              </div>
              </div>
          </section>
      </main>
      
        {/* Professional Footer */}
        <footer className="footer-section">

          <div className="footer-container">

            {/* Brand */}
            <div className="footer-brand">
              <a href="#home" className="footer-logo">
                NAP<span>.</span>
              </a>

              <p>
                Building skills, creating projects and
                moving forward in the world of technology.
              </p>
            </div>

            {/* Quick Navigation */}
            <div className="footer-navigation">
              <h3>QUICK LINKS</h3>

              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#skills">Skills</a>
              <a href="#education">Education</a>
              <a href="#projects">Projects</a>
              <a href="#contact">Contact</a>
            </div>

            {/* Social Links */}
            <div className="footer-social">
              <h3>CONNECT WITH ME</h3>

              <a
                href="https://github.com/nikhilaryaprajapati122"
                target="_blank"
                rel="noreferrer"
              >
                GitHub ↗
              </a>

              <a
                href="https://www.linkedin.com/in/nikhil-arya-prajapati-45a154433/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn ↗
              </a>

              <a href="mailto:nikhilaryaprajapati122@gmail.com">
                Email ↗
              </a>
            </div>

          </div>

          {/* Copyright */}
          <div className="footer-bottom">
            <p>
              © {new Date().getFullYear()} Nikhil Arya Prajapati.
              All Rights Reserved.
            </p>

            <a href="#home">Back to Top ↑</a>
          </div>

        </footer>

        {selectedPhoto && createPortal(
          <div
            className="photo-lightbox"
            onClick={() => setSelectedPhoto(null)}
          >
            <button
              className="photo-close"
              onClick={() => setSelectedPhoto(null)}
              aria-label="Close image"
            >
              ×
            </button>

            <img
              src={selectedPhoto}
              alt="Full View"
              className="full-profile-photo"
              onClick={(event) => event.stopPropagation()}
            />
          </div>,
          document.body
        )}
        
    </>
  )
}

export default App
