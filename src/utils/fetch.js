export function request (url) {
    const request = new Request(url, {
        headers: new Headers({
            'Content-Type': 'application/json',
            'Authorization': 'Client-ID 2e04b5e85391e54'
        })
    });

    return fetch(request)
        .then(results => results.json());
}