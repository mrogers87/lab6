function convertTemp(temp, unit){
  if(unit==="F"){
    console.log((temp -32 ) * 5 /9+ " degrees Fahrenheit");
  } else if(unit==="C"){
    console.log(temp * 9 / 5 + 32+ " degrees Celcius");
  }
}

convertTemp(212, "C");
convertTemp(212, "F");
