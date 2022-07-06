const content = {
    user: "company1",
    username: "shashank"
}

const payload = {
    method: 'POST',
    headers: {
        "Content-type": "application/json"
    },
    body: JSON.stringify(content)
}

function getDetails(url) {
    return fetch(url, payload).then(response => response.json());
}

var u = "http://127.0.0.1:3000/users/api/login";

getDetails(u).then((data) => {
    const imageList = JSON.parse(JSON.stringify(data));
    const imageTitles = Object.keys(imageList);
    const imageLocation = Object.values(imageList);
    console.log(imageTitles[0]);
    console.log(imageLocation[0]);

})