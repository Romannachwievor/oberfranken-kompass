import assert from 'node:assert/strict';
import { findSources, sources } from './search.mjs';

assert.equal(findSources('').length, sources.length);
assert.equal(findSources('Studieren in Bayreuth')[0].title, 'Universität Bayreuth');
assert.equal(findSources('Rad fahren im Frankenwald')[0].title, 'Frankenwald Tourismus');
assert.equal(findSources('Kirchweih heute').length, 0);
assert(findSources('', 'arbeiten').every(source => source.topic === 'arbeiten'));
console.log('Quellensuche OK');
