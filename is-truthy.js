//Create lines that test if values are truthy
//Use the if else statements
//If line is falsy, the line will read one of these results
//"The boolean value false is falsy"
//"The null value is falsy"
//"undefined is falsy"
//"The number 0 is falsy (the only falsy number)"
//"The empty string is falsy (the only falsy string)"

let value = ""

if (value){
   console.log (true)

} else if (value === null)
{
    console.log ("The null value is falsy")
}

else if (value === undefined)
{
    console.log ("undefined is falsy")
}

else if (value === 0)
{
    console.log ("The number 0 is falsy (the only falsy number)")
}

else if (value === "")
{
    console.log ("The empty value is falsy (the only falsy value)")
}

else if  (value === false) 
{
    console.log ("The boolean value false is falsy")
}