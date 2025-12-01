const Home = () => (
  <>
    
    {/* Hero Section */}

    <section className="bg-[#0A0B1E] w-full h-[992px] text-[#F8FAFC] flex items-center justify-center">
      <div className="w-full flex items-center justify-center px-5">
        <div className="relative w-full max-w-[1800px]">
          {/* Video */}
          <video
            src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExaTVibXBpa2N2eXJvaDJ4djNxZ2xqaGlxdjRxc3h2MGg2a3Qzdms4dSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l1ugcRglYlcoisnIY/giphy.mp4"
            autoPlay
            loop
            muted
            className="w-full h-auto object-contain "
          />

          {/* Overlay */}
          <div className="absolute top-0 left-0 w-full h-full bg-[#3344DC] opacity-[0.45] pointer-events-none"></div>
        </div>
      </div>
    </section>

    {/* Phần 1 */}

    <section className="w-full h-[1088px] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url("/assets/home/part1.png")` }}>
      <div className="w-full h-full bg-black/30 flex items-center justify-center">
          <h2 className="text-white text-4xl font-bold">Welcome to DeepVision</h2>
      </div>
    </section>

    {/* Phần 2 */}

    <section className="w-full h-[1093px] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url("/assets/home/part2.png")` }}>
      <div className="w-full h-full bg-black/30 flex items-center justify-center">
          <h2 className="text-white text-4xl font-bold">Welcome to DeepVision</h2>
      </div>
    </section>
    {/* Feedback */}
    <section className="w-full h-[826px] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url("/assets/home/part3.png")` }}>
      <div className="w-full h-full bg-black/30 flex items-center justify-center">
          <h2 className="text-white text-4xl font-bold">Welcome to DeepVision</h2>
      </div>
    
    </section>

    {/* Footer */}

    <section className="w-full h-[450px] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url("/assets/home/footer.png")` }}>
      <div className="w-full h-full bg-black/30 flex items-center justify-center">
          <h2 className="text-white text-4xl font-bold">Welcome to DeepVision</h2>
      </div>
    
    </section>

  </>
);

export default Home;