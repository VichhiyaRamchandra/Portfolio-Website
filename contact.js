const labels = document.querySelectorAll( "label" );

        labels.forEach( function( label) {
            label.innerHTML = label.innerText
                .split( "" )
                .map(function(letter, idx){
            return `<span style='transition-delay:${idx * 80}ms'>${letter}</span>`
        })
                .join( "" );
        } );
// const onload = () =>
// {
  
//     let targets = document.querySelectorAll('.input > label');
//     targets.forEach((item) {
//         item.innerHTML=item.innerHTML.split('').map((elem,index) {
//             return('<span style="transition-delay: ${(index+1)*80}ms" >${elem}</span>');
//         }).join('')
//     })
// }