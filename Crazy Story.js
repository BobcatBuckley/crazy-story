let noun1 = ["The pig", "The drug dealer", "My 8th grade science teacher", "The duck","An emo kid", "Suzy down the street", "Michael Jordan", "Ronald Mcdonald", "Daffy Duck","A baby","The Mailman","Cher","Barbie","The Pope","Chad from the gas station","The creepy guy on the corner","The manager at Walmart"]
let verb = ["ran over","Fell in love with","Married","Killed","fought","cooked dinner for","cleaned up after","read a bedtime story to","fought","kissed","had a baby with","went to church with","bought a gift for","kicked","licked","took a picture of"]
let noun2 = ["Dolly Parton","Miley Cyrus", "Justin Beiber","A priest","A police officer","Some random dude","themself","Patrick Mahomes","Michael Jackson's son Blanket","Minnie Mouse","Shaq","Aunt Jemima","Tom Brady","My wife","your wife","your mom","an associate","my boss","your boss","my cat","your dog","Whitney Houston"]
let why = ["they were angry", "they were jealous", "they never got their money","they spoke to God", "they felt they should", "they had it coming","they didnt like the look they received when they walked in the door","they secretly wanted to marry them","they were jealous of the others social status","they didnt get their morning coffee","they were on acid and saw their face as a demon","they were posessed by an ancient ghost from the civil war","they felt like it","they had stalking issue"]

const crazyStory = () => {
let a = Math.floor(Math.random() * noun1.length)
let b = Math.floor(Math.random() * verb.length)
let c = Math.floor(Math.random() * noun2.length)
let d = Math.floor(Math.random() * why.length)

console.log(`${noun1[a]} ${verb[b]} ${noun2[c]} because ${why[d]}!!!!` );
}
crazyStory()


