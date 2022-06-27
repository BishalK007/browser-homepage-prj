const mapMonth = new Map([
    [1, "Jan"],
    [2, "Feb"],
    [3, "Mar"],
    [4, "Apr"],
    [5, "May"],
    [6, "Jun"],
    [7, "Jul"],
    [8, "Aug"],
    [9, "Sep"],
    [10, "Oct"],
    [11, "Nov"],
    [12, "Dec"],
    
  ]);
  

function currentDateTime() {
    let date = new Date(); 
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    let month =date.getMonth();
    let day = date.getDate();
    let monthstr = mapMonth.get(month+1);
      
    if(hh > 12){
        session = "PM";
     }
  
     hh = (hh < 10) ? "0" + hh : hh;
     mm = (mm < 10) ? "0" + mm : mm;
     ss = (ss < 10) ? "0" + ss : ss;

     let str=(day==1)?"st/"():(day==2)?"nd/":"th/";
      
     let datetime = hh + ":" + mm + " " + day + str + monthstr;
     

  
    document.getElementById("clock").innerText = datetime; 
    let t = setTimeout(function(){ currentDateTime() }, 1000); 

  
  }

  currentDateTime()
  