var input;
var i;

onEvent("convert", "click", function(){
  var output = "";
  input = getText("text_input1").split(" ");
  for (var i = 0; i < input.length; i++){
    var byte = input[i];
    output += toBinary(byte.split('').reverse().join('')).toString() + " ";
  }
  setText("text_area1", output);
  console.log(output);
});


function toBinary(num){
  // reverse
  var total = 0;
  for (i = 0; i < num.length; i++){
    for (i = 0; i < num.length; i++){
      if (num[i] == 0){
        total += 0;
      }
      else {
        total += num[i] * (Math.pow(2, i));
      }
    }
  }
  return total;
}
/* formula to convert binary into decimal is (value * 2^place in bit of binary, starting at 0)
do that for each number
add those all together to get your number in decimal
*/
