import "../App.css";

function Work() {
  return (
    <div className="center-box">
      <div className="work-box">
        <div>
          <h3 className="work-heading">Internships</h3>
          <h6>Athenahealth — Software Engineer Intern</h6>
          <p className="work-desc">JAN 2022 - JUNE 2022</p>
          <p className="work-desc">
            Worked on SOGI, Eligiblity and Security updates on financial
            management system for smaller-to-medium size healthcare provider
            groups
          </p>
          <h6>Humourbaba.com, Remote — Web Development Intern</h6>
          <p className="work-desc">APRIL 2020 - MAY 2020</p>
          <p className="work-desc">
            Realized UI design of the admin panel into highly ecient and
            interactive web pages using ReactJs and integrating it with the
            database
          </p>
          <h6>
            UNV Information & Communication Technology Section, Remote — Data
            Visualisation Volunteer
          </h6>
          <p className="work-desc">APRIL 2020 - JUNE 2020</p>
          <p className="work-desc">
            Responsible for creating highly visual and interactive report using
            Power BI and Python representing the gender volunteering data of UN
            Volunteers
          </p>
        </div>
        <div>
          <h3 className="work-heading">Education</h3>
          <h6>
            VIT University, Vellore — Bachelor Of Technology (Computer Science)
          </h6>
          <p className="work-desc">JULY 2018 - 2022</p>
          <p className="work-desc">
            Courses- Operating System, Database Management System, Data
            Structures and Algorithms, Internet and Web Programming, Computer
            Networks
            {/* <b><i>{" "}Current CGPA - 8.74</i></b> */}
          </p>
        </div>
        <div>
          <h3 className="work-heading">Organisations</h3>
          <h6>Technical Head IEEE Women In Engineering</h6>
          <p className="work-desc">FEB 2020 - JAN 2021</p>
          <p className="work-desc">
            Responsible for ideating and organizing technical events
          </p>
          <h6>General Body Member - AIESEC in VIT</h6>
          <p className="work-desc">DEC 2018 - NOV 2019</p>
          <p className="work-desc">
            Responsible for attraction consideration for Outgoing Global
            Entrepreneur
          </p>
        </div>
      </div>
    </div>
  );
}

export default Work;
