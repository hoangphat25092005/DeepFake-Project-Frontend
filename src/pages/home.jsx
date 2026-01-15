const Home = () => (
  <>
    
    {/* Hero Section */}

    <section className="bg-[#0A0B1E] w-full pt-1 text-[#F8FAFC] flex items-center justify-center">
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
          <div className="absolute top-0 left-0 w-full h-full bg-[#3344DC] opacity-[0.45] pointer-events-none">
          </div>
          {/* Text Overlay */}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
            <img src="/assets/home/logo.png" alt="Logo" className="h-[114px] w-[114px] absolute top-[170px] left-[170px]" />
            <p className="text-[2rem] italic absolute top-[200px] left-[260px]">DeepVision</p>
            <p className="text-[3.5rem] font-bold absolute top-[250px] left-[200px]">Detect the Fake</p>
            <p className="text-[3.5rem] font-bold absolute top-[305px] left-[200px] opacity-70">Protect the Truth</p>
            <p className="text-[1.5rem] italic absolute top-[380px] left-[200px]">Fast detection - instant alerts - safeguarding<br /> individuals and organizations from misinformation.</p>
          </div>
          {/* Button Overlay */}
        </div>
      </div>
    </section>

    {/* Phần 1 */}

    <section className=" w-full h-[800px] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url("/assets/home/part1.png")` }}>
      <div className="pl-[6rem] pt-[12rem] h-full bg-black/30 flex flex-col justify-left">
          <p className="text-white text-[2rem] font-bold">Built for journalists, enterprises,<br /> security teams, and creators who<br />
           need reliable, real-time authenticity<br/> verification.</p>
          <p className="text-white pt-5 text-[1.5rem] italic">Fast detection, instant alerts, and seamless integration<br /> through APIs and dashboards</p>
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




  </>
);

export default Home;