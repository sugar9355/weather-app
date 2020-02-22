const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/0eb7599930124ea352849696c805f0a8/' + latitude + ',' + longitude+'?units=auto'
    
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
     
            callback(undefined, {
                temp:body.currently.temperature,
                summary:body.daily.data[0].summary,
                rain: body.currently.precipProbability+'% chance of rain',
                wind:body.currently.windSpeed+' km/h',
                humidity:body.currently.humidity+' Humidity'
            }
               
            )
          
       
            
        }
    })
}

module.exports = forecast