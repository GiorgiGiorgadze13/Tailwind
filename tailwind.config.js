/** @type {import('tailwindcss').Config} */
module.exports = {
content: ["./*.html"], // აქ მიუთითეთ თქვენი HTML ფაილების გზა
theme: {
extend: {
    fontFamily:{
      jakarta: 
    ["Plus Jakarta Sans", 'sans-serif'],
  },
  

  colors:{
    primary:'#4318FF',
    secondary:'#1B2559',
    black:'#000000',
    gray:'#68769F',
    white:'#FFFFFF',
    pink:'#E9E3FF',
    secondarydarkgray:'#1B2559',
  }

},
},
plugins: [],
}