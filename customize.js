var name="";

var pre_name="";

var font="";

var font_size="";

var pre_font="";


var fonts = ["'Joti One', cursive", "'Ranga', cursive" ,"'Indie Flower', cursive", "'Lobster', cursive", "'Pacifico', cursive",
            "'Pacifico', cursive", "'Shadows Into Light', cursive", "'Gloria Hallelujah', cursive", "'Gloria Hallelujah', cursive",
            "'Dancing Script', cursive", "'Satisfy', cursive", "'Cookie', cursive", "'Great Vibes', cursive", "'Kaushan Script', cursive",
            "'Sacramento', cursive'", "'Tangerine', cursive", "'Caveat', cursive", "'Marck Script', cursive", "'Shadows Into Light Two', cursive",
            "'Rock Salt', cursive", "'Yellowtail', cursive", "'Playball', cursive", "'Damion', cursive", "'Bad Script', cursive",
            "'Engagement', cursive", "'Covered By Your Grace', cursive", "'Alex Brush', cursive", "'Allura', cursive", "'Pinyon Script', cursive",
            "'Rochester', cursive", "'Parisienne', cursive", "'Yesteryear', cursive", "'Norican', cursive", "'Italianno', cursive", "'Mr Dafoe', cursive",
            "'Petit Formal Script', cursive", "'Herr Von Muellerhoff', cursive", "'Montez', cursive", "'Zeyada', cursive", "'Mr De Haviland', cursive",
            "'Clicker Script', cursive", "'Arizonia', cursive", "'Rouge Script', cursive", "'Qwigley', cursive", "'Seaweed Script', cursive",
            "'Bilbo Swash Caps', cursive", "'Dawning of a New Day', cursive", "'Stalemate', cursive", "'Meddon', cursive", "'Condiment', cursive",
            "'Aguafina Script', cursive", "'Henny Penny', cursive", "'Dr Sugiyama', cursive", "'Ruge Boogie', cursive",]

var save_index = 2;

$('#namearea').click(function(event){
  $("label").text("");
})

$('button').eq(0).click(function(event) {
    console.log("button 1 pressed");
    name = $("#namearea").val();
    font = $("#font_selector").val();
    font_size = $("#font_size_selector").val();
    if(name ==="" ){
      alert('Please type your name');
      $("label").text("*");
      return;
    }
    else if(font ==""){
      font = fonts[Math.floor(Math.random() * fonts.length)];
    }
    $("#customizedname").text(name);
    $("#customizedname").css({"font-family": font, "font-size": font_size + "em" });
    pre_font=font;
    font = "";
})

$('button').eq(1).click(function(event) {
    name = $("#namearea").val();
    if(name ==="" ){
      alert('Please type your name');
      $("label").text("*");
      return;
    }
    font_size = $("#font_size_selector").val();
    font = fonts[Math.floor(Math.random() * fonts.length)];
    $("#customizedname").text(name);
    $("#customizedname").css({"font-family": font, "font-size": font_size + "em" });
    pre_font=font;
    font = "";
})

$('button').eq(2).click(function(event){
    $('.col').eq(save_index).html("<p><center>"+name+"</center></p>");
    $('.col').eq(save_index).css({'font-family':pre_font});
    $('.col').eq(save_index).addClass('mycol');
    save_index++;
    if(save_index == 8){
      $('.col').eq(save_index).html("");
      save_index = 2;
    }
})

$('button').eq(3).click(function(event){
  save_index=2;
  for(var i = 2; i<$('.col').length; i++){
    $('.col').eq(i).html("");
    $('.col').eq(i).removeClass('mycol');
    console.log("clean 1");
  }
})
