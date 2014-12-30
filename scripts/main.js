'use strict';

$(function() {

    //Set up instafeed
    var feed = new Instafeed({
        accessToken: '15000428.467ede5.368f42b230304376b9f48b11f20c25e9',
        target: 'instafeed',
        get: 'user',
        userId: 15000428,
        links: true,
        limit: 12,
        sortBy: 'most-recent',
        resolution: 'standard_resolution',
        template: '<div class="col-xs-12 col-sm-6 col-md-4 col-lg-3"><div class="photo-box"><div class="image-wrap"><a href="{{link}}"><img src="{{image}}"></a><div class="likes">{{likes}} Likes</div></div><div class="description">{{caption}}<div class="date">{{model.date}}</div></div></div></div>'
    });
    feed.run();

});