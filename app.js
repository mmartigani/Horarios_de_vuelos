const tabelBody=document.getElementById('table-body')

let flights=[
    {
        time:"08:11",
        destination:"OSLO",
        flight:"OX 203",
        gate:" A 01",
        remarks:"ON TIME"

    },
    {
        time:"12:39",
        destination:"LONDON",
        flight:"CV 200",
        gate:" C 11",
        remarks:"DELAYED"

    },
    {
        time:"13:21",
        destination:"DUBAI",
        flight:"BB 125",
        gate:" B 14",
        remarks:"CANCELLED"

    },
    {
        time:"14:01",
        destination:"BERLIN",
        flight:"FR 500",
        gate:" D 12",
        remarks:"ON TIME"

    },
    {
        time:"15:22",
        destination:"TOKYO",
        flight:"TK 001",
        gate:" A 32",
        remarks:"ON TIME"

    },
    {
        time:"18:25",
        destination:"NEW YORK",
        flight:"NW 144",
        gate:" G 17",
        remarks:"ON TIME"

    }
]

const destination=["NEW YORK","TOKYO","BERLIN","DUBAI","LONDON","OSLO"]
const remarks=["DELAYED","ON TIME", "CANCELLED"]
let hour=15

function populateTable(){
    for( const flight of flights){
        const tableRow=document.createElement('tr')
        for(const flightDetail in flight){
            const tableCell=document.createElement('td')
            const word=Array.from(flight[flightDetail])
            tableRow.append(tableCell)
            for(const [index,letter] of word.entries() ){
                const letterElement=document.createElement('div')
                setTimeout(()=>{
                    letterElement.classList.add('flip')
                    letterElement.textContent=letter
                    tableCell.append(letterElement)

                },100*index)                
            }
        }
        tabelBody.append(tableRow)
    }   

}

populateTable()

function generateRandomletter(){
    const alphabet="ABCDEFGHIJKLMNOPQRSTUWWXYZ"
    return alphabet.charAt(Math.floor(Math.random()*alphabet.length))
}
function generateRandomNumber(maxNumber){
    const number="0123456789"
    if(maxNumber){
      const newNumber=number.slice(0, maxNumber+1)
        return newNumber.charAt(Math.floor(Math.random()*newNumber.length))
    }
    return number.charAt(Math.floor(Math.random()*number.length))
}
function genereTime(){
    let displayHour=hour
    if(hour <24){
        hour++
    }
    if(hour >=24){
        hour=1
        displayHour=hour
    }
    if(hour <10){
        displayHour="0" + hour
    }
    return displayHour + ":"+generateRandomNumber(5)+generateRandomNumber()
}

function shuffleUp(){
    flights.shift()
    flights.push({
        time:generateTime(),
        destination:destination[Math.floor(Math.random()*destination.length)],
        flight:generateRandomletter()+generateRandomletter()+" "+ generateRandomNumber()+ generateRandomNumber(),
        gate:generateRandomletter()+" "+generateRandomNumber()+generateRandomNumber(),
        remarks:remarks[Math.floor(Math.random()*remarks.length)]
    })
    tabelBody.textContent=""
    populateTable()
}
setInterval(shuffleUp, 2000)