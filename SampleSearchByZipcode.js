fetch("https://us-restaurant-menus.p.rapidapi.com/restaurants/zip_code/94104?page=2", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "us-restaurant-menus.p.rapidapi.com",
		"x-rapidapi-key": "8d745e65dcmsh12b93a292d573cdp1afde5jsnef2ba2a24071"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.log(err);
});


{
    "result": {
        "totalResults": 135,
        "data": [
            {
                "geo": {
                    "lon": -122.402831,
                    "lat": 37.790134
                },
                "hours": "Mon-Fri: 8am-4pm",
                "address": {
                    "city": "San Francisco",
                    "formatted": "126 Sutter St San Francisco, CA 94104",
                    "street": "126 Sutter St",
                    "state": "CA",
                    "postal_code": "94104"
                },
                "restaurant_phone": "(415) 986-2676",
                "restaurant_id": 357566,
                "price_range": "$$",
                "menus": [],
                "price_range_100": 2,
                "cuisines": [
                    "Deli Food"
                ],
                "restaurant_name": "Shorty Goldstein's"
            },
            {
                "geo": {
                    "lon": -122.400924,
                    "lat": 37.789394
                },
                "hours": "Daily: 10:30am-8pm",
                "address": {
                    "city": "San Francisco",
                    "formatted": "595 Market St San Francisco, CA 94104",
                    "street": "595 Market St",
                    "state": "CA",
                    "postal_code": "94104"
                },
                "restaurant_phone": "",
                "restaurant_id": 385943,
                "price_range": "$$",
                "menus": [],
                "price_range_100": 2,
                "cuisines": [
                    "Cocktails",
                    "Mexican"
                ],
                "restaurant_name": "Uno Dos Tacos"
            },
            {
                "geo": {
                    "lon": -122.40363,
                    "lat": 37.791801
                },
                "hours": "Daily: 6:30am-5pm",
                "address": {
                    "city": "SAN FRANCISCO",
                    "formatted": "475 Pine St SAN FRANCISCO, CA 94104",
                    "street": "475 Pine St",
                    "state": "CA",
                    "postal_code": "94104"
                },
                "restaurant_phone": "(415) 781-0894",
                "restaurant_id": 62928,
                "price_range": "",
                "menus": [],
                "price_range_100": 0,
                "cuisines": [
                    "Mediterranean"
                ],
                "restaurant_name": "Krivaar Cafe"
            },
            {
                "geo": {
                    "lon": -122.402166,
                    "lat": 37.789132
                },
                "hours": "",
                "address": {
                    "city": "SAN FRANCISCO",
                    "formatted": "1 Post St SAN FRANCISCO, CA 94104",
                    "street": "1 Post St",
                    "state": "CA",
                    "postal_code": "94104"
                },
                "restaurant_phone": "(415) 434-3131",
                "restaurant_id": 62923,
                "price_range": "",
                "menus": [],
                "price_range_100": 0,
                "cuisines": [
                    "Japanese"
                ],
                "restaurant_name": "Go Go Sushi"
            },
            {
                "geo": {
                    "lon": -122.403754,
                    "lat": 37.791548
                },
                "hours": "",
                "address": {
                    "city": "San Francisco",
                    "formatted": "56 Belden Place San Francisco, CA 94104",
                    "street": "56 Belden Place",
                    "state": "CA",
                    "postal_code": "94104"
                },
                "restaurant_phone": "(415) 397-8800",
                "restaurant_id": 342977,
                "price_range": "$",
                "menus": [],
                "price_range_100": 1,
                "cuisines": [],
                "restaurant_name": "Sauce: Belden Place"
            },
            {
                "geo": {
                    "lon": -122.402157,
                    "lat": 37.79287
                },
                "hours": "Mon-Sat: 7am-7pm",
                "address": {
                    "city": "San Francisco",
                    "formatted": "465 California St San Francisco, CA 94104",
                    "street": "465 California St",
                    "state": "CA",
                    "postal_code": "94104"
                },
                "restaurant_phone": "(415) 402-0576",
                "restaurant_id": 354951,
                "price_range": "$$",
                "menus": [],
                "price_range_100": 2,
                "cuisines": [
                    "Bakery &amp; Pastries",
                    "French",
                    "Sandwiches"
                ],
                "restaurant_name": "La Boulange"
            },
            {
                "geo": {
                    "lon": -122.40288,
                    "lat": 37.78901
                },
                "hours": "Daily: 10am-5pm",
                "address": {
                    "city": "San Francisco",
                    "formatted": "50 Post St San Francisco, CA 94104",
                    "street": "50 Post St",
                    "state": "CA",
                    "postal_code": "94104"
                },
                "restaurant_phone": "(415) 956-3392",
                "restaurant_id": 323203,
                "price_range": "$",
                "menus": [],
                "price_range_100": 1,
                "cuisines": [
                    "Asian Fusion",
                    "Chinese"
                ],
                "restaurant_name": "New Asia"
            },
            {
                "geo": {
                    "lon": -122.40277,
                    "lat": 37.78996
                },
                "hours": "Mon-Fri: 7am-5:15pm  Sat-Sun: 8am-5pm",
                "address": {
                    "city": "San Francisco",
                    "formatted": "199 Sutter St San Francisco, CA 94104",
                    "street": "199 Sutter St",
                    "state": "CA",
                    "postal_code": "94104"
                },
                "restaurant_phone": "",
                "restaurant_id": 328968,
                "price_range": "$",
                "menus": [],
                "price_range_100": 1,
                "cuisines": [
                    "Local/Organic",
                    "Sandwiches"
                ],
                "restaurant_name": "Bread And Cocoa"
            },
            {
                "geo": {
                    "lon": -122.4,
                    "lat": 37.791332
                },
                "hours": "",
                "address": {
                    "city": "SAN FRANCISCO",
                    "formatted": "110 Bush St SAN FRANCISCO, CA 94104",
                    "street": "110 Bush St",
                    "state": "CA",
                    "postal_code": "94104"
                },
                "restaurant_phone": "(415) 402-0270",
                "restaurant_id": 123256,
                "price_range": "",
                "menus": [],
                "price_range_100": 0,
                "cuisines": [
                    "American",
                    "Sandwiches",
                    "Wraps"
                ],
                "restaurant_name": "Quiznos Sub"
            },
            {
                "geo": {
                    "lon": -122.401736,
                    "lat": 37.789778
                },
                "hours": "",
                "address": {
                    "city": "SAN FRANCISCO",
                    "formatted": "44 Montgomery St SAN FRANCISCO, CA 94104",
                    "street": "44 Montgomery St",
                    "state": "CA",
                    "postal_code": "94104"
                },
                "restaurant_phone": "(415) 397-4394",
                "restaurant_id": 117244,
                "price_range": "",
                "menus": [],
                "price_range_100": 0,
                "cuisines": [
                    "American",
                    "Coffee &amp; Tea"
                ],
                "restaurant_name": "Starbucks Coffee"
            },
            {
                "geo": {
                    "lon": -122.400042,
                    "lat": 37.791413
                },
                "hours": "Mon-Fri: 11am-3pm",
                "address": {
                    "city": "San Francisco",
                    "formatted": "132 Bush St San Francisco, CA 94104",
                    "street": "132 Bush St",
                    "state": "CA",
                    "postal_code": "94104"
                },
                "restaurant_phone": "(415) 834-9898",
                "restaurant_id": 293970,
                "price_range": "$$",
                "menus": [],
                "price_range_100": 2,
                "cuisines": [
                    "Japanese",
                    "Sushi"
                ],
                "restaurant_name": "Sushi Umi"
            },
            {
                "geo": {
                    "lon": -122.402127,
                    "lat": 37.791115
                },
                "hours": " ",
                "address": {
                    "city": "San Francisco",
                    "formatted": "Location Varies San Francisco, CA 94104",
                    "street": "Location Varies",
                    "state": "CA",
                    "postal_code": "94104"
                },
                "restaurant_phone": "(415) 413-3924",
                "restaurant_id": 360787,
                "price_range": "$",
                "menus": [],
                "price_range_100": 1,
                "cuisines": [
                    "Local/Organic",
                    "Sandwiches",
                    "Vietnamese"
                ],
                "restaurant_name": "Nom Nom Truck"
            },
            {
                "geo": {
                    "lon": -122.402678,
                    "lat": 37.789066
                },
                "hours": "Sun-Thu: 11am-12am  Fri-Sat: 11am-3am",
                "address": {
                    "city": "SAN FRANCISCO",
                    "formatted": "50 Post St SAN FRANCISCO, CA 94104",
                    "street": "50 Post St",
                    "state": "CA",
                    "postal_code": "94104"
                },
                "restaurant_phone": "(415) 362-2228",
                "restaurant_id": 46918,
                "price_range": "$",
                "menus": [],
                "price_range_100": 1,
                "cuisines": [
                    "Pasta",
                    "Pizza"
                ],
                "restaurant_name": "Pizzelle"
            },
            {
                "geo": {
                    "lon": -122.403894,
                    "lat": 37.790811
                },
                "hours": "Daily: 11am-9pm",
                "address": {
                    "city": "SAN FRANCISCO",
                    "formatted": "375 Bush St SAN FRANCISCO, CA 94104",
                    "street": "375 Bush St",
                    "state": "CA",
                    "postal_code": "94104"
                },
                "restaurant_phone": "(415) 986-2266",
                "restaurant_id": 46921,
                "price_range": "",
                "menus": [],
                "price_range_100": 0,
                "cuisines": [
                    "Italian"
                ],
                "restaurant_name": "Popolo"
            },
            {
                "geo": {
                    "lon": -122.403874,
                    "lat": 37.792456
                },
                "hours": "Daily: 6:30am-5pm",
                "address": {
                    "city": "San Francisco",
                    "formatted": "555 California St San Francisco, CA 94104",
                    "street": "555 California St",
                    "state": "CA",
                    "postal_code": "94104"
                },
                "restaurant_phone": "(415) 434-4117",
                "restaurant_id": 356801,
                "price_range": "$",
                "menus": [],
                "price_range_100": 1,
                "cuisines": [
                    "Coffee &amp; Tea",
                    "Crepes"
                ],
                "restaurant_name": "Creperie Saint-Germain"
            },
            {
                "geo": {
                    "lon": -122.403888,
                    "lat": 37.79117
                },
                "hours": "Mon-Fri: 11:30am-3pm+5pm-9pm",
                "address": {
                    "city": "San Francisco",
                    "formatted": "318 Kearny St San Francisco, CA 94104",
                    "street": "318 Kearny St",
                    "state": "CA",
                    "postal_code": "94104"
                },
                "restaurant_phone": "(415) 956-4056",
                "restaurant_id": 314286,
                "price_range": "$$$",
                "menus": [],
                "price_range_100": 3,
                "cuisines": [
                    "Italian",
                    "Pizza"
                ],
                "restaurant_name": "Pachino"
            },
            {
                "geo": {
                    "lon": -122.399894,
                    "lat": 37.791496
                },
                "hours": "Mon-Fri: 6am-5pm",
                "address": {
                    "city": "San Francisco",
                    "formatted": "100 Bush St Ste 110 San Francisco, CA 94104",
                    "street": "100 Bush St Ste 110",
                    "state": "CA",
                    "postal_code": "94104"
                },
                "restaurant_phone": "(415) 399-1816",
                "restaurant_id": 437759,
                "price_range": "$$",
                "menus": [],
                "price_range_100": 2,
                "cuisines": [
                    "Coffee &amp; Tea",
                    "French",
                    "Healthy"
                ],
                "restaurant_name": "Chez Julien"
            },
            {
                "geo": {
                    "lon": -122.402737,
                    "lat": 37.788209
                },
                "hours": "Sun-Thu: 10:30am-9pm  Fri-Sat: 10:30am-9:30pm",
                "address": {
                    "city": "San Francisco",
                    "formatted": "650 Market St San Francisco, CA 94104",
                    "street": "650 Market St",
                    "state": "CA",
                    "postal_code": "94104"
                },
                "restaurant_phone": "(415) 362-8663",
                "restaurant_id": 385227,
                "price_range": "$",
                "menus": [],
                "price_range_100": 1,
                "cuisines": [
                    "Sandwiches",
                    "Vietnamese"
                ],
                "restaurant_name": "Bun Mee on Market St"
            },
            {
                "geo": {
                    "lon": -122.399781,
                    "lat": 37.792295
                },
                "hours": "",
                "address": {
                    "city": "SAN FRANCISCO",
                    "formatted": "200 Pine St SAN FRANCISCO, CA 94104",
                    "street": "200 Pine St",
                    "state": "CA",
                    "postal_code": "94104"
                },
                "restaurant_phone": "(415) 956-0760",
                "restaurant_id": 44504,
                "price_range": "",
                "menus": [],
                "price_range_100": 0,
                "cuisines": [
                    "American",
                    "Hot Dogs"
                ],
                "restaurant_name": "Fatt Dog"
            },
            {
                "geo": {
                    "lon": -122.399948,
                    "lat": 37.791477
                },
                "hours": "Mon-Fri: 5am-5pm",
                "address": {
                    "city": "San Francisco",
                    "formatted": "100 Bush St San Francisco, CA 94104",
                    "street": "100 Bush St",
                    "state": "CA",
                    "postal_code": "94104"
                },
                "restaurant_phone": "(415) 398-6769",
                "restaurant_id": 372997,
                "price_range": "$",
                "menus": [],
                "price_range_100": 1,
                "cuisines": [
                    "Desserts",
                    "Vietnamese"
                ],
                "restaurant_name": "Happy Donut"
            },
            {
                "geo": {
                    "lon": -122.40377,
                    "lat": 37.790878
                },
                "hours": "Mon-Fri: 9:30am-3pm",
                "address": {
                    "city": "San Francisco",
                    "formatted": "380 Bush St Ste 5 San Francisco, CA 94104",
                    "street": "380 Bush St Ste 5",
                    "state": "CA",
                    "postal_code": "94104"
                },
                "restaurant_phone": "(415) 392-3794",
                "restaurant_id": 395868,
                "price_range": "$",
                "menus": [],
                "price_range_100": 1,
                "cuisines": [
                    "Mexican"
                ],
                "restaurant_name": "Estrella Taqueria"
            },
            {
                "geo": {
                    "lon": -122.402774,
                    "lat": 37.793011
                },
                "hours": "",
                "address": {
                    "city": "San Francisco",
                    "formatted": "408 Montgomery St San Francisco, CA 94104",
                    "street": "408 Montgomery St",
                    "state": "CA",
                    "postal_code": "94104"
                },
                "restaurant_phone": "(415) 391-1123",
                "restaurant_id": 304173,
                "price_range": "$",
                "menus": [],
                "price_range_100": 1,
                "cuisines": [
                    "American",
                    "Healthy",
                    "Salads",
                    "Sandwiches",
                    "Soups",
                    "Subs"
                ],
                "restaurant_name": "SUBWAY®"
            },
            {
                "geo": {
                    "lon": -122.403214,
                    "lat": 37.791835
                },
                "hours": "",
                "address": {
                    "city": "SAN FRANCISCO",
                    "formatted": "441 Pine St SAN FRANCISCO, CA 94104",
                    "street": "441 Pine St",
                    "state": "CA",
                    "postal_code": "94104"
                },
                "restaurant_phone": "",
                "restaurant_id": 216455,
                "price_range": "",
                "menus": [],
                "price_range_100": 0,
                "cuisines": [
                    "American",
                    "Burgers"
                ],
                "restaurant_name": "McDonald's"
            },
            {
                "geo": {
                    "lon": -122.403757,
                    "lat": 37.792774
                },
                "hours": "Mon-Fri: 6am-2:30pm",
                "address": {
                    "city": "San Francisco",
                    "formatted": "555 California St San Francisco, CA 94104",
                    "street": "555 California St",
                    "state": "CA",
                    "postal_code": "94104"
                },
                "restaurant_phone": "(415) 788-6297",
                "restaurant_id": 19723,
                "price_range": "$$",
                "menus": [],
                "price_range_100": 2,
                "cuisines": [
                    "American",
                    "Diner"
                ],
                "restaurant_name": "Max's Market"
            },
            {
                "geo": {
                    "lon": -122.400559,
                    "lat": 37.789903
                },
                "hours": " ",
                "address": {
                    "city": "San Francisco",
                    "formatted": "550 Market St San Francisco, CA 94104",
                    "street": "550 Market St",
                    "state": "CA",
                    "postal_code": "94104"
                },
                "restaurant_phone": "(415) 433-0533",
                "restaurant_id": 349780,
                "price_range": "$",
                "menus": [],
                "price_range_100": 1,
                "cuisines": [
                    "American"
                ],
                "restaurant_name": "All Star Cafe"
            },
            {
                "geo": {
                    "lon": -122.400789,
                    "lat": 37.792457
                },
                "hours": "Mon - Fri:   Breakfast: 6:30am - 11am    Lunch: 11am - 4pm   Dinner: 4pm - 10pm   Sat - Sun:  Breakfast: 7am - 11am    Lunch 11am - 4pm   Dinner 4pm - 10pm",
                "address": {
                    "city": "San Francisco",
                    "formatted": "222 Sansome St San Francisco, CA 94104",
                    "street": "222 Sansome St",
                    "state": "CA",
                    "postal_code": "94104"
                },
                "restaurant_phone": "(415) 276-9620",
                "restaurant_id": 364998,
                "price_range": "$",
                "menus": [],
                "price_range_100": 1,
                "cuisines": [
                    "American (New)"
                ],
                "restaurant_name": "Brasserie S&P"
            },
            {
                "geo": {
                    "lon": -122.401411,
                    "lat": 37.789231
                },
                "hours": "Mon-Fri: 6am-8pm  Sat: 8am-6pm",
                "address": {
                    "city": "San Francisco",
                    "formatted": "615 Market St San Francisco, CA 94104",
                    "street": "615 Market St",
                    "state": "CA",
                    "postal_code": "94104"
                },
                "restaurant_phone": "(415) 615-9889",
                "restaurant_id": 355775,
                "price_range": "$",
                "menus": [],
                "price_range_100": 1,
                "cuisines": [
                    "Chinese",
                    "Deli Food",
                    "Sandwiches"
                ],
                "restaurant_name": "Lee's Deli"
            },
            {
                "geo": {
                    "lon": -122.402018,
                    "lat": 37.789663
                },
                "hours": "Mon-Fri: 6am-3:30pm",
                "address": {
                    "city": "San Francisco",
                    "formatted": "44 Montgomery St San Francisco, CA 94104",
                    "street": "44 Montgomery St",
                    "state": "CA",
                    "postal_code": "94104"
                },
                "restaurant_phone": "(415) 837-0170",
                "restaurant_id": 276282,
                "price_range": "",
                "menus": [],
                "price_range_100": 0,
                "cuisines": [
                    "Mexican",
                    "Sandwiches",
                    "Smoothies &amp; Juices"
                ],
                "restaurant_name": "Ramzi's Cafe & Catering"
            },
            {
                "geo": {
                    "lon": -122.401158,
                    "lat": 37.790154
                },
                "hours": "Mon-Fri: 6am-6pm",
                "address": {
                    "city": "San Francisco",
                    "formatted": "39 Sutter St San Francisco, CA 94104",
                    "street": "39 Sutter St",
                    "state": "CA",
                    "postal_code": "94104"
                },
                "restaurant_phone": "(415) 421-2091",
                "restaurant_id": 276404,
                "price_range": "$",
                "menus": [],
                "price_range_100": 1,
                "cuisines": [
                    "Coffee &amp; Tea"
                ],
                "restaurant_name": "Caffé Bianco"
            },
            {
                "geo": {
                    "lon": -122.401894,
                    "lat": 37.792661
                },
                "hours": "Mon-Fri: 7am-3:30pm",
                "address": {
                    "city": "San Francisco",
                    "formatted": "70 Leidesdorff St San Francisco, CA 94104",
                    "street": "70 Leidesdorff St",
                    "state": "CA",
                    "postal_code": "94104"
                },
                "restaurant_phone": "(415) 576-1144",
                "restaurant_id": 308269,
                "price_range": "$$",
                "menus": [],
                "price_range_100": 2,
                "cuisines": [
                    "Coffee &amp; Tea",
                    "Sandwiches"
                ],
                "restaurant_name": "Cafe Venue"
            },
            {
                "geo": {
                    "lon": -122.402678,
                    "lat": 37.789066
                },
                "hours": "",
                "address": {
                    "city": "SAN FRANCISCO",
                    "formatted": "50 Post St SAN FRANCISCO, CA 94104",
                    "street": "50 Post St",
                    "state": "CA",
                    "postal_code": "94104"
                },
                "restaurant_phone": "(415) 956-3392",
                "restaurant_id": 62905,
                "price_range": "",
                "menus": [],
                "price_range_100": 0,
                "cuisines": [
                    "Mexican"
                ],
                "restaurant_name": "Chipotle"
            },
            {
                "geo": {
                    "lon": -122.404121,
                    "lat": 37.792995
                },
                "hours": "Mon-Fri: 7am-4pm",
                "address": {
                    "city": "San Francisco",
                    "formatted": "580 California St San Francisco, CA 94104",
                    "street": "580 California St",
                    "state": "CA",
                    "postal_code": "94104"
                },
                "restaurant_phone": "(415) 781-7687",
                "restaurant_id": 342136,
                "price_range": "$",
                "menus": [],
                "price_range_100": 1,
                "cuisines": [
                    "Local/Organic",
                    "Soups"
                ],
                "restaurant_name": "SF Soup Company"
            },
            {
                "geo": {
                    "lon": -122.399743,
                    "lat": 37.792319
                },
                "hours": "Mon-Fri: 10am-3pm",
                "address": {
                    "city": "San Francisco",
                    "formatted": "200 Pine St San Francisco, CA 94104",
                    "street": "200 Pine St",
                    "state": "CA",
                    "postal_code": "94104"
                },
                "restaurant_phone": "(415) 773-1220",
                "restaurant_id": 308245,
                "price_range": "$",
                "menus": [],
                "price_range_100": 1,
                "cuisines": [
                    "Salads",
                    "Sandwiches"
                ],
                "restaurant_name": "Chez Fayala"
            },
            {
                "geo": {
                    "lon": -122.403819,
                    "lat": 37.790821
                },
                "hours": "Daily: 9am-3pm",
                "address": {
                    "city": "San Francisco",
                    "formatted": "380 Bush St San Francisco, CA 94104",
                    "street": "380 Bush St",
                    "state": "CA",
                    "postal_code": "94104"
                },
                "restaurant_phone": "(415) 433-2768",
                "restaurant_id": 62927,
                "price_range": "",
                "menus": [],
                "price_range_100": 0,
                "cuisines": [
                    "Japanese",
                    "Sushi"
                ],
                "restaurant_name": "Sushi Raw"
            },
            {
                "geo": {
                    "lon": -122.402737,
                    "lat": 37.789011
                },
                "hours": "Daily: 10:30am-3:30pm",
                "address": {
                    "city": "San Francisco",
                    "formatted": "50 Post St San Francisco, CA 94104",
                    "street": "50 Post St",
                    "state": "CA",
                    "postal_code": "94104"
                },
                "restaurant_phone": "(415) 391-5588",
                "restaurant_id": 349966,
                "price_range": "$$",
                "menus": [],
                "price_range_100": 2,
                "cuisines": [
                    "Japanese",
                    "Sushi"
                ],
                "restaurant_name": "Niji Japanese Grille"
            },
            {
                "geo": {
                    "lon": -122.401982,
                    "lat": 37.789128
                },
                "hours": "Mon-Fri: 10am-6:30pm  Sat: 11am-4pm",
                "address": {
                    "city": "San Francisco",
                    "formatted": "1 Post St San Francisco, CA 94104",
                    "street": "1 Post St",
                    "state": "CA",
                    "postal_code": "94104"
                },
                "restaurant_phone": "(415) 391-7071",
                "restaurant_id": 360150,
                "price_range": "$",
                "menus": [],
                "price_range_100": 1,
                "cuisines": [
                    "Hot Dogs"
                ],
                "restaurant_name": "Zog's Dogs"
            },
            {
                "geo": {
                    "lon": -122.40118,
                    "lat": 37.791019
                },
                "hours": "Mon-Fri: 6am-6pm",
                "address": {
                    "city": "San Francisco",
                    "formatted": "225 Bush St San Francisco, CA 94104",
                    "street": "225 Bush St",
                    "state": "CA",
                    "postal_code": "94104"
                },
                "restaurant_phone": "(415) 788-7011",
                "restaurant_id": 357750,
                "price_range": "$",
                "menus": [],
                "price_range_100": 1,
                "cuisines": [
                    "Coffee &amp; Tea"
                ],
                "restaurant_name": "Coffee Cultures"
            },
            {
                "geo": {
                    "lon": -122.402677,
                    "lat": 37.789047
                },
                "hours": "Daily: 10am-3am",
                "address": {
                    "city": "San Francisco",
                    "formatted": "50 Post St San Francisco, CA 94104",
                    "street": "50 Post St",
                    "state": "CA",
                    "postal_code": "94104"
                },
                "restaurant_phone": "(415) 398-4800",
                "restaurant_id": 299514360,
                "price_range": "$",
                "menus": [],
                "price_range_100": 1,
                "cuisines": [
                    "Mexican"
                ],
                "restaurant_name": "360 Degrees Gourmet Burritos"
            },
            {
                "geo": {
                    "lon": -122.402074,
                    "lat": 37.790752
                },
                "hours": "Mon-Fri: 6am-10pm  Sat-Sun: 10am-10pm",
                "address": {
                    "city": "San Francisco",
                    "formatted": "180 Montgomery St San Francisco, CA 94104",
                    "street": "180 Montgomery St",
                    "state": "CA",
                    "postal_code": "94104"
                },
                "restaurant_phone": "(415) 322-1048",
                "restaurant_id": 386763,
                "price_range": "$",
                "menus": [],
                "price_range_100": 1,
                "cuisines": [
                    "Coffee &amp; Tea"
                ],
                "restaurant_name": "Workshop Cafe"
            },
            {
                "geo": {
                    "lon": -122.399922,
                    "lat": 37.79228
                },
                "hours": "",
                "address": {
                    "city": "SAN FRANCISCO",
                    "formatted": "200 Pine St SAN FRANCISCO, CA 94104",
                    "street": "200 Pine St",
                    "state": "CA",
                    "postal_code": "94104"
                },
                "restaurant_phone": "(415) 362-7790",
                "restaurant_id": 56943,
                "price_range": "",
                "menus": [],
                "price_range_100": 0,
                "cuisines": [
                    "Sandwiches"
                ],
                "restaurant_name": "Subway"
            },
            {
                "geo": {
                    "lon": -122.402039,
                    "lat": 37.792145
                },
                "hours": "Mon-Fri: 11:30am-9pm  Sat: 5:30pm-9pm  ",
                "address": {
                    "city": "San Francisco",
                    "formatted": "360 Pine St San Francisco, CA 94104",
                    "street": "360 Pine St",
                    "state": "CA",
                    "postal_code": "94104"
                },
                "restaurant_phone": "(415) 693-0360",
                "restaurant_id": 329735,
                "price_range": "$$$",
                "menus": [],
                "price_range_100": 3,
                "cuisines": [
                    "American (New)",
                    "Italian"
                ],
                "restaurant_name": "Credo"
            },
            {
                "geo": {
                    "lon": -122.402979,
                    "lat": 37.789164
                },
                "hours": "Mon-Fri: 10am-7pm",
                "address": {
                    "city": "San Francisco",
                    "formatted": "50 Post St San Francisco, CA 94104",
                    "street": "50 Post St",
                    "state": "CA",
                    "postal_code": "94104"
                },
                "restaurant_phone": "(415) 982-1234",
                "restaurant_id": 459879,
                "price_range": "$$",
                "menus": [],
                "price_range_100": 2,
                "cuisines": [
                    "Sandwiches"
                ],
                "restaurant_name": "Jimmy John's"
            },
            {
                "geo": {
                    "lon": -122.402163,
                    "lat": 37.789633
                },
                "hours": "Daily: 10:30am-7:30pm",
                "address": {
                    "city": "San Francisco",
                    "formatted": "41 Montgomery St San Francisco, CA 94104",
                    "street": "41 Montgomery St",
                    "state": "CA",
                    "postal_code": "94104"
                },
                "restaurant_phone": "(415) 772-9134",
                "restaurant_id": 302223,
                "price_range": "$$",
                "menus": [],
                "price_range_100": 2,
                "cuisines": [
                    "Indian",
                    "Japanese",
                    "Vietnamese"
                ],
                "restaurant_name": "Bamboo Asia"
            },
            {
                "geo": {
                    "lon": -122.402276,
                    "lat": 37.791583
                },
                "hours": "",
                "address": {
                    "city": "SAN FRANCISCO",
                    "formatted": "250 Montgomery St SAN FRANCISCO, CA 94104",
                    "street": "250 Montgomery St",
                    "state": "CA",
                    "postal_code": "94104"
                },
                "restaurant_phone": "(415) 288-9980",
                "restaurant_id": 135662,
                "price_range": "",
                "menus": [],
                "price_range_100": 0,
                "cuisines": [
                    "American",
                    "Smoothies &amp; Juices"
                ],
                "restaurant_name": "Jamba Juice"
            },
            {
                "geo": {
                    "lon": -122.402977,
                    "lat": 37.789165
                },
                "hours": "",
                "address": {
                    "city": "San Francisco",
                    "formatted": "50 Post St San Francisco, CA 94104",
                    "street": "50 Post St",
                    "state": "CA",
                    "postal_code": "94104"
                },
                "restaurant_phone": "(415) 445-0114",
                "restaurant_id": 491148,
                "price_range": "",
                "menus": [],
                "price_range_100": 0,
                "cuisines": [],
                "restaurant_name": "Green Olive"
            },
            {
                "geo": {
                    "lon": -122.403659,
                    "lat": 37.791421
                },
                "hours": "Mon-Fri: 11am-11pm   Sat: 5pm-11pm",
                "address": {
                    "city": "San Francisco",
                    "formatted": "52 Belden Pl San Francisco, CA 94104",
                    "street": "52 Belden Pl",
                    "state": "CA",
                    "postal_code": "94104"
                },
                "restaurant_phone": "(415) 986-8887",
                "restaurant_id": 21199,
                "price_range": "$$$$",
                "menus": [],
                "price_range_100": 4,
                "cuisines": [
                    "Gastropub",
                    "Italian",
                    "Mediterranean"
                ],
                "restaurant_name": "Belden Taverna"
            },
            {
                "geo": {
                    "lon": -122.402588,
                    "lat": 37.790085
                },
                "hours": "Breakfast  Mon-Fri: 8am-11am  Lunch  Mon-Fri: 11am-2pm",
                "address": {
                    "city": "San Francisco",
                    "formatted": "8 Trinity Pl San Francisco, CA 94104",
                    "street": "8 Trinity Pl",
                    "state": "CA",
                    "postal_code": "94104"
                },
                "restaurant_phone": "(415) 392-3246",
                "restaurant_id": 359669,
                "price_range": "$$",
                "menus": [],
                "price_range_100": 2,
                "cuisines": [
                    "Bakery &amp; Pastries",
                    "Salads",
                    "Sandwiches"
                ],
                "restaurant_name": "The Golden West"
            },
            {
                "geo": {
                    "lon": -122.402841,
                    "lat": 37.792989
                },
                "hours": "Breakfast   Mon-Fri: 6:30am-10am   Sat-Sun: 7am-11am   Lunch   Mon-Fri: 11:30am-2pm   Dinner   Daily: 5:30pm-10pm",
                "address": {
                    "city": "San Francisco",
                    "formatted": "500 California St San Francisco, CA 94104",
                    "street": "500 California St",
                    "state": "CA",
                    "postal_code": "94104"
                },
                "restaurant_phone": "(415) 273-3085",
                "restaurant_id": 257960,
                "price_range": "$",
                "menus": [],
                "price_range_100": 1,
                "cuisines": [
                    "Seafood",
                    "Steak"
                ],
                "restaurant_name": "Bob's Steak & Chophouse"
            },
            {
                "geo": {
                    "lon": -122.401585,
                    "lat": 37.793622
                },
                "hours": "",
                "address": {
                    "city": "SAN FRANCISCO",
                    "formatted": "343 Sansome St SAN FRANCISCO, CA 94104",
                    "street": "343 Sansome St",
                    "state": "CA",
                    "postal_code": "94104"
                },
                "restaurant_phone": "(415) 989-8759",
                "restaurant_id": 117226,
                "price_range": "",
                "menus": [],
                "price_range_100": 0,
                "cuisines": [
                    "American",
                    "Coffee &amp; Tea"
                ],
                "restaurant_name": "Starbucks Coffee"
            },
            {
                "geo": {
                    "lon": -122.403819,
                    "lat": 37.790821
                },
                "hours": "Mon-Fri: 8am-3pm",
                "address": {
                    "city": "SAN FRANCISCO",
                    "formatted": "380 Bush St SAN FRANCISCO, CA 94104",
                    "street": "380 Bush St",
                    "state": "CA",
                    "postal_code": "94104"
                },
                "restaurant_phone": "(415) 398-3322",
                "restaurant_id": 62935,
                "price_range": "",
                "menus": [],
                "price_range_100": 0,
                "cuisines": [
                    "Chinese"
                ],
                "restaurant_name": "Ai Ocean Cafe"
            }
        ],
        "numResults": 50,
        "page": 1,
        "pages": 3,
        "morePages": true
    }
}