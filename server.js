const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000


app.use(cors())

let dishes = {
    'pizza': {
        'origin': 'Italy',
        'protein': 'Pepperoni',
        'price': 'Cheap', 
        'healthy': 'Not really',
    },
    'steak':{
        'origin': 'America',
        'protein': 'Cow',
        'price': 'Expensive', 
        'healthy': 'In moderation',
    },
    'ramen':{
        'origin': 'Japan',
        'protein': 'Pork',
        'price': 'Moderate', 
        'healthy': 'No but it is delicious',
    },
    'notfood':{
        'origin': 'This is not food!',
        'protein': 'Stop it!',
        'price': 'Go eat somewhere else!', 
        'healthy': 'Go exercise!',
    },
}

app.get('/',(request, response )=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request,response)=>{
    const foodDishes = request.params.name.toLowerCase()
    if( dishes[foodDishes]){
        response.json(dishes[foodDishes])
    }else{
        response.json(dishes['notfood'])
    }
    response.json(dishes)
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is now running on port${PORT}! Check me Out!!`)
})