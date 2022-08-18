/*
   WEB222 – Final Assessment

   I declare that my assessment is wholly my own work in accordance
   with Seneca Academic Policy. No part of this assessment has been copied manually
   or electronically from any other source (including web sites) except for 
   the information supplied by the WEB222 instructors and / or made available in
   this assessment for my use. I also declare that no part of this assignment has
   been distributed to other students.
 
 
    Name: Karamvir Singh
    Student ID: 158121210
    Date: 18 August 2022
    */

 function validate() {
    if (/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/.test(document.getElementById("form").Email.value))
         {
      if (/[A-Za-z]\d[A-Za-z] ?\d[A-Za-z]\d/.test(document.getElementById("form").PostalCode.value))
       {
        return true;
      }
      alert("INCORRECT POSTAL CODE !!!");
      return false;
      }
    alert("INCORRECT EMAIL ADDRESS !!!");
    return false;
    }
  
    function hire() {
    let row = document.getElementById("Hourly_Rate");
    row.innerHTML = "Rate Per Hour";
    let row2 = document.getElementById("Rate");
    row2.innerHTML = "";
    let input = document.createElement("input");
    input.setAttribute("type", "number");

    input.setAttribute("Name", "Hourly_Rate");
    
    input.setAttribute("id", "Hourly_Rate");
    
    input.setAttribute("step", "1");
    
    input.setAttribute("required", "");
    
    input.setAttribute("placeholder", "RATE ....");
    
    row2.appendChild(input);
  }
  
  function Comment_Question() {
    let row = document.getElementById("Hourly_Rate");
    row.innerHTML = "";
  
    let row2 = document.getElementById("Rate");
    row2.innerHTML = "";
  }
  