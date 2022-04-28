# colorbuilder.js
![image](https://user-images.githubusercontent.com/88290402/165171121-2fbb0c37-48ad-40c4-8969-3cd4e3884f51.png)<br>
Many websites have features for selecting colors.<br> Many websites also have a default colors sidebars for easy access.<br> That can be hard to make though.<br>
#### That's where Colorbuilder comes in.<br>
Colorbuilder makes it easy to create a dynamic and customizable default colors box without needing many lines of code.

## Get Started

First create an instance of ColorBuilder.
```js
var colorPicker = new ColorBuilder(id, width, height);
```
The parameter `id` designates the id for the colorpicker.  
`width` designates how many selectors will be in a row.  
`height` designates how many rows there are.

## Set Colors
`setColors(array)` Sets the list of selectable colors.
```js
var colorPicker = new ColorBuilder("colorPicker", 3, 1);
colorPicker.setColors(["#FF0000","#00FF00","#0000FF"]);
```
In this example, the colors are set to Red, Green, and Blue;
setColors only accepts an array of hex colors in a string.

## Set the Model
Next, the colorpicker needs a model.  
Because ColorBuilder is made to be very customizable, you set an HTML element for each of the selectors to be "modeled" after.
```js
var colorPicker = new ColorBuilder("colorPicker", 3, 1);
colorPicker.setColors(["#FF0000","#00FF00","#0000FF"]);
colorPicker.setModel("<div></div>");
```
In this example, we set each of the color selectors to an empty div.  
The div has no styles though and will not show up.
### Setting Inline Styles
`setModel` accepts a second parameter: `style`. The `style` parameter is a dictionary where keys are css attributes.
```js
var colorPicker = new ColorBuilder("colorPicker", 3, 1);
colorPicker.setColors(["#FF0000","#00FF00","#0000FF"]);
colorPicker.setModel("<div></div>",{width:"20px",height:"20px"});
```
Here we set all of the elements to be 20 pixels tall and 20 pixels wide.  
But what if we wanted each element to have their background color be the color their assigned?
### Setting Local Color
In this example, each selector will have the background color be the color they were assigned.  
The string `{{COLOR}}` will be replaced with the selectors color.  
```js
var colorPicker = new ColorBuilder("colorPicker", 3, 1);
colorPicker.setColors(["#FF0000","#00FF00","#0000FF"]);
colorPicker.setModel("<div></div>",{width:"20px",height:"20px",backgroundColor:"{{COLOR}}"});
```
Here the background color of the red color selector will be red, the blue blue, and the green green.
Find an example at https://quixt.github.io/colorbuilder.js
## Rendering
Finally, to show the color picker run the function `render()`. Have fun coloring!  
```js
var colorPicker = new ColorBuilder("colorPicker", 3, 1);
colorPicker.setColors(["#FF0000","#00FF00","#0000FF"]);
colorPicker.setModel("<div></div>",{width:"20px",height:"20px",backgroundColor:"{{COLOR}}"});
colorPicker.render();
```

