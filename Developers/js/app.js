//updated Model July 5th 11:32 ss
var link = [];
var underline = [];
var bold = [];
angular.module('grid', []).controller('gridController', ['$scope', function($scope) {
 $scope.hero = {
   elements: [], 
   err: [] //this is the new version
 }
 $scope.sidebar = {
  image: "",
  elements: [],
  err: [] 
 }
 $scope.overview = {
  elements: [],
  err: [] 
 }
 $scope.setup = {
  elements: [],
  err: [] 
 }
 $scope.publish = {
  elements: [],
  err: [] 
 }
 $scope.footer = {
  texts: [],
  social: [], //changed
  err: []
 }
 $scope.bold = [];
 $scope.underline = [];
 $scope.link = [];
 $scope.err = [];

 $.ajax({
   type: "POST",
   url: "https://www.bigparser.com/APIServices/api/common/login",
   data: JSON.stringify({"emailId":"bigvoicewebsite@gmail.com", "password": "Grandmaster13"}),
   contentType: "application/json; charset=utf-8",
   dataType: "json",
   success: function(data) {
     $.ajax({
       type: "POST",
       url: "https://www.bigparser.com/APIServices/api/query/table",
       data: JSON.stringify({"gridId":"5997c0af27753d3098e6a05a","keywords":[],"rowCount":200,"selectColumnsStoreName":[],"tags":[],"viewId":"59983cd527753d3098f2a15c"}),
       contentType: "application/json; charset=utf-8",
       headers: {
           'authId':data.authId,
       },
       dataType: "json",
       success: function(data) {
         define(data)
       }
   });
   }
 });

 function define(data) {
   var i = 0;
   while(data.rows[i] != null && data.rows[i] != ""){
     var row = data.rows[i];
     var id = row.data[0].toLowerCase().replace(" section", "").replace("start ", "");
     switch(id){
       case "hero": //Start Hero Section
         i++; //skip element attribute
         row = data.rows[i];
         var scope = $scope.hero;

         while(!row.data[0].toLowerCase().includes("end")){
           var lab = row.data[0];
           var val = row.data[1];
           var vis = row.data[2].toLowerCase();

           if(vis == "yes"){
              switch(lab.toLowerCase()){
                case "header":
                  scope.elements.push({type: "header", header: val, id: "hero-" + scope.elements.length});
                  break;
                case "line text":
                  scope.elements.push({type: "line text", text: val, id: "hero-" + scope.elements.length});
                  break;
                default:
                  scope.err.push({label: lab, value: val, visible: vis});
                  break;
              }
           }
           i++;
           row = data.rows[i];
         }
         i++; break; //skip to next section

       case "sidebar": //Start Hero Section
         i++; //skip element attribute
         row = data.rows[i];
         var scope = $scope.sidebar;

         while(!row.data[0].toLowerCase().includes("end")){
           
           var lab = row.data[0];
           var val = row.data[1];
           var link = row.data[2];
           var vis = row.data[3].toLowerCase();           

           if(vis == "yes"){
              switch(lab.toLowerCase()){
                case "image":
                  scope.image = link;
                  break;
                case "header":
                  scope.elements.push({type: "header", header: val, link: link, id: "sidebar-" + scope.elements.length});
                  break;
                default:
                  scope.err.push({label: lab, value: val, link: link, visible: vis});
                  break;
              }
           }
           i++;
           row = data.rows[i];
         }
         i++; break; //skip to next section

       case "developer setup": //Start Hero Section
         i++; //skip element attribute
         row = data.rows[i];
         var scope = $scope.setup;

         while(!row.data[0].toLowerCase().includes("end")){
           
           var lab = row.data[0];
           var val = row.data[1];
           var vis = row.data[2].toLowerCase();     
           var under = row.data[3];
           var wtl = row.data[4];
           var link = row.data[5];    

           if(vis == "yes"){
              if(bold != null && bold != "") for(b of bold.split(",")) $scope.bold.push({word: b, id: "setup-" + scope.elements.length});
              if(under != null && under != "") for(u of under.split(",")) $scope.underline.push({word: u, id: "setup-" + scope.elements.length});
              if(wtl != null && wtl != "") for(w = 0; w < wtl.split(",").length; w++) $scope.link.push({word: wtl.split(",")[w], link: link.split(",")[w], id: "setup-" + scope.elements.length});
              switch(lab.toLowerCase()){
                case "title":
                  scope.elements.push({type: "title", title: val, id: "setup-" + scope.elements.length});
                  break;
                case "line text":
                  scope.elements.push({type: "line text", text: val, id: "setup-" + scope.elements.length});
                  break;
                case "bullet point":
                  scope.elements.push({type: "bullet point", bullet: val, icon: icon, id: "setup-" + scope.elements.length});
                  break;
                case "image":
                  scope.elements.push({type: "image", link: val, id: "setup-" + scope.elements.length});
                  break;
                case "header":
                  scope.elements.push({type: "header", header: val, link: link, id: "setup-" + scope.elements.length});
                  break;
                case "note":
                  scope.elements.push({type: "note", note: val, icon: icon, id: "setup-" + scope.elements.length});
                default:
                  scope.err.push({label: lab, value: val, visible: vis, bold: bold, icon: icon});
                  break;
              }
           }
           i++;
           row = data.rows[i];
         }
         i++; break; //skip to next section

       case "api overview": //Start Hero Section
         i++; //skip element attribute
         row = data.rows[i];
         var scope = $scope.overview;

         while(!row.data[0].toLowerCase().includes("end")){
           
           var lab = row.data[0];
           var val = row.data[1];
           var vis = row.data[2].toLowerCase();   

           if(vis == "yes"){
              if(bold != null && bold != "") for(b of bold.split(",")) $scope.bold.push({word: b, id: "grid-" + scope.elements.length});
              if(under != null && under != "") for(u of under.split(",")) $scope.underline.push({word: u, id: "grid-" + scope.elements.length});
              if(wtl != null && wtl != "") for(w = 0; w < wtl.split(",").length; w++) $scope.link.push({word: wtl.split(",")[w], link: link.split(",")[w], id: "grid-" + scope.elements.length});
              switch(lab.toLowerCase()){
                case "title":
                  scope.elements.push({type: "title", title: val, id: "grid-" + scope.elements.length});
                  break;
                case "line text":
                  scope.elements.push({type: "line text", text: val, id: "grid-" + scope.elements.length});
                  break;
                case "image":
                  scope.elements.push({type: "image", link: val, id: "grid-" + scope.elements.length});
                  break;
                case "header":
                  scope.elements.push({type: "header", header: val, link: link, id: "grid-" + scope.elements.length});
                  break;
                default:
                  scope.err.push({label: lab, value: val, visible: vis, bold: bold, icon: icon});
                  break;
              }
           }
           i++;
           row = data.rows[i];
         }
         i++; break; //skip to next section

       case "publish your app": //Start Hero Section
         i++; //skip element attribute
         row = data.rows[i];
         var scope = $scope.publish;

         while(!row.data[0].toLowerCase().includes("end")){
           
           var lab = row.data[0];
           var val = row.data[1];
           var vis = row.data[2].toLowerCase();     
           var under = row.data[3];
           var wtl = row.data[4];
           var link = row.data[5];    

           if(vis == "yes"){
              if(bold != null && bold != "") for(b of bold.split(",")) $scope.bold.push({word: b, id: "publish-" + scope.elements.length});
              if(under != null && under != "") for(u of under.split(",")) $scope.underline.push({word: u, id: "publish-" + scope.elements.length});
              if(wtl != null && wtl != "") for(w = 0; w < wtl.split(",").length; w++) $scope.link.push({word: wtl.split(",")[w], link: link.split(",")[w], id: "publish-" + scope.elements.length});
              switch(lab.toLowerCase()){
                case "title":
                  scope.elements.push({type: "title", title: val, id: "publish-" + scope.elements.length});
                  break;
                case "line text":
                  scope.elements.push({type: "line text", text: val, id: "publish-" + scope.elements.length});
                  break;
                case "image":
                  scope.elements.push({type: "image", link: val, id: "publish-" + scope.elements.length});
                  break;
                case "header":
                  scope.elements.push({type: "header", header: val, link: link, id: "publish-" + scope.elements.length});
                  break;
                default:
                  scope.err.push({label: lab, value: val, visible: vis, bold: bold, icon: icon});
                  break;
              }
           }
           i++;
           row = data.rows[i];
         }
         i++; break; //skip to next section

       case "footer": //Start Footer Section
        i++; //skip element attribute
        row = data.rows[i];

        while(!row.data[0].includes("End")){
          var lab = row.data[0];
          var val = row.data[1];
          var vis = row.data[2];
          var len = lab.split(" ").length;

          if(vis == "yes"){
            switch(lab.split(" ")[len-1]){
              case "Text":
                $scope.footer.texts.push({
                  class: lab.replace(" Text", "").toLowerCase(),
                  content: val
                });
                break;
              case "Social":
                $scope.footer.social.push({
                  label:"fa fa-" + lab.replace(" Social", "").toLowerCase(),
                  link: val
                });
              default:
                $scope.footer.err.push({
                  label: lab,
                  value: val
                });
                break;
            }
          }
          i++;
          row = data.rows[i];
        }
        i++; break; //skip to next section
       default:
         $scope.err.push({
           label: row.data[0],
           value: row.data[1]
         });
         i++; break;
     }

   }
   temp=$scope;
   $scope.$apply();
   jsinit();
   link = $scope.link;
   bold = $scope.bold;
   underline = $scope.underline
   format();
 }
 function format(){
    /*for(obj of bold){
      var str = document.getElementById(obj.id);
      if(str != null) document.getElementById(obj.id).value = str.value.replace(obj.word, "<b>" + obj.word + "</b>");
    }
    for(obj of underline){
      var str = document.getElementById(obj.id);
      if(str != null) document.getElementById(obj.id).value = str.value.replace(obj.word, "<u>" + obj.word + "</u>");
    }
    for(obj of link){
      var str = document.getElementById(obj.id);
      if(str != null) document.getElementById(obj.id).value = str.value.replace(obj.word, "<a href= "+ obj.link + ">" + obj.word + "</u>");
    }*/

 }
 function jsinit(){
    $('.parallax').parallax();
    $('.materialboxed').materialbox();
    $(".dropdown-button").dropdown();
    $(".button-collapse").sideNav();
 }
}]);


