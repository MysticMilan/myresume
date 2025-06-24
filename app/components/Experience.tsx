import React from "react";

const Experience = () => (
  <section id="experience" className="max-w-3xl mx-auto my-12 px-6">
    <h2 className="text-3xl font-bold mb-6 text-center">
      Professional Experience
    </h2>
    <div className="space-y-6">
      <div className="bg-base-100/80 rounded-xl shadow p-6">
        <h3 className="text-xl font-semibold">
          Dotnet Developer, Microcode Technologies
        </h3>
        <span className="text-sm text-gray-500">Apr 2024 - Dec 2024</span>
        <ul className="list-disc ml-6 mt-2 text-base-content/80">
          <li>
            Enhanced Loan Management System backend by adding new features and
            implementing Onion Architecture.
          </li>
          <li>
            Developed and tested REST APIs using Postman; utilized GitLab for
            version control and project management.
          </li>
          <li>
            Worked on Microservice Architecture for improved scalability and
            maintainability.
          </li>
        </ul>
      </div>
      <div className="bg-base-100/80 rounded-xl shadow p-6">
        <h3 className="text-xl font-semibold">
          Internship, Upcode Nepal Pvt Ltd
        </h3>
        <span className="text-sm text-gray-500">Nov 2023 - Feb 2024</span>
        <ul className="list-disc ml-6 mt-2 text-base-content/80">
          <li>
            Enhanced ERP systems and developed a REST API for a judicial
            management system, implementing and testing with Swagger UI.
          </li>
          <li>
            Architected scalable 3-tier and n-tier systems, applying
            Object-Oriented Development principles.
          </li>
        </ul>
      </div>
    </div>
  </section>
);

export default Experience;
