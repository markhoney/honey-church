const https = require('https');

function getPromise(url) {
	return new Promise((resolve, reject) => {
		https.get(url, (response) => {
			let chunks_of_data = [];
			response.on('data', (fragments) => {
				chunks_of_data.push(fragments);
			});
			response.on('end', () => {
				let response_body = Buffer.concat(chunks_of_data);
				resolve(response_body.toString());
			});
			response.on('error', (error) => {
				reject(error);
			});
		});
	});
}

async function makeSynchronousRequest(url) {
	try {
		let http_promise = getPromise(url);
		let response_body = await http_promise;
		return response_body;
	}
	catch (error) {
		throw new Error(error);
	}
}

module.exports = makeSynchronousRequest;
