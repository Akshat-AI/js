function Calculation(operation,...values)
{
    if(operation.toLowerCase() === "sum"){
        return `${operation} of values =${values.reduce((a,b) => a+b)}`
    }
    if(operation.toLowerCase() === "multiply")
    {
        return `${operation} of values =${values.reduce((a,b) => a*b)}`
    }
    if(operation.toLowerCase() === "sort")
    {
        return `${operation} of values = ${values.sort()} `
    }
}
console.log(Calculation("sort",12,10,45,67,80))