const chalk = require('chalk')
const request = require('request')
const url = 'https://api.darksky.net/forecast/94a5a4fffdc56684d95e97085f8c718f/6.2219611,-75.5741438?units=si'

request({ url, json:true }, (error, response) => {
    if(error){
        return console.log(chalk.bold.red('Unable to connect to weather service!'))
    }
    console.log(`Actualmente afuera está ${ chalk.bold.blue(response.body.currently.temperature)} °C y hay ${ chalk.bold.blue(response.body.currently.precipProbability)} % probabilidad que llueva`)
    

})

request({ url:"https://api.mapbox.com/geocoding/v5/mapbox.places/Buritica.json?access_token=pk.eyJ1IjoiYW5nZWxnb2V6IiwiYSI6ImNrMTc1c3gwbjFjengzZG1vaHpzZTN4bmkifQ.PGSVWaaBEnYLIRlk7BPQwA", json:true }, (error, response) => {
    const latitude = response.body.features[0].center[1]
    const longitude  = response.body.features[0].center[0]
    console.log(latitude, longitude)
})