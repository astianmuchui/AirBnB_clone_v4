#!/usr/bin/node

// Get checked amenities and add them to a list
// Then add the list to the H4 tag

$(document).ready(function () {
    const amenityList = [];
    $('input[type=checkbox]').click(function () {
        if (this.checked) {
        amenityList.push($(this).attr('data-name'));
        } else {
        amenityList.splice(amenityList.indexOf($(this).attr('data-name')), 1);
        }
        $('.amenities h4').text(amenityList.join(', '));
})});

// Request API: status

$.get('http://0.0.0.0:5001/api/v1/status/', function (data, textStatus) {
    if (textStatus === 'success') {
        $('DIV#api_status').addClass('available');
    } else {
        $('DIV#api_status').removeClass('available');
    }
});

