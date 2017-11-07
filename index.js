var PAGE_DATA = {
    user: {
        followers: '33.8K',
        following: '324',
        tweets: '2,337',
        likes: '105',
        name: 'Raymond Hettinger',
        username: 'raymondh',
        description:
            'Python core developer. Freelance programmer/consultant/trainer. Husband to Rachel. Father to Matthew.',
        location: 'Santa Clara, CA',
        website: 'rhettinger.wordpress.com',
        imgurl:
            'https://pbs.twimg.com/profile_images/73450913/IMG_0202_400x400.jpg',
        joined: {
            month: 3,
            year: 2008
        }
    },
    chirps: [
        {
            author: {
                name: 'Raymond Hettinger',
                username: 'raymondh'
            },
            date: {
                month: 10,
                day: 28,
                year: 2017
            },
            message:
                '#python tip:  iter(C, sentinel) returns an iterator that invokes the callable C until it returns a sentinel signaling the iterator is done.'
        },
        {
            author: {
                name: 'Raymond Hettinger',
                username: 'raymondh'
            },
            date: {
                month: 10,
                day: 25,
                year: 2017
            },
            message:
                '#python teaching tip:  When teaching adults, half of your time should be spent helping students unlearn pre-existing incorrect knowledge.'
        },
        {
            author: {
                name: 'Raymond Hettinger',
                username: 'raymondh'
            },
            date: {
                month: 10,
                day: 23,
                year: 2017
            },
            message:
                '#python insight of the day:  Directories are a namespace and behave like dictionaries where the key is a filename and the value is an inode.'
        },
        {
            author: {
                name: 'Raymond Hettinger',
                username: 'raymondh'
            },
            date: {
                month: 10,
                day: 5,
                year: 2017
            },
            message: '#python news:  #PyPy version 5.9 has just been released.'
        },
        {
            author: {
                name: 'Raymond Hettinger',
                username: 'raymondh'
            },
            date: {
                month: 9,
                day: 24,
                year: 2017
            },
            message:
                'Put another way. With "yield" the consumer controls execution. With "await" the producer controls execution. Very different points of view.'
        },
        {
            author: {
                name: 'Raymond Hettinger',
                username: 'raymondh'
            },
            date: {
                month: 9,
                day: 24,
                year: 2017
            },
            message:
                'With #python iterators, we think of next() as initiating execution. With coroutines, we "await" a downstream event to initiate execution.'
        }
    ],
    ymal: [
        {
            name: 'David Beazley',
            username: 'dabeaz',
            profilepic:
                'https://pbs.twimg.com/profile_images/848508178639749120/x8ltNamO_bigger.jpg'
        },
        {
            name: 'Guido van Rossum',
            username: 'gvanrossum',
            profilepic:
                'https://pbs.twimg.com/profile_images/424495004/GuidoAvatar_bigger.jpg'
        },
        {
            name: 'Bradon Rhodes',
            username: 'brandon_rhodes',
            profilepic:
                'https://pbs.twimg.com/profile_images/378800000204519400/f6f79294738b8b6afa67dd21c5463633_bigger.jpeg'
        },
        {
            name: 'Python Software',
            username: 'ThePSF',
            profilepic:
                'https://pbs.twimg.com/profile_images/439154912719413248/pUBY5pVj_bigger.png'
        },
        {
            name: 'Pycoders Weekly',
            username: 'pycoders',
            profilepic:
                'https://pbs.twimg.com/profile_images/429285908953579520/InZKng9-_bigger.jpeg'
        }
    ]
};

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
function youMayAlsoLike(count) {
    var people =
        '<div class="row whitebg">' +
        '<div class="col-lg-3">' +
        '<img src="' +
        PAGE_DATA.ymal[count].profilepic +
        '" class="chirpimg">' +
        '</div><div class="col-lg-9"><a href="https://twitter.com/' +
        PAGE_DATA.ymal[count].username +
        '">' +
        PAGE_DATA.ymal[count].name +
        '</a><br><span>@' +
        PAGE_DATA.ymal[count].username +
        '</span></div></div>';
    return people;
}

function makeAlsoLike() {
    var count = 0;
    var newdata = '';
    while (count < PAGE_DATA.ymal.length) {
        newdata += youMayAlsoLike(count);
        count += 1;
    }
    return newdata;
}
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
        PAGE_DATA.user.imgurl +
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
        PAGE_DATA.user.imgurl +
        '" class="img">' +
        PAGE_DATA.user.name +
        '</h3><span>@' +
        PAGE_DATA.user.username +
        '</span><br><br><span>' +
        PAGE_DATA.user.description +
        '</span><br><br><span><i class="fa fa-map-marker" aria-hidden="true"></i> ' +
        PAGE_DATA.user.location +
        '</span><br><br><i class="fa fa-link" aria-hidden="true"></i> <a href="https://' +
        PAGE_DATA.user.website +
        '">' +
        PAGE_DATA.user.website +
        '</a><br><br><i class="fa fa-calendar" aria-hidden="true"></i>' +
        '<span> Joined ' +
        getM(PAGE_DATA.user.joined.month) +
        ' ' +
        PAGE_DATA.user.joined.year
    );
}

function pushChirp() {
    event.preventDefault();
    var d = new Date();
    var msg = $('#comment').val();
    var chirpobj = {
        author: {
            name: 'Raymond Hettinger',
            username: 'raymondh'
        },
        date: {
            month: d.getMonth() + 1,
            day: d.getDate(),
            year: d.getFullYear()
        },
        message: msg
    };
    PAGE_DATA.chirps.splice(0, 0, chirpobj);
    $('#chirps').html(makeChirps());
    $('#comment').val('');
}

function loadUserInfo() {
    $('#tweets').text(PAGE_DATA.user.tweets);
    $('#following').text(PAGE_DATA.user.following);
    $('#followers').text(PAGE_DATA.user.followers);
    $('#likes').text(PAGE_DATA.user.likes);
}

$('#personalinfo').html(makePersonalInfo());
$('#chirps').html(makeChirps());
$('#alsolike').html(makeAlsoLike());
loadUserInfo();
$('#submit').on('click', function() {
    pushChirp();
});

function addEmoji(emoji) {
    var comment = $('#comment').val() + emoji;
    // $('#comment').append(
    //     '<img src="https://cdn.okccdn.com/media/img/emojis/apple/1F60C.png"/>'
    // );
    $('#comment').val(comment);
}
