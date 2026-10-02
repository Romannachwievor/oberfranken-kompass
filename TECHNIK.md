# Technik und offene Entscheidungen

## Was wir zuerst hinterfragen sollten

Die Zahl 30/70 beschreibt eine redaktionelle Vorstellung, noch keine sinnvolle Regel für jede Antwort. Eine Frage nach Studienfristen braucht fast vollständig festgelegte, aktuelle Quellen. Eine Idee für einen Wochenendausflug darf freier formuliert sein. Entscheidend ist, ob jede überprüfbare Aussage belegt ist.

„Agenten prüfen sich gegenseitig“ klingt sicherer, als es ist. Zwei Modelle können dieselbe falsche Webseite lesen und denselben Fehler wiederholen. Für den ersten echten KI-Versuch sind unabhängige Quellen, feste Prüfregeln und sichtbare Unsicherheit wichtiger als ein Schwarm von Agenten. Auch passive Empfehlungen sollten erst nach ausdrücklichem Wunsch der Nutzer entstehen. Dafür ist kein dauerhaftes Persönlichkeitsprofil nötig.

Der größte Engpass dürfte bei den Daten liegen: Wer darf welche Inhalte übernehmen, wie oft werden sie aktualisiert und wer korrigiert Fehler? Besonders bei Jobs, Preisen, Öffnungszeiten und Veranstaltungen veralten Angaben schnell. Kleine Betriebe und Höfe brauchen einen einfachen Weg, Angaben selbst einzureichen oder per Telefon weiterzugeben. Vor Veröffentlichung muss jemand Herkunft und Zuständigkeit prüfen.

## Technischer Vorschlag

| Aufgabe | Erster Ansatz | Prüfpunkt |
| --- | --- | --- |
| Inhalte übernehmen | Offizielle Schnittstellen und Feeds zuerst; sonst freigegebene Seiten gezielt abrufen | Nutzungsrecht, Verantwortliche, Abrufdatum |
| Inhalte finden | Python und SQLite FTS5 für den Pilot | Reichen Stichwortsuche und Ortsfilter für echte Fragen? |
| Antworten formulieren | OpenAI Responses API als erster Modellkandidat, nur mit gefundenen Quellen | Vergleich mit mindestens einem zweiten Modell anhand derselben Fragen |
| Aussagen prüfen | Quellen-IDs und Zeitfenster im Code prüfen; Stichproben von Menschen lesen lassen | Keine erfundenen Belege, klares „Ich weiß es nicht“ |
| Oberfläche | Bestehenden Click-Dummy ausbauen | Finden Menschen Antworten schneller als über allgemeine KI oder Suche? |

Keine eigene Modellschulung zum Start. Sie würde weder schlechte Quellen reparieren noch Aktualität sichern. Kein Agenten-Framework, solange ein Ablauf aus Suche, Antwort und Prüfung reicht. Bei wachsender Datenmenge kann PostgreSQL die SQLite-Datenbank ersetzen; Vektorsuche kommt erst dazu, wenn Stichwortsuche nachweisbar Fragen verfehlt.

Ein möglicher Prüflauf: Das Antwortmodell nennt für jede Tatsachenbehauptung eine Quellen-ID. Code verwirft unbekannte IDs und Inhalte außerhalb des gefragten Zeitraums. Bei strittigen Fragen kann ein zweites Modell, etwa Claude, die Behauptungen anhand der Quellenauszüge unabhängig markieren. Widersprüche gehen an eine Person. Auch zwei übereinstimmende Modelle ersetzen keinen Quellencheck.

Jeder Inhaltsdatensatz braucht mindestens `source_id`, `title`, `url`, `owner`, `region`, `language`, `retrieved_at`, `valid_from`, `valid_until`, `license` und einen Freigabestatus. Der Antwortdienst nimmt Frage, Sprache, freiwilligen Ort und optionalen Zeitraum entgegen. Er gibt Antwort, Quellen mit Abrufdatum und einen Status wie `answered`, `partial` oder `unknown` zurück. Zeitfragen filtern zuerst nach Gültigkeit; das Modell darf nicht selbst raten, was „letztes Jahr“ umfasst.

Externe Texte sind Eingaben, keine Anweisungen an das Modell. Veröffentlichungen von Akteuren erhalten einen verifizierten Absender und ein Änderungsdatum. Bezahlte Platzierung muss sichtbar gekennzeichnet sein und darf die faktische Antwort nicht verändern. Ohne Einwilligung werden Suchfragen und Interessen nicht zu Nutzerprofilen zusammengeführt.

## Warum jemand diese Plattform statt ChatGPT nutzen würde

Ein allgemeines Modell kennt Oberfranken nur so gut wie seine verfügbaren Daten. Der mögliche Vorsprung liegt im Netz lokaler Quellen: Hochschulen, Tourismusstellen, Kommunen und Betriebe liefern Änderungen direkt; Antworten nennen Zuständigkeit und Zeitpunkt. Eine Frage zu „Kirchweih“ braucht in einer englischen Antwort auch eine Erklärung des lokalen Brauchs. Das ist redaktionelle Arbeit, keine reine Übersetzung. Wenn wir diese Pflege nicht organisieren, bleibt der Mehrwert gegenüber ChatGPT gering.

Auch Verbreitung gehört zum Produkt. Partner könnten geprüfte Antworten auf ihren eigenen Seiten einbetten und auf die Quelle zurückverlinken. So beginnt Nutzung dort, wo Menschen bereits suchen. Vor einer breiten Kampagne sollten wir beobachten, welche Fragen tatsächlich gestellt werden und wo Antworten fehlen.

## Nächste Entscheidungen mit Team Oberfranken und Bergwerk

1. Drei Datenpartner und 30 echte Nutzerfragen auswählen, darunter Arbeit, Studium, Freizeit, Wohnen und Fragen mit Zeitbezug. Für jede Quelle Nutzungsrecht und verantwortliche Kontaktperson klären.
2. Antworten im Pilot gegen diese Fragen prüfen: Sind Belege auffindbar, aktuell und unabhängig? Wo keine belastbare Quelle existiert, muss `unknown` erscheinen. Nutzertests auch mit skeptischen und internationalen Personen durchführen.
3. Erst nach diesem Test Profile, Akteursseiten und Bezahlmodell planen. Für jede Funktion klären, welchen Nutzen sie bringt, welche Daten sie braucht und wer Beschwerden bearbeitet.

Oberfranken kann Testregion für ein übertragbares Format regionaler Quellen und Antworten werden. Der wertvolle Teil wäre dann nicht ein bestimmtes Modell, sondern ein Verfahren, mit dem Regionen Inhalte freigeben, aktualisieren und nachprüfbar ausspielen. Modelle werden schnell besser; Quellenrechte, Datenpflege und Vertrauen bleiben die eigentliche Arbeit.
