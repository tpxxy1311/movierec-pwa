import styles from "../styles/pages/Impressum.module.scss"; 
import {NextSeo} from 'next-seo';
import Footer from "../components/footer";

const Impressum = () => {

    const SEO = {
        title: 'Datenschutz - MovieRec'
    }

    return (
        <>
        <NextSeo {...SEO}/>
        <div className="container">
            <div className={styles.impressbox}>
                <h1>Datenschutz</h1>
                <div className={styles.infobox}>
                    <h3>Allgemeine Hinweise</h3>
                    <p>Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen 
                        Daten passiert, wenn Sie diese Website besuchen. 
                        Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. 
                        Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten 
                        Datenschutzerklärung.
                    </p>
                </div>
                <div className={styles.infobox}>
                    <h3>Wie erfassen wir ihre Daten?</h3>
                    <p>Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. 
                        um Daten handeln, die Sie in ein Kontaktformular eingeben.
                        Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme 
                        erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). 
                        Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.
                    </p>
                </div>
                <div className={styles.infobox}>
                    <h3>Wofür nutzen wir ihre Daten?</h3>
                    <p>Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
                    </p>
                </div>
                <div className={styles.infobox}>
                    <h3>Welche Rechte haben Sie bezüglich der Daten?</h3>
                    <p>Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten 
                        personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung 
                        zur Datenverarbeitung erteilt haben, können Sie diese Einwilligung jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht, unter bestimmten 
                        Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. 
                        Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
                        Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit an uns wenden.
                    </p>
                </div>
                <div className={styles.infobox}>
                    <h3>Externes Hosting</h3>
                    <p>Diese Website wird bei einem externen Dienstleister gehostet (Hoster). Die personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters gespeichert. Hierbei kann es sich v. a. um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe und sonstige Daten, die über eine Website generiert werden, handeln.<br/><br/>
                        Der Einsatz des Hosters erfolgt zum Zwecke der Vertragserfüllung gegenüber unseren potenziellen und bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse einer sicheren, schnellen und effizienten Bereitstellung unseres Online-Angebots durch einen professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO).<br/><br/>
                        Unser Hoster wird Ihre Daten nur insoweit verarbeiten, wie dies zur Erfüllung seiner Leistungspflichten erforderlich ist und unsere Weisungen in Bezug auf diese Daten befolgen.<br/><br/>
                        Wir setzen folgenden Hoster ein:<br/><br/>
                        Vercel Inc.<br/>
                        340 S Lemon Ave #4133<br/>
                        Walnut, CA 91789<br/>
                        United States<br/>


                    </p>
                </div>
            </div>
        </div>
        <Footer/>
        </> 
     );
}
 
export default Impressum;