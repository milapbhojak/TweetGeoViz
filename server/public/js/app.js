/*global google*/

var tgv = tgv || {};

(function(appModel, TweetCollection, Map, SearchBar, SlidePanel, TweetsPopup) {

  var domLoaded = function() {
    var pins = window.pins || {};

    appModel.searchQuery = window.searchQuery;

    var tweetCollection = new TweetCollection({
      pins: pins
    });

    var map = new Map({
      componentSelector: '#map-canvas',
      tweetCollection: tweetCollection
    });

    var searchBar = new SearchBar({
      componentSelector: '#searchBar'
    });

    var slidePanel = new SlidePanel({
      componentSelector: '#slidePanel',
      contentSelector: '.site-wrapper'
    });

    var tweetsPopup = new TweetsPopup({
      componentSelector: '#tweetsPopup'
    });

    map.view.addMapControl(google.maps.ControlPosition.TOP_LEFT,
      searchBar.view.el);

    // if there was a search then let's render it
    //var TweetCollection = new TweetCollection(pins);

    //map.addHeatMap(pins);
  };

  if (document.readyState != 'loading') {
    domLoaded();
  } else {
    document.addEventListener('DOMContentLoaded', domLoaded);
  }

})(
  tgv.appModel,
  tgv.TweetCollection,
  tgv.Map,
  tgv.SearchBar,
  tgv.SlidePanel,
  tgv.TweetsPopup
);
