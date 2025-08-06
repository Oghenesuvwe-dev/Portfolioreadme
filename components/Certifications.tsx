import React from 'react';

const Certifications = () => {
  return (
    <section id="certifications" className="certifications-section">
      <h2>Certifications</h2>
      <ul>
        <li>
          <a
            href="https://www.credly.com/badges/a521b178-949a-4fe9-b2ce-c23db73e09df/public_url"
            target="_blank"
            rel="noreferrer"
          >
            FinOps Certified Practitioner (FOCP)
          </a>
        </li>
        <li>Oracle Cloud Infrastructure 2025 Certified Foundations Associate</li>
        <li>AWS Cloud Essentials (AWS Educate)</li>
        <li>Microsoft Azure Architecture & Security (via Hagital Consulting)</li>
        <li>AWS Well-Architected Proficient</li>
        <li>Oracle Cloud Success Navigator Essentials</li>
      </ul>
      <a href="https://www.credly.com/users/oghenesuvwe-dev" target="_blank" rel="noreferrer">
        View all my certifications on Credly
      </a>
    </section>
  );
};

export default Certifications;
