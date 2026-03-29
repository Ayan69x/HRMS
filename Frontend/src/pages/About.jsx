const About = () => {
  return (
    <>
    <div style={{ height: "40px" }}>
    </div>
      <section id="about" className="about">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>About Us</h2>
          </div>

          <div className="row content">
            <div className="col-lg-6">
              <p>
                Dedicated to modernizing workplace management, our platform provides comprehensive tools to oversee your organization's most valuable asset: its people.
              </p>
              <ul>
                <li>
                  <i className="ri-check-double-line"></i> Seamless Employee Onboarding & Tracking
                </li>
                <li>
                  <i className="ri-check-double-line"></i> Advanced Leave & Attendance Management
                </li>
                <li>
                  <i className="ri-check-double-line"></i> Secure Document Handling & Approval Workflows
                </li>
              </ul>
            </div>
            <div className="col-lg-6 pt-4 pt-lg-0">
              <p>
                We are passionate about revolutionizing the way companies manage their workforce. Our platform is built to connect HR departments with their employees, streamlining the path to effective resource management. By leveraging advanced technology, we offer tailored workflows and intuitive tools that make managing attendance, documents, and organizational data incredibly efficient. Our commitment is to empower HR teams, providing you with the resources to cultivate a happier, more productive workplace.
              </p>
              <a href="#" className="btn-learn-more">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
