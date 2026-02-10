// Thx chatgpt for the ascii table :)
// also dont delete or change this variable ever!!!
var asciiChart = getColumn("ascii chart", "symbol");


onEvent("convert", "click", function(){
  var output = "";
  var input = getText("text_input1").split(" ");
  for (var i = 0; i < input.length; i++){
    var byte = input[i];
    output += toBinary(byte.split('').reverse().join('')) + " ";
  }
  setText("text_area1", output);
  console.log(output);
});


function toBinary(num){
  var total = 0;
  for (var i = 0; i < num.length; i++){
    total += num[i] * (Math.pow(2, i));
  }
  // The checkbox is to activate "ascii mode" 
  if (getChecked("checkbox1")){
    // If the byte starts with a 0 and is [33, 126] (because that's what numbers correspond to in the ascii)
    // then the function will return an ascii character
    if (num[num.length - 1] == "0" && (total <= 126 && total >= 33)){
      return asciiChart[total]; // Since ascii chars are already strings they dont need to be converted
    }
    // If a number doesnt meet any of the requirements above while the box is checked
    // just return the total.
    else{
      return total.toString();
    }
  }
  else{
    return total.toString();
  }
}
/* formula to convert binary into decimal is (value * 2^place in bit of binary, starting at 0)
do that for each number
add those all together to get your number in decimal
*/
