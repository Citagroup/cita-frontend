import React, { useState } from "react";

function Reports() {
  const [text, setText] = useState("");
  const [images, setImages] = useState([]);
  const [documents, setDocuments] = useState([]);
  const [submittedReports, setSubmittedReports] = useState([]);

  const handleSubmit = () => {
    const report = {
      text,
      images,
      documents,
      time: new Date().toLocaleString(),
    };
    setSubmittedReports([...submittedReports, report]);
    setText("");
    setImages([]);
    setDocuments([]);
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>📋 Bericht verfassen</h2>

      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows={6}
        placeholder="Berichtstext eingeben..."
        style={{ width: "100%", marginBottom: "1rem" }}
      />

      <div>
        <label>📷 Bilder hochladen:</label>
        <input
          type="file"
          accept="image/*"
          multiple
          onChange={(e) => setImages([...e.target.files])}
        />
      </div>

      <div>
        <label>📄 Dokumente hochladen:</label>
        <input
          type="file"
          accept=".pdf,.doc,.docx"
          multiple
          onChange={(e) => setDocuments([...e.target.files])}
        />
      </div>

      <button onClick={handleSubmit} style={{ marginTop: "1rem" }}>
        ✅ Bericht speichern
      </button>

      <hr style={{ margin: "2rem 0" }} />

      <h3>🗂️ Gespeicherte Berichte</h3>
      {submittedReports.map((report, index) => (
        <div key={index} style={{ border: "1px solid #ccc", padding: "1rem", marginBottom: "1rem" }}>
          <p><strong>📅 Zeit:</strong> {report.time}</p>
          <p>{report.text}</p>

          {report.images.length > 0 && (
            <div>
              <strong>📷 Bilder:</strong>
              <ul>
                {[...report.images].map((file, i) => (
                  <li key={i}>{file.name}</li>
                ))}
              </ul>
            </div>
          )}

          {report.documents.length > 0 && (
            <div>
              <strong>📄 Dokumente:</strong>
              <ul>
                {[...report.documents].map((file, i) => (
                  <li key={i}>{file.name}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Reports;
