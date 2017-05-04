$(document).ready(function(){
  // call functions here
  listy()
});


// define functions here

function listy(){
  $('form#new-todo').on('submit', function(event){
    event.preventDefault()
    const $input = $('input#item')
    const $todo = $input.val()
    const listItem = `<li>${$todo}</li>`
    $('ol').append(listItem)

    $input.val('')
   })
}
n
