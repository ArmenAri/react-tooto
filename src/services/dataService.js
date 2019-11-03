import data from "../data/data.json"
import randInt from "../utils/utils"

let data_array = data.cards

const refactoArray = (e) => {
    return data_array.filter(r => r.id !== e.id)
}

export const pickRandomData = () => {
    let e
    if (data_array.length > 1) {
        e = data_array[randInt(data_array.length)]
        data_array = refactoArray(e)
    } else {
        e = { id: -1, 
              title: "FIN DU JEU", 
              description: "Rejouez pour plus de fun 🥰", 
              extra: "Crée par Armen ARISTAKESYAN" 
            }
    }
    return e
}

