$(function(){

function makeGrid(row, col) {
    // Iterate through rows and make columns 
    var tr="";
    var td="";   
    for (var j = 0; j < col; j++) {
    // Make td with col count.
        td += "<td></td>";
    }
    // Make tr with row count.
    for (var i = 0; i < row; i++) {
        tr += "<tr>"+td+"</tr>";
    }
    // Append the table every time with new table rows and cels.
    $("#pixel_canvas").empty().append(tr);
}
    // When size is submitted by the user, call makeGrid()
    // Make event listener to the form submit event.
    var sizePicker=document.querySelector('#sizePicker');
    sizePicker.addEventListener('submit', function (e) {
        // Number of rows of the table.
        var row = document.querySelector('#input_height').value;
        // Number of cells in each row.
        var col = document.querySelector('#input_width').value;
        makeGrid(row, col);
        // Prevent the default action of the form.
        e.preventDefault();
    });
    // Make event listener to the td to change th color of it.
     $("#pixel_canvas").on('click','td',function(){
        // Pick up the color from color picker.
        const color=$("#colorPicker").val();
        console.log(color);
        $(this).css('background-color',color);
    });
});
