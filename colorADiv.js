// PICKING COLOR module.

// Initalize the color database.
// The Color picked related functions.
function initColorDatabase()
{
        this.colors = new Array("#F8F4FF", "#F3E5AB", " #FAEBD7", "#E52B50 ", "#960018", "#FE28A2", "#FF6FFF", "#FF69B4", "#FBAED2", "#F88379", "#A52A2A", "#C41E3A", "#C71585", "#B2
2222", "#E25822", "#AB4E52", "#800000", "#FF2400", "#722F37", "#E0115F", "#FF004F", "#915C83", "#65000B", " ", "#66FF00", "#228b22", "#808000", " #00A693", "#808080", "#B2BEB5", "#4
83C32");

        this.pickedColor = new Array();

        for (var i=0; i < this.colors.length; i++) {
                this.pickedColor[i] = 0;
        }
}

// Pick a color.
function pickColor()
{
        for (var i=0; i <this.pickedColor.length; i++) {
                if (this.pickedColor[i] == 0) {
                        this.pickedColor[i] = 1;
                        return this.colors[i];
                }
        }
        return null;
}

// Free a color.
function freeColor(color)
{
        for (var i=0; i <this.colors.length; i++) {
                if ((this.colors[i]).toLowerCase() == color.toLowerCase()) {
                        this.pickedColor[i] = 0;
                        console.log("Freed the color : " + color);
                        return;
                }
        }
}

// Change the rgb to hex code.
// rgb is how we get the color from the div.
function hexc(colorval) {
    var parts = colorval.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    if (parts == null) {
        return null;
    }
    delete(parts[0]);
    for (var i = 1; i <= 3; ++i) {
        parts[i] = parseInt(parts[i]).toString(16);
        if (parts[i].length == 1) parts[i] = '0' + parts[i];
    }
    return(color = '#' + parts.join(''));
}


$$ How to pick the color
//var selColor = pickColor();                                     
//console.log("Picked color = " + selColor);                      
//tempObj.css('background', selColor);                            
//tempObj.css('color', '#ffff00');                                
//tempObj.css('background', '-webkit-linear-gradient(top, #000fff 0%,#000fff 50%,#ffff00 50%,#ffff00 100%);');                                               

$$ How to free a color
//var bgColor = $(this).css('backgroundColor');
//console.log("bgColor = " + bgColor);
//if (bgColor != null) {
//	console.log("About to free the color" + hexc(bgColor));
//	freeColor(hexc(bgColor));
//}

