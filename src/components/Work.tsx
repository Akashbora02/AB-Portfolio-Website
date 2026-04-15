import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Work = () => {
  useGSAP(() => {
    const workFlex = document.querySelector(".work-flex") as HTMLElement;
    const workContainer = document.querySelector(".work-container") as HTMLElement;
    if (!workFlex || !workContainer) return;

    let getScrollAmount = () => {
      let flexWidth = workFlex.scrollWidth;
      let containerWidth = workContainer.clientWidth;
      
      // Shift left by exactly the overflow amount plus a little aesthetic padding
      return -(flexWidth - containerWidth + 50);
    };

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: "+=2000", // Use a static large pixel distance for a deliberate, cinematic feeling scroll
        scrub: 1,
        pin: true,
        pinSpacing: true, // Force GSAP to strictly prevent following sections from scrolling up early
        id: "work",
        invalidateOnRefresh: true,
      },
    });

    timeline.to(workFlex, {
      x: getScrollAmount,
      ease: "none",
    });

    return () => {
      timeline.kill();
      ScrollTrigger.getById("work")?.kill();
    };
  }, []);
  
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {[
            {
              title: "Containerized Node.js App",
              category: "AWS ECS Fargate",
              tools: "ECS, ECR, Docker, CloudWatch, Node.js",
              image: "/images/nodejs_ecs_app.png"
            },
            {
              title: "2-Tier Flask App Deployment",
              category: "AWS EKS",
              tools: "Docker, Kubernetes, Jenkins, Helm, Flask, MySQL",
              image: "/images/flask_eks_kube.png"
            },
            {
              title: "Serverless Python API",
              category: "AWS Lambda",
              tools: "AWS Lambda, API Gateway, Serverless Framework, Python",
              image: "/images/serverless_python_api.png"
            },
          ].map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>

                  <div>
                    <h4>{project.title}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tools}</p>
              </div>
              <WorkImage image={project.image} alt={project.title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
