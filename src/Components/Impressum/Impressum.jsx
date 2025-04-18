import "./impressum.css";

const Impressum = () => {
  return (
    <div className="containerImmpressum">
      <h1>Impressum</h1>

      <section className="companyDetails">
        <h2>Angaben gemäß § 5 TMG</h2>
        <p>
          Hoppelhasen gUG (haftungsbeschränkt)
          <br />
          Mandrellaplatz 3<br />
          12555 Berlin
        </p>

        <h3>Vertreten durch</h3>
        <p>Mustafa Tinmaz</p>

        <h3>Registereintrag</h3>
        <p>
          Eintragung im Handelsregister.
          <br />
          Registergericht: Amtsgericht Charlottenburg
          <br />
          Registernummer: HRB 187415 B
        </p>
      </section>

      <section className="contact">
        <h2>Kontakt</h2>
        <p>
          Mandrellaplatz 3, 12555 Berlin , 12555 Berlin
          <br />
          {/* Platzhalter für Telefon und E-Mail - bitte ergänzen */}
          Telefon: 030/257 396 54
          <br />
          E-Mail: kita-hoppelhasen@web.de
        </p>
      </section>

      <section className="legal-info">
        <h2>Rechtliche Hinweise</h2>
        <p>
          Die Gesellschaftsversammlung hat am 28.11.2017 eine Änderung des
          Gesellschaftsvertrags in § 1 (Firma) beschlossen. Diese Änderung wurde
          am 12.01.2018 im Handelsregister eingetragen.
        </p>

        <h3>Wichtiger Hinweis</h3>
        <p>
          Bekanntmachungen der Handelsregistereintragungen erfolgen nur noch
          online und nicht mehr in Papierform. Die Veröffentlichungen können
          kostenlos im gemeinsamen Registerportal der Länder unter
          <a
            href="http://www.handelsregisterbekanntmachungen.de"
            target="_blank"
            rel="noopener noreferrer"
          >
            http://www.handelsregisterbekanntmachungen.de
          </a>{" "}
          abgerufen werden.
        </p>

        <p>
          Bei Fragen zu Zahlungsverpflichtungen oder zur Seriosität von
          Adressbuchverlagen wenden Sie sich bitte an die IHK Berlin.
        </p>
      </section>

      <section className="disclaimer">
        <h2>Haftung für Inhalte</h2>
        <p>
          Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte
          auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach
          §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
          verpflichtet, übermittelte oder gespeicherte fremde Informationen zu
          überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige
          Tätigkeit hinweisen.
        </p>

        <h2>Haftung für Links</h2>
        <p>
          Unser Angebot enthält Links zu externen Websites Dritter, auf deren
          Inhalte wir keinen Einfluss haben. Deshalb können wir für diese
          fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
          verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der
          Seiten verantwortlich.
        </p>

        <h2>Urheberrecht</h2>
        <p>
          Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen
          Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung,
          Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
          Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des
          jeweiligen Autors bzw. Erstellers.
        </p>
      </section>

      <footer>
        <p>Stand: {new Date().toLocaleDateString("de-DE")}</p>
      </footer>
    </div>
  );
};

export default Impressum;
