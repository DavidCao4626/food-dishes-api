document.querySelector('button').addEventListener('click', apiRequest)

async function apiRequest(){
    const foodDishes = document.querySelector('input').value
    try{
        const response = await fetch(`https://food-dishes-api-100devs.herokuapp.com/api/${foodDishes}`)
        const data = await response.json()

        console.log(data)
        document.querySelector('h2').innerText = data.origin , data.protein , data.price, data.healthy
    }catch(error){
        console.log(error)
    }
}