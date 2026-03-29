import React from "react";
import { useEffect, useState} from "react";

const Home = () => {
  const clientsList = [
    
    "assets/img/clients/client-10.png",
    "assets/img/clients/client-11.png",
    "assets/img/clients/client-12.png",
    "assets/img/clients/client-13.png",
    "assets/img/clients/client-14.png",
    "assets/img/clients/client-15.png",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleClients = clientsList.slice(currentIndex, currentIndex + 6);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        // If we've reached the end of the list, reset to 0, else move to the next index
        if (prevIndex + 6 >= clientsList.length) {
          return 0;
        }
        return prevIndex + 1;
      });
    }, 3000); // Change logos every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [clientsList.length]);

  return (
    <>
      <section id="hero" className="d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <h1>Empower Your Workforce</h1>
              <h2>
              Welcome to your all-in-one HRMS destination for managing top talent and optimizing internal operations. We bridge the gap between human resources and employees, providing a seamless experience for attendance tracking, leave management, and organizational growth.
              </h2>
              <div className="d-flex justify-content-center justify-content-lg-start">
                 
              </div>
            </div>
            <div
              className="col-lg-6 order-1 order-lg-2 hero-img"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <img
                src="assets/img/hero-img.png"
                className="img-fluid animated"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      <main id="main">


        <section id="why-us" className="why-us section-bg">
          
        </section>

        <section id="faq" className="faq section-bg">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <h2>Frequently Asked Questions</h2>
              <p>
                Find answers to the most common questions about our platform's capabilities, from leave management and attendance tracking to secure document submission and administrative tools.
              </p>
            </div>

            <div className="faq-list">
              <ul>
                <li data-aos="fade-up" data-aos-delay="100">
                  <i className="bx bx-help-circle icon-help"></i>{" "}
                  <a
                    data-bs-toggle="collapse"
                    className="collapse"
                    data-bs-target="#faq-list-1"
                  >
                    What is the main purpose of this HRMS platform?{" "}
                    <i className="bx bx-chevron-down icon-show"></i>
                    <i className="bx bx-chevron-up icon-close"></i>
                  </a>
                  <div
                    id="faq-list-1"
                    className="collapse show"
                    data-bs-parent=".faq-list"
                  >
                    <p>
                      Our HRMS platform is designed to streamline internal human resources tasks, including attendance tracking, leave management, document submission, and employee directories.
                    </p>
                  </div>
                </li>

                <li data-aos="fade-up" data-aos-delay="200">
                  <i className="bx bx-help-circle icon-help"></i>{" "}
                  <a
                    data-bs-toggle="collapse"
                    data-bs-target="#faq-list-2"
                    className="collapsed"
                  >
                    How do I request time off or sick leave?{" "}
                    <i className="bx bx-chevron-down icon-show"></i>
                    <i className="bx bx-chevron-up icon-close"></i>
                  </a>
                  <div
                    id="faq-list-2"
                    className="collapse"
                    data-bs-parent=".faq-list"
                  >
                    <p>
                      You can quickly request time off by navigating to the 'Leaves' dashboard, selecting the dates and type of leave, and submitting it to your manager for approval.
                    </p>
                  </div>
                </li>

                <li data-aos="fade-up" data-aos-delay="300">
                  <i className="bx bx-help-circle icon-help"></i>{" "}
                  <a
                    data-bs-toggle="collapse"
                    data-bs-target="#faq-list-3"
                    className="collapsed"
                  >
                    Can I use this platform to submit my official documents?{" "}
                    <i className="bx bx-chevron-down icon-show"></i>
                    <i className="bx bx-chevron-up icon-close"></i>
                  </a>
                  <div
                    id="faq-list-3"
                    className="collapse"
                    data-bs-parent=".faq-list"
                  >
                    <p>
                      Yes! You can securely upload onboarding, compliance, and official identity documents directly through our Document Submission portal for HR review.
                    </p>
                  </div>
                </li>

                <li data-aos="fade-up" data-aos-delay="400">
                  <i className="bx bx-help-circle icon-help"></i>{" "}
                  <a
                    data-bs-toggle="collapse"
                    data-bs-target="#faq-list-4"
                    className="collapsed"
                  >
                    How is my personal employee data secured?
                    <i className="bx bx-chevron-down icon-show"></i>
                    <i className="bx bx-chevron-up icon-close"></i>
                  </a>
                  <div
                    id="faq-list-4"
                    className="collapse"
                    data-bs-parent=".faq-list"
                  >
                    <p>
                      We utilize industry-standard encryption and strict role-based access control to ensure that only authorized HR personnel and your direct managers can view your sensitive information.
                    </p>
                  </div>
                </li>

                <li data-aos="fade-up" data-aos-delay="500">
                  <i className="bx bx-help-circle icon-help"></i>{" "}
                  <a
                    data-bs-toggle="collapse"
                    data-bs-target="#faq-list-5"
                    className="collapsed"
                  >
                    Are managers able to allocate resources remotely?{" "}
                    <i className="bx bx-chevron-down icon-show"></i>
                    <i className="bx bx-chevron-up icon-close"></i>
                  </a>
                  <div
                    id="faq-list-5"
                    className="collapse"
                    data-bs-parent=".faq-list"
                  >
                    <p>
                      Absolutely. Managers and administrators can effortlessly assign tasks, approve leaves, and audit organizational charts directly from this cloud-hosted platform from anywhere.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      {/* {showPreloder  && <div id="preloader"></div>}
      {showBackToTop && (
        <a
          href="#"
          class="back-to-top d-flex align-items-center justify-content-center"
        >
          <i class="bi bi-arrow-up-short"></i>
        </a>
      )} */}
      <div style={{ height: "20px" }}>
      </div>
    </>
  );
};

export default Home;
