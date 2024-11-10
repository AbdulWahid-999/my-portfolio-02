import Image from "next/image";


export default function Main() {
  return (
    <body>
      <section className="hero-container">
        <div className="hero-content">
          <div>
          <h1>Hey there! 👋 I’m Muhammad Abdul Wahid</h1>
          <p>
          a 20-year-old web development enthusiast 🚀 with a love for crafting responsive designs and smooth user experiences.<br/> Always learning 📚, always growing 🌱, and ready to bring fresh ideas to life! Dive in and explore my journey so far! 💻✨
          </p>
          </div>
     <div className="img-box">
          <Image src="/men.jpg" alt="Img" width={500} height={500} className="img" />
          </div>
        </div>
      </section>
    </body>
  );
}
