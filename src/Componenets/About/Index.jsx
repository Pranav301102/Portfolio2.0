import './Index.scss'

export default function AboutME(){
    return(
      <div className="About-Container">
        <div className="About-Me">
        <h2 className="page-title">About Me</h2>
        <article className="content">
        <section className="content__descriptor">
          {/* <h2 class="content__title">Info</h2> */}
          <img className="content__img" src = "zoro.jpeg" alt='me'></img>
        </section>
        <section className="content__text-box">


          <p className="content__text">
          Hi, I'm a full stack software developer who loves to contribute to open source projects. 
          I enjoy working with different technologies and learning new skills. 
          I'm always looking for new challenges and opportunities to grow as a developer. 

          </p>
          <p className="content__text">
          When I'm not coding, you can find me listening to music or playing badminton with my friends. 
          I'm passionate about creating software that makes a positive impact on the world.
          </p>
        </section>
        </article>
        </div>
        <div className="Achievements">
        <h1 className="Achievements__title">My Achievement</h1>
        <div className="Achievements__container">
          <div className="Achievements__achivement">
          <h3>IEEE Techithon</h3>
          Asst. Technical Head(2022)
          </div>
          <div className="Achievements__achivement">
          <h3>Ember E-Cell</h3>
           Technical Head(2023)
          </div>
          </div>
          <h1 className="Achievements__title">Education</h1>
          <div className="Achievements__container">  
          <div className="Achievements__achivement">
          <h3>B.E. Information Technology</h3>
              Atharva College of Engineering(2024), Mumbai
          </div> 
          </div>
        </div>
      </div>
    )
  }

