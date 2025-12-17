import React, { useState, useEffect, useRef } from "react";
import ResumePreview from "../components/ResumePreview";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const ResumeBuilder = () => {
  const [personal, setPersonal] = useState({
    name: "",
    email: "",
    phone: "",
    summary: "",
  });

  const [education, setEducation] = useState([{ degree: "", school: "", year: "", place: "" }]);
  const [experience, setExperience] = useState([
    { type: "Fresher", role: "", company: "", duration: "", description: "", certifications: "", projects: "" }
  ]);

  const [skills, setSkills] = useState("");

  const previewRef = useRef();

  // Load data from localStorage
  useEffect(() => {
    const savedPersonal = localStorage.getItem("personal");
    const savedEducation = localStorage.getItem("education");
    const savedExperience = localStorage.getItem("experience");
    const savedSkills = localStorage.getItem("skills");

    if (savedPersonal) setPersonal(JSON.parse(savedPersonal));
    if (savedEducation) setEducation(JSON.parse(savedEducation));
    if (savedExperience) setExperience(JSON.parse(savedExperience));
    if (savedSkills) setSkills(savedSkills);
  }, []);

  // Save to localStorage
  useEffect(() => { localStorage.setItem("personal", JSON.stringify(personal)); }, [personal]);
  useEffect(() => { localStorage.setItem("education", JSON.stringify(education)); }, [education]);
  useEffect(() => { localStorage.setItem("experience", JSON.stringify(experience)); }, [experience]);
  useEffect(() => { localStorage.setItem("skills", skills); }, [skills]);

  // Education Handlers
  const addEducation = () => setEducation([...education, { degree: "", school: "", year: "", place: "" }]);
  const removeEducation = (index) => setEducation(education.filter((_, i) => i !== index));
  const handleEducationChange = (index, field, value) => {
    const newEdu = [...education];
    newEdu[index][field] = value;
    setEducation(newEdu);
  };

  // Experience Handlers
  const addExperience = () => setExperience([...experience, { type: "Fresher", role: "", company: "", duration: "", description: "", certifications: "", projects: "" }]);
  const removeExperience = (index) => setExperience(experience.filter((_, i) => i !== index));
  const handleExperienceChange = (index, field, value) => {
    const newExp = [...experience];
    newExp[index][field] = value;
    setExperience(newExp);
  };

  // Download PDF
  const downloadPDF = () => {
    if (!previewRef.current) return alert("Resume not found!");
    html2canvas(previewRef.current, { scale: 2, useCORS: true }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "pt", "a4");
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("My_Resume.pdf");
    }).catch((err) => {
      console.error(err);
      alert("Failed to generate PDF");
    });
  };

  return (
    <div className="container py-4">
      <div className="row">
        {/* Form Section */}
        <div className="col-lg-6 mb-4">
          <h2 className="mb-3 text-center">Resume Builder</h2>

          {/* Personal Info */}
          <div className="card p-3 mb-3 shadow-sm">
            <h5 className="mb-2">Personal Info</h5>
            <input type="text" placeholder="Full Name" className="form-control mb-2" value={personal.name} onChange={(e) => setPersonal({ ...personal, name: e.target.value })} />
            <input type="email" placeholder="Email" className="form-control mb-2" value={personal.email} onChange={(e) => setPersonal({ ...personal, email: e.target.value })} />
            <input type="text" placeholder="Phone" className="form-control mb-2" value={personal.phone} onChange={(e) => setPersonal({ ...personal, phone: e.target.value })} />
            <textarea placeholder="Professional Summary" className="form-control mb-2" value={personal.summary} onChange={(e) => setPersonal({ ...personal, summary: e.target.value })} />
          </div>

          {/* Education Section */}
          <div className="card p-3 mb-3 shadow-sm">
            <h5 className="mb-2">Education</h5>
            {education.map((edu, index) => (
              <div key={index} className="mb-2 border-bottom pb-2">
                <input type="text" placeholder="Degree" className="form-control mb-1" value={edu.degree} onChange={(e) => handleEducationChange(index, "degree", e.target.value)} />
                <input type="text" placeholder="School/College" className="form-control mb-1" value={edu.school} onChange={(e) => handleEducationChange(index, "school", e.target.value)} />
                <input type="text" placeholder="Year" className="form-control mb-1" value={edu.year} onChange={(e) => handleEducationChange(index, "year", e.target.value)} />
                <input type="text" placeholder="Place" className="form-control mb-1" value={edu.place} onChange={(e) => handleEducationChange(index, "place", e.target.value)} />
                <button className="btn btn-danger btn-sm mt-1" onClick={() => removeEducation(index)}>Remove</button>
              </div>
            ))}
            <button className="btn btn-primary btn-sm mt-2" onClick={addEducation}>Add Education</button>
          </div>

          {/* Experience Section */}
          <div className="card p-3 mb-3 shadow-sm">
            <h5 className="mb-2">Experience</h5>
            {experience.map((exp, index) => (
              <div key={index} className="mb-2 border-bottom pb-2">
                <select className="form-select mb-1" value={exp.type} onChange={(e) => handleExperienceChange(index, "type", e.target.value)}>
                  <option value="Fresher">Fresher</option>
                  <option value="Experienced">Experienced</option>
                </select>

                {exp.type === "Experienced" ? (
                  <>
                    <input type="text" placeholder="Role" className="form-control mb-1" value={exp.role} onChange={(e) => handleExperienceChange(index, "role", e.target.value)} />
                    <input type="text" placeholder="Company" className="form-control mb-1" value={exp.company} onChange={(e) => handleExperienceChange(index, "company", e.target.value)} />
                    <input type="text" placeholder="Duration" className="form-control mb-1" value={exp.duration} onChange={(e) => handleExperienceChange(index, "duration", e.target.value)} />
                    <textarea placeholder="Description" className="form-control mb-1" value={exp.description} onChange={(e) => handleExperienceChange(index, "description", e.target.value)} />
                  </>
                ) : (
                  <>
                    <input type="text" placeholder="Certifications" className="form-control mb-1" value={exp.certifications} onChange={(e) => handleExperienceChange(index, "certifications", e.target.value)} />
                    <input type="text" placeholder="Projects" className="form-control mb-1" value={exp.projects} onChange={(e) => handleExperienceChange(index, "projects", e.target.value)} />
                  </>
                )}

                <button className="btn btn-danger btn-sm mt-1" onClick={() => removeExperience(index)}>Remove</button>
              </div>
            ))}
            <button className="btn btn-primary btn-sm mt-2" onClick={addExperience}>Add Experience</button>
          </div>

          {/* Skills */}
          <div className="card p-3 mb-3 shadow-sm">
            <h5 className="mb-2">Skills (comma separated)</h5>
            <input type="text" placeholder="e.g., React, Node.js, Python" className="form-control" value={skills} onChange={(e) => setSkills(e.target.value)} />
          </div>

          {/* Download Button */}
          <button className="btn btn-success mt-3 w-100" onClick={downloadPDF}>Download Resume as PDF</button>
        </div>

        {/* Resume Preview Section */}
        <div className="col-lg-6 mb-4">
          <h2 className="mb-3 text-center">Resume Preview</h2>
          <ResumePreview ref={previewRef} personal={personal} education={education} experience={experience} skills={skills} />
        </div>
      </div>
    </div>
  );
};

export default ResumeBuilder;
