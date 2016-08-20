


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
            response(data.slice(0,5));
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



 
$("#go").on('click', function(){


  var title = $("#giochi").val();//.replace(/ /g,'');
  var el = document.createElement('a');
  

  


  if(title == ''){

      $("#giochi").focus();

  }else{
     console.log(title);
    $("#tabella").empty();
    
    $.getJSON("/games/uni/user/"+title, function(result) { 
      var tblheads = "<tr>" +"<th>" + "Shop"+"</th>" + "<th>" + "Price"+"</th>"+"<th>" + "Link"+"</th>"+"</tr>"
       $(tblheads).appendTo("#tabella");

        $.each(result, function(i, f) {

          el.href = f.link;
          var split = el.hostname.split(".");
          el.hostname = split[1];

       
          var tblRow = "<tr>" + "<td>" + f.title + "</td>" +"<td>" + f.prezzo + "</td>"  +
            "<td>" + "<a href="+ '"'+f.link+'"' + ">"+"Link a "+el.hostname +"</a>"+ "</td>" +  "</tr>"
                      
          $(tblRow).appendTo("#tabella");
        });



      console.log("ok");
    }) 

  }

})

});







