var PAGE_DATA = {};

$('#user-search').on('submit', function search(event) {
    event.preventDefault();
    var username = $('#username').val();
    $.get(
        'https://bcca-chirper.herokuapp.com/api/' + $('#username').val() + '/'
    )
        .then(function handleFeedResponse(response) {
            window.location.replace('other-feed.html?username=' + username);
        })
        .catch(function() {
            $('.container').html('<h1>' + username + 'does not exist.</h1>');
        });
});

function showArticle(article) {
    return (
        '<hr><img src="' +
        article.urlToImage +
        '" class="trendingimg">' +
        '<span class="authorName"><br>' +
        article.author +
        '</span><a href="' +
        article.url +
        '"><h6> Title: ' +
        article.title +
        '</h6></a><p>' +
        article.description +
        '</p>'
    );
}

function updateArticleView() {
    $('#articles').html(PAGE_DATA.articles.map(showArticle).join(''));
}

function trends() {
    $.get(
        'https://newsapi.org/v1/articles?source=the-next-web&sortBy=latest&apiKey=131ce1b2e8ac49e7ae9591ef7b913c7d'
    )
        .then(function(response) {
            PAGE_DATA.articles = response.articles;
            updateArticleView();
        })
        .catch(function(response) {
            $('#articles').html(
                '<i class="fa fa-spinner fa-spin fa-5x fa-fw"></i>'
            );
        });
}

function main() {
    trends();
}

function logout() {
    window.location.replace('login.html');
}

$(main);
