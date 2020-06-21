extends layout

block content
h1 = title
p Welcome to# { title }
script.
var f1 = function() { document.getElementById('myImage').src = '#{data.item1}' }
script.
var f2 = function() { document.getElementById('myImage').src = '#{data.item2}' }
script.
var f3 = function() { document.getElementById('myImage').src = '#{data.item3}' }

button(onclick = 'f1()') One!
    button(onclick = 'f2()') Two!
    button(onclick = 'f3()') Three!
    p
a: img(id = 'myImage'
    height = '200'
    width = '200'
    src = '')