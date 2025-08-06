import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="contact">
      <h2>Contact Me</h2>
      <p>If you would like to get in touch, feel free to reach out through any of the following methods:</p>
      <ul>
        <li>
          <strong>Email:</strong> <a href="mailto:Oghenesuvweomashone@proton.me">Oghenesuvweomashone@proton.me</a>
        </li>
        <li>
          <strong>Phone:</strong> +123 456 7890
        </li>
        <li>
          <strong>LinkedIn:</strong>{' '}
          <a href="https://www.linkedin.com/in/oghenesuvwe" target="_blank" rel="noopener noreferrer">
            www.linkedin.com/in/oghenesuvwe
          </a>
        </li>
        <li>
          <strong>GitHub:</strong>{' '}
          <a href="https://github.com/Oghenesuvwe-dev" target="_blank" rel="noopener noreferrer">
            github.com/your-username
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Contact;
