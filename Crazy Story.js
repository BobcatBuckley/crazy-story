let noun1 = ["The pig", "The duck","An emo kid", "Suzy down the street", "Michael Jordan", "Ronald Mcdonald", "Daffy Duck","A baby","The Mailman"]
let verb = ["ran over","Fell in love with","Married","Killed","fought","cooked dinner for","cleaned up after","read a bedtime story to","fought","kissed"]
let noun2 = ["Dolly Parton","Miley Cyrus", "Justin Beiber","A priest","A police officer","Some random dude","themself","Patrick Mahomes","Michael Jackson's son Blanket","Minnie Mouse","Shaq","Aunt Jemima","Tom Brady","My wife","your wife","your mom"]
let why = ["they were angry", "they were jealous", "they didnt like the look they received when they walked in the door","they secretly wanted to marry them","they knew they would never be as good as them","they didnt get their morning coffee","they were on acid and saw their face as a demon","they were posessed by an ancient ghost from the civil war","they felt like it"]

const crazyStory = () => {
    let crazyNoun1= ( ) =>{
    let indexNoun1 = Math.floor(Math.random()*noun1.length)
        return noun1[indexNoun1]
}
    let crazyVerb= ( ) =>{
        let indexVerb = Math.floor(Math.random()*verb.length)
        return verb[indexVerb]
    };

    let crazyNoun2= ( ) =>{
        let indexNoun2 = Math.floor(Math.random()*noun2.length)
        return noun2[indexNoun2]
        }
    let crazyWhy = ( ) =>{
    let indexWhy = Math.floor(Math.random()*why.length)
    return why1[indexWhy]
    }
    console.log(`${crazyNoun1}${crazyVerb}${crazyNoun2} because ${crazyWhy}!!!!`)
}
console.log(crazyStory())


