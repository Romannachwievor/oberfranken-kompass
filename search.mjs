export const sources = [
  {
    title: 'Universität Bayreuth', topic: 'lernen', url: 'https://www.uni-bayreuth.de/',
    description: { de: 'Studiengänge, Bewerbung und Campus direkt bei der Universität.', en: 'Degree programmes, applications and campus information from the university.' },
    keywords: 'studium studieren studiengang universität uni bayreuth university degree study'
  },
  {
    title: 'IHK für Oberfranken Bayreuth', topic: 'arbeiten', url: 'https://www.ihk.de/bayreuth/',
    description: { de: 'Informationen für Unternehmen, Ausbildung und Gründung.', en: 'Information for businesses, vocational training and founders.' },
    keywords: 'arbeit unternehmen ausbildung gründung wirtschaft bayreuth business work training founder'
  },
  {
    title: 'Frankenwald Tourismus', topic: 'entdecken', url: 'https://www.frankenwald-tourismus.de/',
    description: { de: 'Touren und Ausflüge im Frankenwald planen.', en: 'Plan routes and trips in the Frankenwald region.' },
    keywords: 'frankenwald fahrrad rad radfahren radtour biker wandern natur cycling bike hiking outdoors'
  },
  {
    title: 'Fichtelgebirge', topic: 'entdecken', url: 'https://www.fichtelgebirge.bayern/',
    description: { de: 'Tourismus-Informationen für das Fichtelgebirge.', en: 'Visitor information for the Fichtelgebirge region.' },
    keywords: 'fichtelgebirge fahrrad rad radfahren biker wandern natur cycling bike hiking outdoors'
  },
  {
    title: 'Fränkische Schweiz', topic: 'entdecken', url: 'https://www.fraenkische-schweiz.com/',
    description: { de: 'Ausflugsziele und Aktivitäten in der Fränkischen Schweiz.', en: 'Places to visit and activities in Franconian Switzerland.' },
    keywords: 'fränkische schweiz fraenkische schweiz ausflug radfahren wandern natur trip cycling hiking outdoors'
  },
  {
    title: 'Bayreuther Festspiele', topic: 'leben', url: 'https://www.bayreuther-festspiele.de/',
    description: { de: 'Programm und Besucherinformationen direkt bei den Festspielen.', en: 'Programme and visitor information from the Bayreuth Festival.' },
    keywords: 'wagner festspiele musik oper kultur bayreuth festival music opera culture'
  },
  {
    title: 'Oberfranken.de', topic: 'leben', url: 'https://www.oberfranken.de/',
    description: { de: 'Regionaler Einstieg zu Orten, Themen und Einrichtungen.', en: 'Regional starting point for places, topics and organisations.' },
    keywords: 'oberfranken region leben wohnen orte upper franconia living towns'
  }
];

const stopWords = new Set('wo kann ich im in der die das den ein eine und zu für was ist wie finde über mit where can i the a an in for what is how do find to about'.split(' '));
const normalize = text => text.toLowerCase().replaceAll('ß', 'ss').normalize('NFD').replace(/[\u0300-\u036f]/g, '');

// ponytail: keyword matching covers seven handpicked sources; use SQLite FTS5 when real questions show misses.
export function findSources(question, topic = 'all') {
  const tokens = normalize(question).split(/[^a-z0-9]+/).filter(token => token.length > 2 && !stopWords.has(token));
  return sources
    .filter(source => topic === 'all' || source.topic === topic)
    .map(source => {
      const title = normalize(source.title);
      const words = normalize(`${source.keywords} ${Object.values(source.description).join(' ')}`).split(/[^a-z0-9]+/);
      const score = tokens.reduce((total, token) => total + (title.includes(token) ? 3 : 0) + (words.some(word => word === token || (token.length > 3 && word.length > 3 && (word.startsWith(token) || token.startsWith(word)))) ? 1 : 0), 0);
      return { source, score };
    })
    .filter(({ score }) => !tokens.length || score > 0)
    .sort((a, b) => b.score - a.score)
    .map(({ source }) => source);
}
