

//createBundles(dataArray[0], dataArray[1], bundle[2] )
tripBundles.createBundles = (transportation, hotels, activities) => {
  var bundles = []
  var budgetDistribution = {transportation: 0.4, lodging: 0.4, activities: 0.2}

  if(transportation.tripOption && transportation.tripOption.length > 0) {
    var addTransportation = []

    if(!bundles.length)
      bundles = [[{'transportation': 'None'}]]

    bundles.forEach(bundle => {
      transportation.tripOption.forEach(transportation => {
          var bundleCopy = bundle.slice()
          bundleCopy.push({'transportation': transportation})
          addTransportation.push(bundleCopy)
      })
    })

    bundles = addTransportation
  }

  if(hotels.length >= 0) {
    var addHotel = []
    console.log("hotels before hotels.forEach: ", hotels)

    if(!bundles.length)
        bundles = [[{transportation: 'Travel by car!'}]]

    bundles.forEach(bundle => {
        hotels.forEach(hotel => {
            if(Number(hotel.lowRate)  < budgetDistribution.lodging * req.body.budget) {
              var bundleCopy = bundle.slice()

              bundleCopy.push({ 'hotel':
                {name: hotel.name,
                 address: hotel.address,
                 city: hotel.city,
                 hotelStarRating: hotel.hotelStarRating,
                 hotelGuestRating: hotel.hotelGuestRating,
                 pic: hotel.thumbnailUrl,
                 lowRate: hotel.lowRate
                }
              })
              addHotel.push(bundleCopy)
            }
        })
      })

    bundles = addHotel
  }

  if(activities.length) {
    var addActivity = []

    if(!bundles.length)
      bundles = [[{'lodging': 'Stay with a Friend!'}, {'transportation': 'Travel by Car!'}]]

    bundles.forEach(bundle => {
      activities.forEach(activity => {
        if(activity.category === 'Arcade' || activity.category === 'Campground') {

          var bundleCopy = bundle.slice()

          bundleCopy.push({'activity': {
              category: activity.category,
              results: activity.results
            }
          })
          addActivity.push(bundleCopy)
        }
      })
    })
    bundles = addActivity
  }
  else
    bundles = [[{'transportation': 'Sorry nothing found'}, {'lodging': 'Sorry nothing found'}, {'activities': 'Sorry nothing found'}]]

  if(bundles.length >= 6)
    return bundles.slice(0,6)
  else return bundles
}



