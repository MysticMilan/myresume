import React from "react";

const Projects = () => (
  <section id="projects" className="max-w-3xl mx-auto my-12 px-6">
    <h2 className="text-3xl font-bold mb-6 text-center">Projects</h2>
    <div className="bg-base-100/80 rounded-xl shadow p-6">
      <h3 className="text-xl font-semibold">
        CyferVote: A Secure, Blockchain-Based Online Voting System
      </h3>
      <span className="text-sm text-gray-500">
        Jun 2024 - Dec 2024 | Lincoln University College, Malaysia
      </span>
      <ul className="list-disc ml-6 mt-2 text-base-content/80">
        <li>
          A blockchain-based voting system enabling secure global voting for
          Nepali citizens.
        </li>
        <li>
          Utilizes Node.js, Express.js, React.js for development, with
          PostgreSQL for data management.
        </li>
        <li>
          Provides secure registration, encrypted voting, and real-time results
          using Solidity on Ethereum.
        </li>
      </ul>
    </div>
  </section>
);

export default Projects;
