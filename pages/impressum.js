import styles from "../styles/pages/Impressum.module.scss"; 
import {NextSeo} from 'next-seo';
import Footer from "../components/footer";

const Impressum = () => {

    const SEO = {
        title: 'Impressum - MovieRec'
    }

    return (
        <>
        <NextSeo {...SEO}/>
        <div className="container">
            <div className={styles.impressbox}>
                <h1>Impressum</h1>
                <div className={styles.infobox}>
                    <h3>Verantwortlicher</h3>
                    <p>Tim Peters <br/>
                    Hochschule Offenburg <br/>
                    Badstraße 24 <br/>
                    77652 Offenburg
                    </p>
                </div>
                <div className={styles.infobox}>
                    <h3>Kontakt</h3>
                    <p>tpeters@stud.hs-offenburg.de<br/>
                    info@hs-offenburg.de
                    </p>
                </div>
                <div className={styles.infobox}>
                    <h3>Haftung für Inhalte</h3>
                    <p>Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen 
                        verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder 
                        gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.<br/><br/>
                        Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. 
                        Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. 
                        Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
                    </p>
                </div>
                <div className={styles.infobox}>
                    <h3>Urheberrecht</h3>
                    <p>Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten 
                    unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung 
                    und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der 
                    schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien 
                    dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. <br/><br/>
                    Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die 
                    Urheberrechte Dritter beachtet. Bei Bekanntwerden von Rechtsverletzungen 
                    werden wir derartige Inhalte umgehend entfernen. Als Quellen der Informationstexte und Bilder wurden von TMDb und Wikipedia entnommen und
                    dienen lediglich demonstrativen und keinen kommerziellen Zewcken.
                    </p>
                </div>
            </div>
        </div>
        <Footer/>
        </> 
     );
}
 
export default Impressum;