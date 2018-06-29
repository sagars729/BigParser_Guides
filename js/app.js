//updated Model July 5th 11:32 ss
angular.module('grid', []).controller('gridController', ['$scope', function($scope) {
  $scope.hero = {
    header: "",
    icon: "",
    subtext: "", 
    err: [] //this is the new version
  }
  $scope.content = {
    buttons: []
  }
  $scope.footer = {
   texts: [],
   social: [], //changed
   err: []
 }
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
        data: JSON.stringify({"gridId":"5994588c27753d71c492d530","keywords":[],"rowCount":200,"selectColumnsStoreName":[],"tags":[],"viewId":"5994879aeead2173bd1d5cf7"}),
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
  /*function define(data){
    alert("CHECK");
  }
  */
  function define(data) {
    var i = 0;
    while(data.rows[i] != null && data.rows[i] != ""){
      var row = data.rows[i];
      var id = row.data[0].toLowerCase().replace(" section", "").replace("start ", "");
      console.log(id);
      switch(id){
        case "hero": //Start Hero Section
          i++; //skip element attribute
          row = data.rows[i];
          var scope = $scope.hero;

          while(!row.data[0].toLowerCase().includes("end")){
            var lab = row.data[0];
            var val = row.data[1];
            var icon = row.data[2];
            var sub = row.data[3];
            var vis = row.data[4].toLowerCase();

            if(vis == "yes"){
               scope.header = val;
               scope.icon = icon;
               scope.subtext = sub;
            }
            i++;
            row = data.rows[i];
          }
          i++; break; //skip to next section
        case "content":
          i++; //skip element attribute
          row = data.rows[i];
          var scope = $scope.content;

          while(!row.data[0].toLowerCase().includes("end")){
            var lab = row.data[0];
            var val = row.data[1];
            var icon = row.data[2];
            var link = row.data[3];
            var vis = row.data[4].toLowerCase();
            var ttl = row.data[5]

            if(vis == "yes"){
              scope.buttons.push({
                text: val,
                icon: icon,
                link: link,
                title: ttl
              });
            }
            i++;
            row = data.rows[i];
          }
          i++; break; //skip to next section
        case "footer":
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
  }
  function jsinit()
  {
      $('.parallax').parallax();
  }
}]);

