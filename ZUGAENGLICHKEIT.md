# Eine Seite für verschiedene Altersgruppen

Stand: 2. Oktober 2026. Bewertung des aktuellen Piloten und Empfehlung für die nächste Designrunde. Das ist ein gezielter Review, keine vollständige WCAG-Prüfung.

## Empfehlung

Eine gemeinsame Oberfläche ist der beste Ausgangspunkt. Alter sagt wenig darüber, ob jemand eine Frage tippen, eine Karte lesen oder einen Screenreader bedienen möchte. Die [W3C-Recherche zu älteren Nutzern](https://www.w3.org/WAI/older-users/) beschreibt Überschneidungen mit Seh-, Motorik- und Konzentrationsproblemen; ihre Lösung liegt weitgehend in allgemeinen Zugänglichkeitsstandards. Eine [Nielsen-Norman-Studie](https://www.nngroup.com/articles/usability-for-senior-citizens/) fand zudem, dass kleine Schrift auch jüngere Menschen stört und ältere Menschen sehr unterschiedlich mit Technik umgehen. Ein „Seniorenmodus“ würde diese Unterschiede verdecken.

Für Oberfranken empfehle ich einen **redaktionellen Explorer**: regionale Fotos und kurze Geschichten machen Lust auf den Ort; direkt daneben bleiben vier klare Einstiege für Studium, Arbeit, Freizeit und Leben sowie die Fragesuche. Jede Information ist auch ohne Karte oder Chat erreichbar. Detailtiefe wächst erst nach einer Auswahl. So können Menschen stöbern oder zügig eine konkrete Frage stellen.

| Richtung | Einschätzung |
| --- | --- |
| Redaktioneller Explorer mit Suche | Beste Startseite: zeigt die Region und bietet mehrere Wege zum Ziel. Fotos brauchen Textalternativen; Text gehört nicht ins Bild. |
| Chat als einzige Bedienung | Für offene Fragen nützlich, verlangt aber eine formulierte Eingabe. Unklare oder unbelegte Antworten schaden Vertrauen. Als zusätzlicher Weg sinnvoll. |
| Karte als Haupteinstieg | Gut für Ausflüge und Orte. Für Studium, Jobs und Menschen ohne sichere Kartenbedienung braucht es immer eine gleichwertige Liste. |

## Befund am bestehenden Piloten

Die Seite hat eine klare Überschrift, sichtbare Formularbeschriftung, Themenfilter, Tastatur-Fokusring und keine automatisch laufenden Inhalte. Gemessene Kontraste der kleineren Texte liegen bei 4,82:1 bis 6,29:1. Das ist eine gute Grundlage, aber keine Aussage über vollständige WCAG-Konformität. Für den Vergrößerungstest wurde Chromium auf 320 CSS-Pixel Breite gestellt und die Grundschrift auf 200 % gesetzt; das ist ein kombinierter Praxistest, kein einzelner WCAG-Grenzwert.

| Priorität | Beobachtung | Änderung |
| --- | --- | --- |
| Hoch | Auf 320 px Breite wächst die Seite bei 200 % Grundschrift auf 486 px. Die große Überschrift erzwingt seitliches Scrollen. | Überschrift bei starker Vergrößerung umbrechen lassen; danach Schriftvergrößerung und Reflow einzeln prüfen. [WCAG 2.2, 1.4.4 und 1.4.10](https://www.w3.org/TR/WCAG22/). |
| Hoch | Themenfilter werden nach Auswahl neu gebaut. Tastaturfokus fällt auf `body` zurück. | Filter im DOM behalten oder Fokus auf den gewählten Filter zurücksetzen. Tastaturfolge erneut prüfen. |
| Hoch | Filterrahmen haben 1,57:1, Rahmen des Sprachknopfs 1,87:1 Kontrast zum Hintergrund. Die Grenzen sind schwer erkennbar. | Rahmen oder Füllung mit mindestens 3:1 Kontrast wählen, wenn sie die Bedienelemente erkennbar machen. [WCAG 1.4.11](https://www.w3.org/TR/WCAG22/#non-text-contrast). |
| Mittel | Sprachknopf und Fragebeispiele sind 37 px, Filter 41 px hoch. | Für häufig genutzte Aktionen etwa 44 px Höhe anstreben. [WCAG 2.2](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html) verlangt mindestens 24 × 24 CSS-Pixel oder ausreichenden Abstand; 44 px ist hier ein Bedienziel. |
| Mittel | Sieben Links heißen nur „Quelle öffnen“. In einer Linkliste fehlt das Ziel. | „Universität Bayreuth öffnen“ und entsprechende Namen anzeigen. |
| Mittel | Bei fehlendem Treffer fordert die Seite eine präzisere Frage, obwohl auch Daten fehlen können. Englische Oberfläche führt zu meist deutschen Quellen. | Datenlücke offen benennen, passende Themen anbieten und Sprache der Zielseite anzeigen. |

## Bedienung und Inhalte

Die Suche sollte Tippfehler, Ortsvarianten und kurze Alltagssprache verzeihen. Daneben braucht es einen sichtbaren Weg über Themen und Orte. Eine leere Antwort muss sagen, was fehlt und wo Menschen weitersuchen können. Für spätere KI-Antworten gehören Quelle, Aktualitätsdatum und Unsicherheit direkt zur Aussage, nicht in einen versteckten Hinweis am Seitenende.

Schrift und Abstände müssen mit Browser-Zoom und Betriebssystemeinstellungen wachsen. Ein eigener Textgrößenknopf ist erst sinnvoll, wenn Tests zeigen, dass die vorhandenen Möglichkeiten nicht reichen. Keine Animation darf für eine Aufgabe nötig sein. Bilder können Oberfranken lebendig zeigen; sie dürfen Suche, Kontrast und Ladezeit nicht ausbremsen. [W3C-Designhinweise](https://www.w3.org/WAI/tips/designing/) empfehlen erkennbare Bedienelemente, klare Navigation, sichtbares Feedback und Layouts für verschiedene Viewports.

Für internationale Nutzer reicht ein englischer Schalter allein nicht. Regionale Begriffe wie „Kirchweih“ brauchen kurze Erklärungen; externe deutschsprachige Quellen müssen als solche markiert sein. Altersangaben gehören nicht ins Pflichtprofil. Freiwillige Angaben wie Ort oder Interesse können innerhalb einer Sitzung helfen, ohne dauerhaftes Tracking.

Vor einem öffentlichen Betrieb muss geklärt werden, wer die Plattform rechtlich trägt und welche Pflichten aus [BITV 2.0](https://www.gesetze-im-internet.de/bitv_2_0/) oder [BFSG](https://www.gesetze-im-internet.de/bfsg/) für dieses Angebot gelten.

## Test vor größerem Ausbau

Zwölf moderierte Sitzungen reichen als erste qualitative Runde: Menschen aus verschiedenen Lebensphasen, darunter Personen mit geringer Sehschärfe oder eingeschränkter Feinmotorik, internationale Nutzer und Menschen mit wenig KI-Erfahrung. Aufgaben: Studienangebot finden, Ausflug planen, eine zeitkritische Information prüfen und eine unbeantwortete Frage sinnvoll weiterverfolgen. Auf Smartphone und Desktop testen, zusätzlich Tastatur und Screenreader. Beobachtet werden Erfolg, Irrwege, Verständlichkeit der Quellen und Vertrauen in die Antwort. Diese kleine Runde liefert Probleme und Hypothesen, keine repräsentativen Altersquoten. [W3C empfiehlt](https://www.w3.org/WAI/test-evaluate/involving-users/), Nutzertests mit Standardprüfung zu verbinden.
