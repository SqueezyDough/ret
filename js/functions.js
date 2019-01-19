const btn_stories = document.querySelector('main ul li:nth-of-type(2) a');
var list_position = "newest";

btn_stories.addEventListener("click", function(){

  if (list_position == "newest"){
    this.href = "#list-stories";
    this.classList.add('rotate');
    list_position = "older";
    console.log("change old");
  }
  else if( list_position == "older"){
    this.href = "#preview_anker";
    this.classList.remove('rotate');
    list_position = "newest";
    console.log("change new");
  }
});