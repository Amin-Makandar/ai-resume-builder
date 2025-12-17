import React, { useState, useEffect, useRef } from "react";
import ResumePreview from "../components/ResumePreview";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const Template = () => {
  const [personal, setPersonal] = useState({});
  const [education, setEducation] = useState([]);
  const [experience, setExperience] = useState([]);
  const [skills, setSkills] = useState("");
  const [template, setTemplate] = useState("template1");

  const previewRef = useRef();

  // Load user data from localStorage
  useEffect(() => {
    const savedPersonal = JSON.parse(localStorage.getItem("personal")) || {};
    const savedEducation = JSON.parse(localStorage.getItem("education")) || [];
    const savedExperience = JSON.parse(localStorage.getItem("experience")) || [];
    const savedSkills = localStorage.getItem("skills") || "";

    setPersonal(savedPersonal);
    setEducation(savedEducation);
    setExperience(savedExperience);
    setSkills(savedSkills);
  }, []);

  // Download PDF using html2canvas + jsPDF
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
      <h2 className="mb-4">Choose Your Resume Template</h2>

      {/* Template buttons */}
      <div className="mb-3 template-buttons">
        {["template1", "template2", "template3"].map((temp) => (
          <button
            key={temp}
            className={`btn template-btn ${template === temp ? "active" : ""}`}
            onClick={() => setTemplate(temp)}
          >
            {temp.replace("template", "Template ")}
          </button>
        ))}
      </div>

      {/* Download Button */}
      <div className="mb-3">
        <button className="btn btn-success" onClick={downloadPDF}>
          Download Resume as PDF
        </button>
      </div>

      {/* Resume Preview */}
      <ResumePreview
        ref={previewRef}
        personal={personal}
        education={education}
        experience={experience}
        skills={skills}
        template={template} // Dynamic template
      />
    </div>
  );
};

export default Template;
