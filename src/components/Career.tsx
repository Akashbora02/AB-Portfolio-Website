import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>DevOps Engineer</h4>
                <h5>Hisan Labs Pvt. Ltd.</h5>
              </div>
              <h3>2025 - Present</h3>
            </div>
            <p>
              Designed and implemented end-to-end DevOps lifecycle for microservices-based applications handling production workloads on AWS and GCP. Built and optimized CI/CD pipelines using Jenkins, GitHub Actions, and GitLab. Implemented GitOps workflows using Argo CD.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Linux Client Support Engineer</h4>
                <h5>Tradetron Tech Pvt. Ltd.</h5>
              </div>
              <h3>2023 - 2024</h3>
            </div>
            <p>
              Managed and monitored Linux-based production servers (RHEL, CentOS, Ubuntu), ensuring high availability. Troubleshot system, network, and performance issues, reducing downtime. Automated routine tasks using shell scripting.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>DevOps Trainee</h4>
                <h5>Hands-on Building</h5>
              </div>
              <h3>2024 - 2025</h3>
            </div>
            <p>
              Focused on transitioning into DevOps by building hands-on projects, such as Containerized Node.js Applications on AWS ECS Fargate, 2-Tier Flask Applications on EKS, and Serverless Python API deployments using Lambda.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
