export default async function postData(url = 'http://localhost:3000', data = {}) {
    const response = await fetch(url + '/api', {
        method: 'POST',
        cache: 'no-cache',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(data)
    });
    return response;
}