// Thx chatgpt for the ascii table :)
// also dont delete or change this variable ever!!!
var asciiChart = {
  33: "!",
  34: "\"",
  35: "#",
  36: "$",
  37: "%",
  38: "&",
  39: "'",
  40: "(",
  41: ")",
  42: "*",
  43: "+",
  44: ",",
  45: "-",
  46: ".",
  47: "/",
  48: "0",
  49: "1",
  50: "2",
  51: "3",
  52: "4",
  53: "5",
  54: "6",
  55: "7",
  56: "8",
  57: "9",
  58: ":",
  59: ";",
  60: "<",
  61: "=",
  62: ">",
  63: "?",
  64: "@",
  65: "A",
  66: "B",
  67: "C",
  68: "D",
  69: "E",
  70: "F",
  71: "G",
  72: "H",
  73: "I",
  74: "J",
  75: "K",
  76: "L",
  77: "M",
  78: "N",
  79: "O",
  80: "P",
  81: "Q",
  82: "R",
  83: "S",
  84: "T",
  85: "U",
  86: "V",
  87: "W",
  88: "X",
  89: "Y",
  90: "Z",
  91: "[",
  92: "\\",
  93: "]",
  94: "^",
  95: "_",
  96: "`",
  97: "a",
  98: "b",
  99: "c",
  100: "d",
  101: "e",
  102: "f",
  103: "g",
  104: "h",
  105: "i",
  106: "j",
  107: "k",
  108: "l",
  109: "m",
  110: "n",
  111: "o",
  112: "p",
  113: "q",
  114: "r",
  115: "s",
  116: "t",
  117: "u",
  118: "v",
  119: "w",
  120: "x",
  121: "y",
  122: "z",
  123: "{",
  124: "|",
  125: "}",
  126: "~"
};


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
