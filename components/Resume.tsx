import React from 'react';

const Resume = () => {
  return (
    <section id="resume" className="resume-section">
      <h2>Resume</h2>
      <h3>Oghenesuvwe Omashone</h3>
      <p>📍 Lagos, Nigeria</p>
      <p>📧 <a href="mailto:Oghenesuvweomashone@proton.me">Oghenesuvweomashone@proton.me</a></p>
      <p>🔗 <a href="https://www.linkedin.com/in/oghenesuvwe" target="_blank" rel="noreferrer">www.linkedin.com/in/oghenesuvwe</a></p>

      <h4>PROFESSIONAL SUMMARY</h4>
      <p>
        Experienced DevOps Engineer with a strong background in cloud development (AWS, Azure) and FinOps. With over 3 years of hands-on experience in app development (C and Python),
        I’ve transitioned into cloud DevOps and cost optimization roles, enabling seamless CI/CD pipelines, infrastructure automation, and cloud cost reduction.
        I bring expertise in Terraform, Azure DevOps, and AWS to deliver robust solutions while ensuring scalability and security. Adept at building secure, automated workflows to drive business agility and cost efficiency.
      </p>

      <h4>CERTIFICATIONS</h4>
      <ul>
        <li>✅ FinOps Certified Practitioner (FOCP)</li>
        <li>✅ Oracle Cloud Infrastructure 2025 Certified Foundations Associate</li>
        <li>✅ AWS Cloud Essentials (AWS Educate)</li>
        <li>✅ Microsoft Azure Architecture & Security (via Hagital Consulting)</li>
        <li>✅ AWS Well-Architected Proficient</li>
        <li>✅ Oracle Cloud Success Navigator Essentials</li>
      </ul>

      <h4>TECHNICAL SKILLS</h4>
      <ul>
        <li>Cloud Platforms: AWS, Azure</li>
        <li>DevOps & CI/CD: Azure DevOps, GitHub Actions, Terraform, Helm, Docker, Kubernetes</li>
        <li>Automation & Monitoring: Prometheus, Grafana, Infracost, OpenCost</li>
        <li>Programming: C, Python, .NET</li>
        <li>FinOps Tools: Power BI, SQL HeatWave, Google Sheets, Metabase</li>
        <li>Other Tools: Git, BitBucket, GitLab, Apache Superset</li>
      </ul>

      <h4>PROFESSIONAL EXPERIENCE</h4>
      <div>
        <h5>Cloud DevOps & FinOps Engineer</h5>
        <p>Hagital Consulting | Lagos, Nigeria</p>
        <p>Aug 2024 – Feb 2025</p>
        <ul>
          <li>Designed and automated cloud infrastructure deployments using Terraform, Azure DevOps, and AWS.</li>
          <li>Managed end-to-end CI/CD pipelines, ensuring smooth integration and deployment cycles.</li>
          <li>Led FinOps initiatives, implementing cloud cost monitoring tools like Power BI and SQL HeatWave to optimize cloud spend.</li>
          <li>Collaborated with cross-functional teams to integrate DevOps practices into cloud environments, driving efficiencies and reducing provisioning time.</li>
        </ul>
      </div>
      <div>
        <h5>App Developer</h5>
        <p>National Institute of Information Technology (NIIT)</p>
        <p>Aug 2022 – Mar 2023</p>
        <ul>
          <li>Developed web and backend applications using C and Python.</li>
          <li>Designed and integrated secure RESTful APIs, ensuring high performance and scalability.</li>
          <li>Automated deployment processes using Azure DevOps, streamlining the development lifecycle and reducing manual tasks.</li>
        </ul>
      </div>
      <div>
        <h5>Freelance App Developer</h5>
        <p>Remote</p>
        <p>Jan 2023 – Present</p>
        <ul>
          <li>Built full-stack applications with a focus on Python for backend services and C for enterprise-level solutions.</li>
          <li>Implemented automated deployment pipelines using Azure DevOps and integrated cloud services for scalable applications.</li>
        </ul>
      </div>

      <h4>EDUCATION</h4>
      <div>
        <h5>Diploma in Cloud Computing</h5>
        <p>Hagital Consulting - Aug 2024 - Feb 2025</p>
      </div>
      <div>
        <h5>Associate's Degree in Computer Science</h5>
        <p>National Institute of Information Technology (NIIT) - Aug 2022 – Mar 2023</p>
      </div>
      <div>
        <h5>B.Sc. in Banking and Finance</h5>
        <p>Delta State University, Nigeria - Sep 2014 – Sep 2018</p>
      </div>

      <h4>PROJECT HIGHLIGHTS</h4>
      <div>
        <h5>Multi-Cloud Infrastructure Automation</h5>
        <p>Led a multi-cloud infrastructure deployment using Terraform and Helm, improving uptime and reducing provisioning time.</p>
      </div>
      <div>
        <h5>FinOps Dashboard Development</h5>
        <p>Developed a Power BI dashboard with SQL HeatWave  integration to visualize and optimize cloud spend, improving cost decisions.</p>
      </div>
      <div>
        <h5>CI/CD Pipeline Implementation</h5>
        <p>Automated CI/CD workflows for cloud-native applications using Azure DevOps and GitHub Actions.</p>
      </div>

      <h4>AVAILABILITY</h4>
      <p>Open to Remote or Hybrid roles in DevOps Engineering, Cloud Development, and FinOps Strategy.</p>
    </section>
  );
};

export default Resume;