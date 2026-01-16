import React, { useState } from "react";

const Detection = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleRunAnalysis = async () => {
    if (!selectedFile) return;
    
    setLoading(true);
    setError("");
    try {
      const formData = new FormData();
      formData.append("file", selectedFile);

      const response = await fetch("http://localhost:3000/detection", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        const body = await response.json().catch(() => ({}));
        throw new Error(body?.message || body?.error || "Detection failed");
      }

      const data = await response.json();
      const isFake = data?.isFake ?? String(data?.label || "").toUpperCase() === "FAKE";
      const percentage = Math.round((data?.confidence ?? 0) * 100);

      setResult({
        summary: isFake ? "HIGHLY LIKELY FAKE" : "AUTHENTIC",
        percentage,
        label: data?.label,
      });
    } catch (err) {
      console.error(err);
      setResult(null);
      setError(err?.message || "Detection failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section
        className="w-full min-h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url("/assets/detection/background.png")` }}
      >
        <div className="w-full min-h-screen bg-black/30 flex items-center justify-center p-6">
          <div className="w-full max-w-7xl">
            <h1 className="text-white text-4xl font-bold mb-12">Detection Lab</h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left Column - Upload */}
              <div className="bg-[#181A20] rounded-3xl p-8 border border-[#2A2D3A] lg:col-span-2">
                <h2 className="text-2xl font-bold text-white mb-2">Upload Media for Analysis</h2>
                <p className="text-gray-400 text-sm mb-6">
                  Supported formats: JPEG, PNG, WEBP, GIF, BMP. Max file size: 50MB
                </p>

                <div
                  className="border-2 border-dashed border-[#5B5FEF] rounded-2xl p-12 bg-[#0F1419] text-center cursor-pointer hover:border-[#7C80FF] transition mb-6"
                  onClick={() => document.getElementById("fileInput").click()}
                  onDragOver={(e) => e.preventDefault()}
                  onDrop={handleDrop}
                >
                  <input
                    id="fileInput"
                    type="file"
                    accept="image/jpeg,image/png,image/jpg,image/webp,image/gif,image/bmp"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                  
                  {selectedFile ? (
                    <>
                      <img
                        src={URL.createObjectURL(selectedFile)}
                        alt="Uploaded preview"
                        className="w-full max-h-[300px] object-contain rounded-lg mb-4"
                      />
                      <div className="text-green-400 text-2xl mb-2">✓</div>
                      <p className="text-green-400 font-semibold mb-1">
                        File Selected: {selectedFile.name}
                      </p>
                      <p className="text-gray-400 text-sm">Click to change file</p>
                    </>
                  ) : (
                    <>
                      <div className="text-green-400 text-4xl mb-4">📄</div>
                      <p className="text-gray-300 font-semibold mb-1">
                        Drop your media here or click to browse
                      </p>
                      <p className="text-gray-400 text-sm">JPEG, PNG, WEBP, GIF, BMP</p>
                    </>
                  )}
                </div>

                <button
                  onClick={handleRunAnalysis}
                  disabled={!selectedFile || loading}
                  className="w-full py-3 rounded-full bg-[#5B5FEF] text-white font-semibold hover:bg-[#474ad1] transition disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? "Analyzing..." : "Run Deep Analysis"}
                </button>
              </div>

              {/* Right Column - Results */}
              <div className="bg-[#181A20] rounded-3xl p-8 border border-[#2A2D3A] flex flex-col items-center justify-center min-h-[400px]">
                {error && (
                  <div className="w-full text-red-400 bg-red-900/30 border border-red-800 rounded-lg p-3 text-center mb-4">
                    {error}
                  </div>
                )}
                {result ? (
                  <div className="text-center w-full">
                    <h2 className="text-2xl font-bold text-white mb-8">Detection Summary</h2>
                    <div
                      className={`py-6 px-8 rounded-lg font-bold text-xl mb-6 ${
                        result.summary === "HIGHLY LIKELY FAKE"
                          ? "bg-red-900/30 text-red-400"
                          : "bg-teal-900/30 text-teal-400"
                      }`}
                    >
                      {result.summary}
                    </div>
                    <p className="text-gray-400 text-sm">
                      Confidence Score: {result.percentage}%
                    </p>
                  </div>
                ) : (
                  <div className="text-center">
                    <p className="text-gray-400">Upload and analyze a file to see results</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Detection;