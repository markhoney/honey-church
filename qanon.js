const {writeFileSync} = require('fs');
const qanon = require('./posts');

const files = [{
	name: '',
	url: 'https://raw.githubusercontent.com/jkingsman/JSON-QAnon/main/posts.json',
}];

const text = qanon.posts.filter((post) => post.text).map((post) => '<|startoftext|>' + post.text.normalize('NFD').replace(/\p{Diacritic}/gu, '').replace(/[^\x00-\x7F]/g, '') + '<|endoftext|>');

writeFileSync('qanon.txt', text.join('\n'));
