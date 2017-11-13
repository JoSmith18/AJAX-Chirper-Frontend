function login() {
    $.post(
        'https://bcca-chirper.herokuapp.com/api/login/',
        JSON.stringify({
            username: $('#username').val(),
            password: $('#pwd').val()
        })
    )
        .then(function handleFeedResponse(response) {
            var key = response.key;
            window.localStorage.setItem('key', key);
            window.location.replace(
                'feed.html?username=' + $('#username').val()
            );
        })
        .catch(function handleFeedError(response) {
            $('.form-group').addClass('has-error');
            $('.if-error').append('<h4>Invalid Username or Password</h4>');
        });
}
