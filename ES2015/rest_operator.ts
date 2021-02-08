/*
Rest operator specified in function declaration,
Rest takes individual variables and combine into a Array
*/
let display_color =  function(msg, ...colors){
    console.log(arguments.length);
    console.log(msg);
    console.log(colors);
    for (let i in colors) console.log(colors[i]);
}
let message = "List of colors"; 
display_color(message, "Red");
display_color(message, "Red", "Blue");
display_color(message, "Red", "Blue", "Green");
