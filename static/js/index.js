var ld_list = new Array();
var count = 0;

function init( ) {
  ld_list.push("test biotch");
  ld_list.push("test biotch again");
  load();
}

function load() {
  if(ld_list[count]) {
    alert($("testing").append(ld_list[count]));
    $("testing").text(ld_list[count]);
    count = count + 1;
    window.setTimeout("load()",200);
  }
  //window.setTimeout("redirect()",200);
}

function redirect() {
  window.location="Home.html"
  return;
} 