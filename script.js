$('form').on('submit', (e) =>{
    e.preventDefault();
    let movie = $('input').eq(0).val();
    let rating = $('input').eq(1).val();
    $(`<p class="${rating}"><button>X</button> ${movie} -- <span>${rating}</span> </p>`).appendTo('#container');
    $('input').val('');
})

$('#container').on('click', 'button', (e) =>{
    $(e.target).parent().remove();
})

$('#sort').on('change', () =>{
    let sortParam = $('#sort').val();
    if (sortParam === 'Alpha'){
        sortAlpha();
    } else if(sortParam === 'RatingAsc'){
        sortRatingAsc()
    } else if(sortParam === 'RatingDsc'){
        sortRatingDsc()
    }
})

function sortAlpha(){
    let $elems = $('p');
    let arr = Array.prototype.sort.bind($elems);
    arr((a,b) => a.innerText > b.innerText ? 1:-1)
    $('#container').append($elems);
}

function sortRatingAsc(){
    let $ratings = $('p');
    let sorting = Array.prototype.sort.bind($ratings);
    sorting((a,b) => +a.className > +b.className ? 1:-1)
    $('#container').append($ratings);
}

function sortRatingDsc(){
    let $ratings = $('p');
    let sorting = Array.prototype.sort.bind($ratings);
    sorting((a,b) =>  +a.className < +b.className ? 1:-1)
    $('#container').append($ratings);
}