function main() {
    $('body').html('<h1>Hello World</h1>');
    $.get(
        'https://bcca-chirper.herokuapp.com/api/JoSmith18/'
    ).then(function handleFeedResponse(response) {
        console.log(response);
    });
}

$(main);
