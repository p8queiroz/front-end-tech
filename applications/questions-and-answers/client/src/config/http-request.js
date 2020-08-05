
export const request = ({ url, ...options }) => {
    return new Promise((resolve, reject) => {
        fetch(`${url}`, {
            headers: {
                'Content-Type': 'application/json'
            },
            ...options,
        })
            .then(response => response.json())
            .then(resolve)
            .catch(reject)
    });
}



