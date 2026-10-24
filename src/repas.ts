
let a: number = 20
const b: number = 30

a = 40

console.log(a)
// b = 100 No pot

// string
// number
// boolean
// array
// object
// null
// undefined

// == Mateix valor
// === Mateix valor i tipus
// !=
// !==
// 1 == "1" true
// 1 === "1" false
// a == null

const c = [100, 2, 100, 4]

for (const num of c) {
    console.log(num)
}

for (const index in c) {
    console.log(index)
}

type ObjType = {
    id: number,
    nom: string,
    address: {
        carrer: string,
        ciutat: string
    }
    getDni: () => string
}

const obj: ObjType = {
    id: 1,
    nom: "Genis",
    address: {
        carrer: "",
        ciutat: ""
    },
    getDni: () => { return "abc" }
}

function sumar (a: number, b: number): number {
    return a + b
}

const restar = (a: number, b: number): number => {
    return a - b
}

const decarrega = async (url: string): Promise<Blob> => {
    const arxiu = await (await fetch(url)).blob()
    console.log("Hola")
    return arxiu
}
