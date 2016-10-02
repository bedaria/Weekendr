const _ = require('underscore');
const handleFourSquareData = module.exports;

handleFourSquareData.build = (dataArr, selectedCategories) => {
function buildActivitiesArray(dataArray) {
const activities = [];
  for (let i = 0; i < dataArray.length; i++) {
  JSON.parse(dataArray[i]).response.groups[0].items
  .map((item) => {
    return item.venue;
  })
  .forEach((venue) => {
    activities.push({
      name: venue.name,
      category: venue.categories[0].name,
      venue_info: {
        venue_id: venue.id,
        category_id: venue.categories[0].id,
        category_name: venue.categories[0].name,
        location: venue.location,
        photos: venue.photos,
        rating: venue.rating,
        rating_color: venue.ratingColor,
        checkinsCount: venue.stats.checkinsCount,
        featuredPhotos: venue.featuredPhotos,
      },
    });
  });
  }
  return activities.filter(venue => (venue.venue_info.rating > 2));
}

const activitiesSorted = buildActivitiesArray(dataArr).sort((a, b) => {
  return b.venue_info.rating - a.venue_info.rating;
});

const selectedActivities = selectedCategories.slice(2);

const activitiesBundle = activitiesSorted.map((activity, i, arr) => {
  var results = [];
  if (arr[i + 1]) {
  if (arr[i + 1].name !== activity.name) {
    results.push(activity);
    return {
      category: activity.category,
      results: results,
    };
  }
  } else {
    return {
    category: activity.category,
    results: [activity],
    };
  };
});
  return activitiesBundle;
};





