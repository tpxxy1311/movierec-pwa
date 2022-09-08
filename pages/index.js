import styles from "../styles/pages/Home.module.scss"; 
import { UilAngleRight, UilInfoCircle } from '@iconscout/react-unicons';
import Image from "next/image";
import Link from "next/link";
import CookiePanel from "../components/cookiePanel";
import Footer from "../components/footer";

export default function Home() {

  return (
    <>
    <CookiePanel/>
    <section className={styles.landingsection}>
      <div className={styles.contentbox}>
        <div className={styles.imagewrapper}>
          <div className={styles.imagecontainer}>
            <img src="graphics/camera.png" alt="MovieRec"/>
          </div>
          <div className={styles.shadowcontainer}>
            <div className={styles.shadow}></div>
          </div>
        </div>
        <h1>MovieRec</h1>
        <h2>
          Dein soziales Filmnetzwerk.<br/>
          Markiere was du sehen möchtest. <br/>
          Teile deine Empfehlungen. <br/>
        </h2>
        <div className={styles.linkbox}>
            <Link href="/registrierung">
              <a>Jetzt registrieren<UilAngleRight className={styles.linkIcon}/></a>
            </Link>
        </div>
      </div>
    </section>
    <section className={styles.panelsection}>
      <div className={styles.contentbox}>
        <h1>Vorteile</h1>
        <h2>Diese Features bietet <br/>MovieRec für dich</h2>
        <div className={styles.panelbox}>
            <div className={styles.description}>
              <h5>Das Netzwerk für alle Filmliebhaber</h5>
              <p>Finde alle Informationen zu deinen Lieblingsfilmen.
                Bewerte, speichere Filme in persönlichen Listen und
                teile deine Meinung mit Freunden und anderen
                Filmfans. Jetzt Kostenlos registrieren und nutzen.
              </p>
            </div>
            <div className={styles.grid}> 
              <div className={styles.smallcard}>
                <div className={styles.stat}>
                  <span className={styles.number}>200</span>
                  <span className={styles.add}>+</span>
                </div>
                <p>Filme</p>
              </div>
              <div className={styles.smallcard}>
                <div className={styles.stat}>
                  <span className={styles.number}>9</span>
                  <span className={styles.low}>Genre</span>
                </div>
                <p>zu entdecken</p>
              </div>
              <div className={styles.smallcard}>
                <div className={styles.stat}>
                  <span className={styles.number}>50</span>
                  <span className={styles.add}>+</span>
                </div>
                <p>begeisterte User</p>
              </div>
              <div className={styles.smallcard}>
                <div className={styles.stat}>
                  <span className={styles.number}>100</span>
                  <span className={styles.low}>%</span>
                </div>
                <p>Leidenschaft</p>
              </div>
            </div>
            <div className={styles.widecard}>
              <div className={styles.textside}>
                <h5>Überblick über <br/> deine Filme</h5>
                <p>Speichere interessante Filme in einer persönlichen Watchlists
                  und verwalte deine bereits gesehenen Filme um immmer den 
                  Überblick zu behalten und nichts mehr zu verpassen. </p>
              </div>
              <img src="graphics/watchlist.svg" alt="Watchlists mit MovieRec verwalten"/>
            </div>
            <div className={`${styles.bigcard} ${styles.connect}`}>
                <p>Auch Offline <br/>verfügbar</p>
                <img src="graphics/connect.svg" alt="MovieRec Offline Support"/>
            </div>
            <div className={`${styles.bigcard} ${styles.install}`}>
                <img src="graphics/install.png" alt="MovieRec einfach installieren"/>
                <p>Einfach installieren</p>
            </div>
        </div>
        <div className={styles.asymetrical}>
          <div className={styles.narrowcard}><p>Automatische Updates</p></div>
          <div className={styles.widecard}>
            <p>Auf allen deinen Geräten</p>
            <img src="graphics/responsiv.png" alt="MovieRec ist vollständig responsiv"/>
          </div>
        </div>
        <div className={styles.bottompanel}>
          <div className={`${styles.bigcard} ${styles.rating}`}>
            <p>Teile deine Meinung</p>
            <img src="graphics/rating.svg" alt="MovieRec lässt dich deine Meinung teilen"/>
          </div>
          <div className={`${styles.bigcard} ${styles.friends}`}>
            <p>Vernetze dich <br/> mit Freunden </p>
            <img src="graphics/sharing.svg" alt="MovieRec lässt dich mit deinen Freunden vernetzen"/>
          </div>
          <div className={styles.widecard}>
            <p>
              Du hast bereits einen Account?
            </p>
            <Link href="/login">
              <a>Jetzt anmelden <UilAngleRight/></a>
            </Link>
          </div>
        </div>
      </div>
    </section>
    <section className={styles.trendsection}>
        <div className={styles.contentbox}>
          <h1>Entdecken</h1>
          <h2>Diese Filme sind <br/> derzeit beliebt</h2>
          <div className={styles.trendbox}>
            <div className={`${styles.trendcard} ${styles.trendcard1}`}>
              <Link href="/filme/everything-everywhere-all-at-once">
                <div className={styles.linkBlur}>
                  <UilInfoCircle size="40" className={styles.icon}/>
                </div>
              </Link>
              <h6>Everything everywhere <br/> all at once</h6>
              <Image src="/cardimages/card1.png"  width="100px" height="50px" layout="fill" objectFit="cover" className={styles.img} />
            </div>
            <div className={`${styles.trendcard} ${styles.trendcard2}`}>
              <Link href="/filme/top-gun-maverick">
                <div className={styles.linkBlur}>
                  <UilInfoCircle size="40" className={styles.icon}/>
                </div>
              </Link>
              <h6>Top Gun <br/> Maverick</h6>
              <Image src="/cardimages/card3.png"  width="100px" height="50px" layout="fill" objectFit="cover" className={styles.img} />
            </div>
            <div className={`${styles.trendcard} ${styles.trendcard3}`}>
              <Link href="/filme/batman">
                <div className={styles.linkBlur}>
                  <UilInfoCircle size="40" className={styles.icon}/>
                </div>
              </Link>
              <h6>The Batman</h6>
              <Image src="/cardimages/card2.png"  width="100px" height="50px" layout="fill" objectFit="cover" className={styles.img} />
            </div>
            <div className={`${styles.trendcard} ${styles.trendcard4}`}>
              <Link href="/filme/the-northman">
                <div className={styles.linkBlur}>
                  <UilInfoCircle size="40" className={styles.icon}/>
                </div>
              </Link>
              <h6>The Northman</h6>
              <Image src="/cardimages/card4.png"  width="100px" height="50px" layout="fill" objectFit="cover" className={styles.img} />
            </div>
          </div>
          <div className={styles.linkbox}>
            <Link href="/filme">
              <a>Zu allen Filmen <UilAngleRight className={styles.linkIcon}/></a>
            </Link>
          </div>
        </div>
    </section>
    <section className={styles.contactsection}>
      <div className={styles.contentbox}>
        <h5>Bei weiteren Fragen, Anregungen oder Wünschen...</h5>
        <div className={styles.linkbox}>
           <a href="mailto:kontakt@movierec.com">Kontakt<UilAngleRight className={styles.linkIcon}/></a>
        </div>
      </div>
    </section>
    <Footer/>
    </>
  
  )
}
