# locationsapi

This is a RESTful NodeJS Api for my travel mapping website

The api contains the controllers, routes, and models for "locations", which are then implemented as markers on Google Maps. Each location has a name, a content or description string, latitude and longitude, and an id.

The website then requests the locationsapi as follows:

Getting all the locations: method: get /locations/ 
Getting a specific location: method: get /locations/locationid

Updating, and deleting can be done in a similar manner with the POST and DELETE methods.

The locationsapi runs on a heroku server.
