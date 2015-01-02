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



    var blog_container = "blog-feed";
    var appendEntry = function appendEntry(template) {
        var $container = $('#' + blog_container);
        $container.append(template);
    }

    var buildEntry = function buildEntry(entry) {
        var image = ''; // TODO add placeholder.
        if(entry.mediaGroups
            && entry.mediaGroups.length
            && entry.mediaGroups[0].contents.length) {
            var media      = entry.mediaGroups[0].contents;
            image          = media[media.length - 1].url; // Get last image in arr.
        }
        var title      = entry.title;
        var content    = entry.contentSnippet;
        var link       = entry.link;
        var date       = entry.publishedDate;
        console.log('entry ', entry);
        var template = '<div class="blog-entry clearfix"><a href="' + link + '" target="_blank">' +
            '<div class="blog-entry_thumb pull-left"><img src="' + image + '" /></div>' +
            '<div class="blog-entry_content pull-left">' +
            '<h5>' + title + '</h5>' +
            '<span class="blog-entry_date">' + date + '</span>' +
            '<p>' + content + '</p>' +
            '<p class="continue-reading pull-right"><i class="fa fa-plus-square-o"></i>Read More</p>' +
            '</div>' +
            '</a></div>'
        appendEntry(template);
    }

    function initialize() {
              var feed = new google.feeds.Feed("http://tanyascorner.wordpress.com/feed");
//        var feed = new google.feeds.Feed("http://blog.travelunderwriters.com/feed");
        feed.setNumEntries(5);
        feed.load(function(result) {
            if (!result.error) {
                for (var i = 0; i < result.feed.entries.length; i++) {
                    var entry = result.feed.entries[i];
                    buildEntry(entry);
                }
            }
        });
    }

    google.setOnLoadCallback(initialize);
});