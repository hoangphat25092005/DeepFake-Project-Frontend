import React, { useState, useEffect } from "react";

const Feedback = () => {
  const [feedback, setFeedback] = useState("");
  const [recentFeedback, setRecentFeedback] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchFeedback();
  }, []);

  const fetchFeedback = async () => {
    try {
      const response = await fetch("http://localhost:3000/feedback");
      if (response.ok) {
        const data = await response.json();
        setRecentFeedback(data);
      }
    } catch (error) {
      console.error("Failed to fetch feedback:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!feedback.trim()) return;

    setLoading(true);
    try {
      const token = localStorage.getItem("token");
      const response = await fetch("http://localhost:3000/feedback", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json", 
          Authorization: `Bearer ${token}` 
        },
        body: JSON.stringify({ message: feedback }),
      });

      if (response.ok) {
        setFeedback("");
        fetchFeedback(); // Refresh feedback list
      }
    } catch (error) {
      console.error("Failed to submit feedback:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section
        className="w-full min-h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url("/assets/aboutus/background.png")` }}
      >
        <div className="w-full min-h-screen bg-black/30 flex items-center justify-center p-6">
          <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Submit Feedback Section */}
            <div className="bg-[#1e2a3a] rounded-3xl p-8 border border-[#2A2D3A]">
              <h2 className="text-white text-3xl font-bold mb-6">Submit Feedback</h2>
              <div className="h-px bg-[#2A2D3A] mb-6"></div>

              <form onSubmit={handleSubmit} className="flex flex-col h-[calc(100%-120px)]">
                <textarea
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  placeholder="Share your thoughts about DeepVision"
                  className="w-full flex-1 min-h-[300px] p-4 rounded-2xl bg-[#0F1419] text-white border border-[#2A2D3A] focus:outline-none focus:border-[#5B5FEF] resize-none mb-6"
                  required
                />

                <button
                  type="submit"
                  disabled={loading || !feedback.trim()}
                  className="w-full max-w-sm mx-auto py-3 px-8 rounded-full bg-[#5B5FEF] text-white font-semibold text-lg hover:bg-[#474ad1] transition disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? "Posting..." : "Post Feedback"}
                </button>
              </form>
            </div>

            {/* Recent Feedback Section */}
            <div className="bg-[#1e2a3a] rounded-3xl p-8 border border-[#2A2D3A]">
              <h2 className="text-white text-3xl font-bold mb-6">Recent User Feedback</h2>
              <div className="h-px bg-[#2A2D3A] mb-6"></div>

              <div className="space-y-4 max-h-[600px] overflow-y-auto">
                {recentFeedback.map((item, index) => (
                  <div
                    key={index}
                    className="bg-[#0F1419] rounded-2xl p-6 border border-[#2A2D3A]"
                  >
                    <div className="mb-2">
                      <h3 className="text-white font-bold text-lg">{item.username} :</h3>
                      <p className="text-gray-400 text-sm">{item.timestamp}</p>
                    </div>
                    <p className="text-white">{item.message}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Feedback;
