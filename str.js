var str = "the quick brown fox jumped over the lazy dog. the dog slept over the verandah."

var sub = "over"

var c = str.split(" ")

output=""

for(var i of c){

   output=output+i+" "

}

console.log(output);