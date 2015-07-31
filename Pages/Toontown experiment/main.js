var request = new XMLHttpRequest();
request.open('GET', 'http://tutorialzine.com/misc/files/my_url.html', true);

request.onload = function (e) {
    if (request.readyState === 4) {

        // Check if the get was successful.

        if (request.status === 200) {
            console.log(request.responseText);
        } else {
            console.error(request.statusText);
        }
    }
};

// Catch errors:

request.onerror = function (e) {
    console.error(request.statusText);
};

request.send(null);

// Using a small library, such as Reqwest, can make your job much easier.

reqwest({
    url: 'http://tutorialzine.com/misc/files/my_url.html',
    method: 'get',
    error: function (err) {
    },
    success: function (resp) {
        console.log(resp);
    }
});