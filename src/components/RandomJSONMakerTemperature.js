export function RandomJSONMAker(numberOFOBjects) {
    
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const data = {
        temperatures: []
    }
    const cities = [ 'Oslo', 'Kristiansand', 'Bergen', 'Trondheim', 'Tromsø', 'Larvik', 'Odda', 'Risør', 'Alta']
    for (let i = 0; i < numberOFOBjects; i++) {
        let city = cities[getRandomInt(1, cities.length-1)];
        
        data.temperatures.push({
            id: i, 
            city: city,
            temperature: getRandomInt(-20, 20)
        })
    }

    return data;
}


