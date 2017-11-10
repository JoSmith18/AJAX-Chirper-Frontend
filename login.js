function login() {
    $.get(
        'https://bcca-chirper.herokuapp.com/api/' + $('#username').val() + '/'
    )
        .then(function handleFeedResponse(response) {
            window.location.replace(
                'feed.html?username=' + $('#username').val()
            );
        })
        .catch(function handleFeedError(response) {
            $('.form-group').addClass('has-error');
            $('.if-error').append('<h4>Invalid Username or Password</h4>');
        });
}
