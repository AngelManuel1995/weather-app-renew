const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')
const chalk = require('chalk')
const request = require('request')


// request({ url, json:true }, (error, response) => {
//     if(error){
//         return console.log(chalk.bold.red('Unable to connect to weather service!'))
//     }
//     console.log(`Actualmente afuera está ${ chalk.bold.blue(response.body.currently.temperature)} °C y hay ${ chalk.bold.blue(response.body.currently.precipProbability)} % probabilidad que llueva`)
// })

geocode('Cañasgordas', (error, response) => {

    if(error){
        return console.log(error)
    }
    const { location, latitude, longitude } = response 

    forecast(latitude, longitude, (error, response) => {
        if (error){
            console.log(error)
        } else {
            console.log(`${response} en ${location}`)
        }
    })
})

