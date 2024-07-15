let values = [12,34,56,78]
// of gets you the value at index while in gets the index only u need to uses values[i] to get value at that index
for(v in values){
    console.log(v)
    console.log(values[v])
}

for(i of values){
    console.log(i)
}

let objValues = {num1:12, num2:34, num3:56}
for (ov in objValues){
    console.log(ov)
}
for(oa in objValues){
    console.log(objValues[oa])
}