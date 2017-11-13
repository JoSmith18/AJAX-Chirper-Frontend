function signUp() {
    $.post(
        'https://bcca-chirper.herokuapp.com/api/signup/',
        JSON.stringify({
            name: $('#name').val(),
            username: $('#username').val(),
            email: $('#email').val(),
            password: $('#pwd').val()
        })
    )
        .then(function handleFeedResponse(response) {
            window.location.replace(
                'feed.html?username=' + $('#username').val()
            );
        })
        .catch(function handleFeedError(response) {
            console.log(response);
        });
}

function main() {
    var username = getParameterByName('username');
}
