import React, { forwardRef } from "react";
// import "./ResumePreview.css"; // Add your CSS

const ResumePreview = forwardRef(({ personal, education, experience, skills, template = "template1" }, ref) => {
  const skillList = skills.split(",").map(s => s.trim()).filter(Boolean);

  return (
    <div ref={ref} className={`resume-preview ${template}`}>
      {/* Header */}
      <div className="resume-header mb-4">
        <h2 className="resume-name">{personal.name || "Your Name"}</h2>
        <p className="resume-contact">
          {personal.email && <span>{personal.email} | </span>}
          {personal.phone && <span>{personal.phone}</span>}
        </p>
      </div>

      {/* Summary */}
      {personal.summary && (
        <div className="resume-section summary-section mb-3">
          <h5 className="section-title">Professional Summary</h5>
          <p>{personal.summary}</p>
        </div>
      )}

      {/* Education */}
      {education.length > 0 && (
        <div className="resume-section education-section mb-3">
          <h5 className="section-title">Education</h5>
          {education.map((edu, index) => (
            <div key={index} className="edu-card mb-2">
              <div className="edu-degree">{edu.degree || "Degree"}</div>
              <div className="edu-school">{edu.school || "School/College"}</div>
              <div className="edu-details">{edu.year || "Year"} | {edu.place || "Place"}</div>
            </div>
          ))}
        </div>
      )}

      {/* Experience */}
      {experience.length > 0 && (
        <div className="resume-section experience-section mb-3">
          <h5 className="section-title">Experience</h5>
          {experience.map((exp, index) => (
            <div key={index} className="exp-card mb-2">
              {exp.type === "Experienced" ? (
                <>
                  <div className="exp-role">{exp.role || "Role"}</div>
                  <div className="exp-company">{exp.company || "Company"}</div>
                  <div className="exp-duration">{exp.duration || "Duration"}</div>
                  <p className="exp-desc">{exp.description}</p>
                </>
              ) : (
                <>
                  <div className="exp-type">Fresher</div>
                  {exp.certifications && <p className="exp-cert">Certifications: {exp.certifications}</p>}
                  {exp.projects && <p className="exp-projects">Projects: {exp.projects}</p>}
                </>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Skills */}
      {skillList.length > 0 && (
        <div className="resume-section skills-section mb-3">
          <h5 className="section-title">Skills</h5>
          <div className="skills-badges">
            {skillList.map((skill, index) => (
              <span key={index} className="skill-badge">{skill}</span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
});

export default ResumePreview;
