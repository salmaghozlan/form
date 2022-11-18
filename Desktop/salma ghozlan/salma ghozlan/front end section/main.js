var name = document.getElementById("exampleInputname");

var arr;




function disable() {
    document.getElementById("exampleInputFirstname").disabled = true;
    document.getElementById("exampleInputMiddlename").disabled = true;
    document.getElementById("exampleInputlastname").disabled = true;

    }

    function get_age(born, now) {
        var birthday = new Date(now.getFullYear(), born.getMonth(), born.getDate());
        if (now >= birthday) 
          return now.getFullYear() - born.getFullYear();
        else
          return now.getFullYear() - born.getFullYear() - 1;
      }
  
  document.getElementById("dateInput").addEventListener("change", function() {
      var input = this.value;
      var dateEntered = new Date(input);
      
         var now = new Date();
          var birthdate = input.split("-");
          var born = new Date(birthdate[0], birthdate[1]-1, birthdate[2]);
          age=get_age(born,now);
       
          console.log(birthdate[2]+" : "+birthdate[1]+" : "+birthdate[0]);
          document.getElementById("age").value = age;
          
          document.getElementById("age").disabled = true;

         
  });