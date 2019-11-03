import data from "../data/data.json"
import randInt from "../utils/utils"

let data_array = data.cards

const refactoArray = (e) => {
    return data_array.filter(r => r.id !== e.id)
}

export function pickRandomData() {
    let e
    if (data_array.length > 1) {
        e = data_array[randInt(data_array.length)]
        data_array = refactoArray(e)
    }
    return e
}

