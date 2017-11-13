var API_url = 'https://bcca-chirper.herokuapp.com/api/';
// var PAGE_DATA = getFeed();
var PAGE_DATA = new Object();

function getM(num) {
    var months = [
        'Jan',
        'Feb',
        'March',
        'April',
        'May',
        'June',
        'July',
        'Aug',
        'Sept',
        'Oct',
        'Nov',
        'Dec'
    ];
    return months[num - 1];
}
// function youMayAlsoLike(count) {
//     var people =
//         '<div class="row whitebg">' +
//         '<div class="col-lg-3">' +
//         '<img src="' +
//         PAGE_DATA.ymal[count].profilepic +
//         '" class="chirpimg">' +
//         '</div><div class="col-lg-9"><a href="https://twitter.com/' +
//         PAGE_DATA.ymal[count].username +
//         '">' +
//         PAGE_DATA.ymal[count].name +
//         '</a><br><span>@' +
//         PAGE_DATA.ymal[count].username +
//         '</span></div></div>';
//     return people;
// }

// function makeAlsoLike() {
//     var count = 0;
//     var newdata = '';
//     while (count < PAGE_DATA.ymal.length) {
//         newdata += youMayAlsoLike(count);
//         count += 1;
//     }
//     return newdata;
// }

function makeChirps() {
    var count = 0;
    var newdata = '';
    while (count < PAGE_DATA.chirps.length) {
        newdata += returnChirps(count);
        count += 1;
    }
    return newdata;
}
function changeMessage(count) {
    var arr = PAGE_DATA.chirps[count].message.split(/\s+/);
    var newMessage = '';
    for (i = 0; i < arr.length; i++) {
        if (arr[i].startsWith('#')) {
            newMessage +=
                '<a href="https://twitter.com/hashtag/python?src=hash" style="color: #317eac">' +
                arr[i] +
                '</a>';
        } else {
            newMessage += arr[i];
        }
        newMessage += ' ';
    }
    return newMessage;
}
function returnChirps(count) {
    var data =
        '<hr><img src="' +
        '' +
        '" class="chirpimg">' +
        '<span class="authorName">' +
        PAGE_DATA.chirps[count].author.name +
        '</span><span> @' +
        PAGE_DATA.chirps[count].author.username +
        ' 	&#183; ' +
        getM(PAGE_DATA.chirps[count].date.month) +
        ' ' +
        PAGE_DATA.chirps[count].date.day +
        '</span><p style="color: black">' +
        changeMessage(count) +
        '</p><i class="fa fa-comment-o" aria-hidden="true"></i>&nbsp;' +
        Math.floor(Math.random() * 100) +
        '&nbsp;&nbsp;&nbsp; <i class="fa fa-retweet" aria-hidden="true"></i>&nbsp;' +
        Math.floor(Math.random() * 100) +
        '&nbsp;&nbsp;&nbsp; <i class="fa fa-heart-o" aria-hidden="true"></i>&nbsp;' +
        Math.floor(Math.random() * 100);
    return data;
}

function makePersonalInfo() {
    return (
        '<h3><img src="' +
        '' +
        '" class="img">' +
        PAGE_DATA.chirper.name +
        '</h3><span>@' +
        PAGE_DATA.chirper.username +
        '</span><br><br><span>' +
        PAGE_DATA.chirper.description +
        '</span><br><br><span><i class="fa fa-map-marker" aria-hidden="true"></i> ' +
        PAGE_DATA.chirper.location +
        '</span><br><br><i class="fa fa-link" aria-hidden="true"></i> <a href="https://' +
        PAGE_DATA.chirper.website +
        '">' +
        PAGE_DATA.chirper.website +
        '</a><br><br><i class="fa fa-calendar" aria-hidden="true"></i>' +
        '<span> Joined ' +
        getM(PAGE_DATA.chirper.joined.month) +
        ' ' +
        PAGE_DATA.chirper.joined.year
    );
}

function pushChirp() {
    var d = new Date();
    var msg = $('#comment').val();
    var chirpobj = {
        author: {
            name: PAGE_DATA.chirper.name,
            username: PAGE_DATA.chirper.username
        },
        date: {
            month: d.getMonth() + 1,
            day: d.getDate(),
            year: d.getFullYear()
        },
        message: msg
    };
    $.post(
        'https://bcca-chirper.herokuapp.com/api/chirp/',
        JSON.stringify({
            key: window.localStorage.getItem('key'),
            message: chirpobj.message
        })
    )
        .then(function(response) {
            PAGE_DATA.chirps.splice(0, 0, chirpobj);
            $('#chirps').html(makeChirps());
            $('#comment').val('');
        })
        .catch(function(response) {
            $('#chirps').html('You thought it worked !!');
        });
}

function go(response) {
    PAGE_DATA = response;
    console.log(PAGE_DATA);
    $('#mypage').attr(
        'href',
        'feed.html?username=' + PAGE_DATA.chirper.username
    );
}
function loadUserInfo() {
    $('#tweets').text('0');
    $('#following').text('0');
    $('#followers').text('0');
    $('#likes').text('0');
}

function addEmoji(emoji) {
    var comment = $('#comment').val() + emoji;
    $('#comment').val(comment);
}

function draw() {
    setNoUser();
    $('#personalinfo').html(makePersonalInfo());
    $('#chirps').html(makeChirps());
    // $('#alsolike').html(makeAlsoLike());
    loadUserInfo();
    $('#submit').on('click', function() {
        if (window.localStorage.getItem('key')) {
            pushChirp();
        }
    });
}

$('#writechirp').on('submit', function(event) {
    event.preventDefault();
    if (window.localStorage.getItem('key') > 0) {
        pushChirp();
    }
});

function setFeed(response) {
    // PAGE_DATA = response;
    go(response);
    draw();
    setNoUser();
}

function setNoUser() {
    // $('#personalinfo').html('no info');
    $('#alsolike').html('Mr. John Bob The Chirper!!');
}

$(function() {
    var username = getParameterByName('username');
    $.get(API_url + username + '/')
        .then(function handleResponse(response) {
            setFeed(response);
            setNoUser();
        })
        .catch(function() {
            setNoUser();
        });
    $('#writechirp').show(600);
});

// retrieves the value of the query parameter `name`
function getParameterByName(name) {
    var url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

function logout() {
    window.location.replace('login.html');
}

$('#user-search').on('submit', function search(event) {
    event.preventDefault();
    var username = $('#username').val();
    $.get(
        'https://bcca-chirper.herokuapp.com/api/' + $('#username').val() + '/'
    )
        .then(function handleFeedResponse(response) {
            window.location = 'other-feed.html?username=' + username;
        })
        .catch(function() {
            $('.container').html('<h1>' + username + 'does not exist.</h1>');
        });
});
