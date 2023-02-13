import './Index.scss'

export default function AboutME(){
    return(
      <div className="About-Container">
        <div className="About-Me">
        <h1 className="page-title">About Me</h1>
        <article className="content">
        <section className="content__descriptor">
          {/* <h2 class="content__title">Info</h2> */}
          <img className="content__img" src = "zoro.jpg" alt='me'></img>
        </section>
        <section className="content__text-box">


          <p className="content__text">
            We aim to be the investors we wished we had when we started out.
            Lightning-fast, always on your side and fundamentally helpful.
          </p>
          <p className="content__text">
            Our knowledge is your knowledge. Our network is your network. Your
            problems are our problems. We don't have all the answers, but we
            will help you find them.
          </p>
        </section>
        </article>
        </div>
      </div>
    )
  }

