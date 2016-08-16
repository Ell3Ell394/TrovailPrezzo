 //var sito1 = '/games/fifa16';
 //var sito2 = '/games/uni/mw/:title';
// var sito3 = '/games/uni/trony/:title';



 //Gestisce l'autocomplete
 $(function() {
    function log( message ) {
      $( "<div>" ).text( message ).prependTo( "#appenditi" );
      $( "#appenditi" ).scrollTop( 0 );
    }
    $( "#giochi" ).autocomplete({
      source: function( request, response ) {
        $.ajax({
          
          url: "/games/uni/autocomplete/"+ request.term,
          dataType: "json",
          data: {
            q: request.term
          },
          success: function( data ) {
            response(data.slice(0,10));
            //console.log(data);
          }
        });
      },
      minLength: 3,

      open: function() {
        $( this ).removeClass( "ui-corner-all" ).addClass( "ui-corner-top" );
      },
      close: function() {
        $( this ).removeClass( "ui-corner-top" ).addClass( "ui-corner-all" );
      }
    });



/*
var go = document.getElementById('go');

go.addEventListener('click', function() {
      var title = $("#giochi").val();
  console.log('pulsante premuto');
    
    $.getJSON("/games/"+title, function(result){
        $.each(result, function(i, field){
            //$("div").append(field + " ");
            console.log(field[i]);
    })
    //.fail(function(err){
    //  console.log("error");
    //})
    });}, false);

*/








  
  $("#go").on('click', function(){
  var title = $("#giochi").val();//.replace(/ /g,'');
  console.log(title);
    // /games/uni/:title

    $.getJSON("/games/uni/user/"+title, function(result) { 
        $.each(result, function(i, f) {
           var tblRow = "<tr>" + "<td>" + f.title + "</td>" +
            "<td>" + f.link + "</td>" + "<td>" + f.prezzo + "</td>"  + "</tr>"
        
        $(tblRow).appendTo("#tabella");
      });



      console.log("ok");

    /*

        $.each(result, function(i, fields) { 
            $.each(fields, function(i, field) { 
               // $('#tabella').append( '<tr>''<td>' + field.title + '</td>''</tr>' );
                $("#tabella").append(field.title + " "); 
                //("#tabella").after('<tr><td>' + field.title  +  '</td></tr>'); 
            } )
        } )
    */}) 
})

});
    /*
    $.getJSON("/games/uni/"+title, function(result){
        $.each(result, function(i, field){
            $.each(result, function(i, field) {
              console.log(result[i]);
              
            
              
            })
            
            

            //console.log(field);
            //$("#tabella").append(field[i].title + " ");
            
            
    })
    });*/

//  });






