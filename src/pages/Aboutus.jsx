const Aboutus = () => (
    <>
         <section className="w-full min-h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url("/assets/aboutus/background.png")` }}>
            <div className="w-full min-h-screen bg-black/30 flex items-center justify-center p-6">
                <div className="w-full max-w-6xl">
                    <div className="bg-[#1e2a3a] rounded-3xl p-12 border border-[#2A2D3A]">
                        <h2 className="text-white text-4xl font-bold mb-8">About DeepVision</h2>
                        <div className="h-px bg-[#2A2D3A] mb-8"></div>
                        <div className="text-gray-300 text-lg leading-relaxed space-y-6">
                            <p>
                                DeepVision was founded by a team of computational scientists, cryptographers, and media forensics experts 
                                dedicated to preserving digital trust. We believe that robust, transparent, and peer-reviewed scientific 
                                methods are the only path to effectively combatting the rise of synthetic media.
                            </p>
                            <p>
                                Our research is published in leading journals, focusing on explainable AI (XAI) for detection, ensuring that our 
                                probability scores are fully auditable and grounded in observable artifacts. We partner with academic 
                                institutions globally to ensure our detection models remain ahead of generative technology trends.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
);

export default Aboutus;