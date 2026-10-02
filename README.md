# Oberfranken Kompass

Ein erster, öffentlicher Pilot für Fragen zu Studium, Arbeit, Freizeit und Leben in Oberfranken. Ausgangspunkt ist die Idee einer regionalen KI-Plattform, die Menschen mit verlässlichen Informationen und lokalen Akteuren verbindet. Dieses Repository beginnt bewusst klein: Eine Suche führt zu sieben regionalen Einstiegsseiten. Bei einer unbeantworteten Frage sagt die Oberfläche das offen.

Die Seiten lassen sich auf Deutsch und Englisch nutzen. Es gibt keine Anmeldung, keine Nutzerprofile und kein Tracking. Die Links wurden am 2. Oktober 2026 auf Erreichbarkeit geprüft; ihre Inhalte wurden dabei nicht redaktionell geprüft. Aktuelle Termine, Stellen und Öffnungszeiten gehören deshalb direkt zur jeweiligen Quelle.

## Lokal starten

```sh
python3 -m http.server 8000
```

Danach `http://localhost:8000` öffnen. Für den kleinen Suchtest: `node search.test.mjs`.

## Nächster Schritt

Für echte Antworten braucht das Projekt freigegebene, datierte Inhalte aus Tourismus, Hochschulen, Wirtschaft und Kommunen. Erst dann kann eine KI Aussagen mit Quellen belegen und bei fehlenden Belegen „Ich weiß es nicht“ sagen. Das Zielbild mit redaktionell festgelegten und dynamischen Inhalten (30/70) ist noch keine technische Quote. Personalisierung, Akteursseiten, zeitbezogene Fragen und kulturelle Erklärungen für internationale Besucher folgen nach Festlegung von Datenrechten, Pflege und Datenschutz.

Technische Bewertung, Gegenfragen und nächste Schritte stehen in [TECHNIK.md](TECHNIK.md).
