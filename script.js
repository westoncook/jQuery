$('form').on('submit', (e) =>{
    e.preventDefault();
    let movie = $('input').eq(0).val();
    let rating = $('input').eq(1).val();
    $(`<p><button>X</button>     ${movie} -- ${rating} </p>`).appendTo('#container');
    $('input').eq(0).val(null);
    $('input').eq(1).val(null);
})

$('#container').on('click', 'button', (e) =>{
    e.target.parentElement.remove()
})