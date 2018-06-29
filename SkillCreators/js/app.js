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
 $scope.understanding = {
  elements: [],
  err: [] 
 }
 $scope.basic = {
  elements: [],
  err: [] 
 }
 $scope.power = {
  elements: [],
  err: [] 
 }
 $scope.qna = {
  elements: [],
  err: [] 
 }
 $scope.cpower = {
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
       data: JSON.stringify({"gridId":"5997c0af27753d3098e6a05c","keywords":[],"rowCount":200,"selectColumnsStoreName":[],"tags":[],"viewId":"59983cb4eead21301be87d7d"}),
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
           var under = row.data[3];
           var wtl = row.data[4];
           var link = row.data[5];   

           if(vis == "yes"){
              if(bold != null && bold != "") for(b of bold.split(",")) $scope.bold.push({word: b, id: "hero-" + scope.elements.length});
              if(under != null && under != "") for(u of under.split(",")) $scope.underline.push({word: u, id: "hero-" + scope.elements.length});
              if(wtl != null && wtl != "") for(w = 0; w < wtl.split(",").length; w++) $scope.link.push({word: wtl.split(",")[w], link: link.split(",")[w], id: "hero-" + scope.elements.length});
              switch(lab.toLowerCase()){
                case "title":
                  scope.elements.push({type: "title", title: val, id: "hero-" + scope.elements.length});
                  break;
                case "line text":
                  scope.elements.push({type: "line text", text: val, id: "hero-" + scope.elements.length});
                  break;
                case "image":
                  scope.elements.push({type: "image", link: val, id: "hero-" + scope.elements.length});
                  break;
                case "header":
                  scope.elements.push({type: "header", header: val, link: link, id: "hero-" + scope.elements.length});
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
       
       case "understanding skills": //Start Hero Section
         i++; //skip element attribute
         row = data.rows[i];
         var scope = $scope.understanding;

         while(!row.data[0].toLowerCase().includes("end")){
           
           var lab = row.data[0];
           var val = row.data[1];
           var vis = row.data[2].toLowerCase();     

           if(vis == "yes"){
              if(bold != null && bold != "") for(b of bold.split(",")) $scope.bold.push({word: b, id: "understanding-" + scope.elements.length});
              if(under != null && under != "") for(u of under.split(",")) $scope.underline.push({word: u, id: "understanding-" + scope.elements.length});
              if(wtl != null && wtl != "") for(w = 0; w < wtl.split(",").length; w++) $scope.link.push({word: wtl.split(",")[w], link: link.split(",")[w], id: "understanding-" + scope.elements.length});
              switch(lab.toLowerCase()){
                case "title":
                  scope.elements.push({type: "title", title: val, id: "understanding-" + scope.elements.length});
                  break;
                case "line text":
                  scope.elements.push({type: "line text", text: val, id: "understanding-" + scope.elements.length});
                  break;
                case "image":
                  scope.elements.push({type: "image", link: val, id: "understanding-" + scope.elements.length});
                  break;
                case "header":
                  scope.elements.push({type: "header", header: val, link: link, id: "understanding-" + scope.elements.length});
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

       case "what is a basic skill": //Start Hero Section
         i++; //skip element attribute
         row = data.rows[i];
         var scope = $scope.basic;

         while(!row.data[0].toLowerCase().includes("end")){
           
           var lab = row.data[0];
           var val = row.data[1];
           var vis = row.data[2].toLowerCase();     

           if(vis == "yes"){
              if(bold != null && bold != "") for(b of bold.split(",")) $scope.bold.push({word: b, id: "basic-" + scope.elements.length});
              if(under != null && under != "") for(u of under.split(",")) $scope.underline.push({word: u, id: "basic-" + scope.elements.length});
              if(wtl != null && wtl != "") for(w = 0; w < wtl.split(",").length; w++) $scope.link.push({word: wtl.split(",")[w], link: link.split(",")[w], id: "basic-" + scope.elements.length});
              switch(lab.toLowerCase()){
                case "title":
                  scope.elements.push({type: "title", title: val, id: "basic-" + scope.elements.length});
                  break;
                case "line text":
                  scope.elements.push({type: "line text", text: val, id: "basic-" + scope.elements.length});
                  break;
                case "image":
                  scope.elements.push({type: "image", link: val, id: "basic-" + scope.elements.length});
                  break;
                case "header":
                  scope.elements.push({type: "header", header: val, link: link, id: "basic-" + scope.elements.length});
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
       
       case "what is a power skill": //Start Hero Section
         i++; //skip element attribute
         row = data.rows[i];
         var scope = $scope.power;

         while(!row.data[0].toLowerCase().includes("end")){
           
           var lab = row.data[0];
           var val = row.data[1];
           var vis = row.data[2].toLowerCase();     

           if(vis == "yes"){
              if(bold != null && bold != "") for(b of bold.split(",")) $scope.bold.push({word: b, id: "power-" + scope.elements.length});
              if(under != null && under != "") for(u of under.split(",")) $scope.underline.push({word: u, id: "power-" + scope.elements.length});
              if(wtl != null && wtl != "") for(w = 0; w < wtl.split(",").length; w++) $scope.link.push({word: wtl.split(",")[w], link: link.split(",")[w], id: "power-" + scope.elements.length});
              switch(lab.toLowerCase()){
                case "title":
                  scope.elements.push({type: "title", title: val, id: "power-" + scope.elements.length});
                  break;
                case "line text":
                  scope.elements.push({type: "line text", text: val, id: "power-" + scope.elements.length});
                  break;
                case "image":
                  scope.elements.push({type: "image", link: val, id: "power-" + scope.elements.length});
                  break;
                case "header":
                  scope.elements.push({type: "header", header: val, link: link, id: "power-" + scope.elements.length});
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

       case "creating a q&a skill": //Start Hero Section
         i++; //skip element attribute
         row = data.rows[i];
         var scope = $scope.qna;

         while(!row.data[0].toLowerCase().includes("end")){
           
           var lab = row.data[0];
           var val = row.data[1];
           var vis = row.data[2].toLowerCase();
           var under = row.data[3];
           var wtl = row.data[4];
           var link = row.data[5];     

           if(vis == "yes"){
              if(bold != null && bold != "") for(b of bold.split(",")) $scope.bold.push({word: b, id: "qna-" + scope.elements.length});
              if(under != null && under != "") for(u of under.split(",")) $scope.underline.push({word: u, id: "qna-" + scope.elements.length});
              if(wtl != null && wtl != "") for(w = 0; w < wtl.split(",").length; w++) $scope.link.push({word: wtl.split(",")[w], link: link.split(",")[w], id: "qna-" + scope.elements.length});
              switch(lab.toLowerCase()){
                case "title":
                  scope.elements.push({type: "title", title: val, id: "qna-" + scope.elements.length});
                  break;
                case "line text":
                  scope.elements.push({type: "line text", text: val, id: "qna-" + scope.elements.length});
                  break;
                case "image":
                  scope.elements.push({type: "image", link: val, id: "qna-" + scope.elements.length});
                  break;
                case "header":
                  scope.elements.push({type: "header", header: val, link: link, id: "qna-" + scope.elements.length});
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

       case "creating a power skill": //Start Hero Section
         i++; //skip element attribute
         row = data.rows[i];
         var scope = $scope.cpower;

         while(!row.data[0].toLowerCase().includes("end")){
           
           var lab = row.data[0];
           var val = row.data[1];
           var vis = row.data[2].toLowerCase();
           var under = row.data[3];
           var wtl = row.data[4];
           var link = row.data[5];     

           if(vis == "yes"){
              if(bold != null && bold != "") for(b of bold.split(",")) $scope.bold.push({word: b, id: "cpower-" + scope.elements.length});
              if(under != null && under != "") for(u of under.split(",")) $scope.underline.push({word: u, id: "cpower-" + scope.elements.length});
              if(wtl != null && wtl != "") for(w = 0; w < wtl.split(",").length; w++) $scope.link.push({word: wtl.split(",")[w], link: link.split(",")[w], id: "cpower-" + scope.elements.length});
              switch(lab.toLowerCase()){
                case "title":
                  scope.elements.push({type: "title", title: val, id: "cpower-" + scope.elements.length});
                  break;
                case "line text":
                  scope.elements.push({type: "line text", text: val, id: "cpower-" + scope.elements.length});
                  break;
                case "image":
                  scope.elements.push({type: "image", link: val, id: "cpower-" + scope.elements.length});
                  break;
                case "header":
                  scope.elements.push({type: "header", header: val, link: link, id: "cpower-" + scope.elements.length});
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


