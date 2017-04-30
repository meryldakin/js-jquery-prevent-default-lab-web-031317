$(document).ready(function(){
  // call functions here
  listy()
});


// define functions here

function listy(){
  $('form#new-todo').on('submit', function(event){
    event.preventDefault()
    const $input = $('input#item').val()
    const listItem = `<li>${$input}</li>`
    $('ol').append(listItem)

    // $input.val('')
   })
}
