const {readdirSync, readFileSync, writeFileSync} = require('fs');

const books = [
	{url: 'https://www.gutenberg.org/files/17/17-0.txt', start: 'THE BOOK OF MORMON'},
	{url: 'https://www.gutenberg.org/files/30/30.txt', start: 'Genesis'},
	{url: 'https://www.gutenberg.org/files/124/124.txt', start: 'The First Book of Esdras'},
	{url: 'https://www.gutenberg.org/files/216/216.txt', start: 'THE TAO TEH KING'},
	{url: 'https://www.gutenberg.org/files/2017/2017.txt', start: 'THE DHAMMAPADA'},
	{url: 'https://www.gutenberg.org/files/2388/2388.txt', start: 'CHAPTER I'},
	{url: 'https://www.gutenberg.org/files/7440/7440.txt', start: 'AL KORAN.'},
	{url: 'https://www.gutenberg.org/files/3283/3283-8.txt', start: 'Isa-Upanishad'},
	{url: 'https://www.gutenberg.org/files/3458/3458.txt', start: 'Science and Health'},
	{url: 'https://www.gutenberg.org/files/16523/16523-0.txt', start: 'In The Name Of Him Who Is The Supreme Ruler Over All That Hath Been And'},
	{url: 'https://www.gutenberg.org/files/24737/24737.txt', start: 'THE DWELLERS IN ASGARD'},
]

const text = readdirSync('./data').map((file) => '<|startoftext|>' + readFileSync('./data/' + file) + '<|endoftext|>');

writeFileSync('holy.txt', text.join('\n'));
