/************ADD a record **********8*/

let arr = [];

function add()  {
    let fname = document.getElementById("fname").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let letters = /^[A-Za-z]+$/;
    let eml = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let phoneno = /^\d{10}$/;
 
    if(fname == "" || email == "" || phone == "")   {
        alert("Please enter all the fields");
        return false;
    }else if(!(fname.match(letters))) {
                alert("Please enter only letters in name field");
                return false;
          }else if(!(email.match(eml))) {
                    alert("Invalid Email Address");
                    return false;
                }else if(!(phone.match(phoneno)))   {
                        alert("Invalid Phone Number");
                        return false;
                      }else {
                        let arrObj = {
                            Name : fname,
                            Email : email,
                            Phone : phone
                        }
                        arr.push(arrObj);
                         
                        if((localStorage.getItem("users"))) {
                           arr = JSON.parse(localStorage.getItem("users"));
                           console.log(typeof(arr));
                           
                           arr.push(arrObj);
                           localStorage.setItem("users" , JSON.stringify(arr)); 
                        }
                        else {
                            localStorage.setItem("users" , JSON.stringify(arr));
                        }
                //localStorage.removeItem("users");
                        document.getElementById("tableDiv").style.display = "block";
                        let table = document.getElementById("table");
                        let row = table.insertRow(-1);
                        let cell1 = row.insertCell(0).textContent = fname;
                        let cell2 = row.insertCell(1).textContent = email;
                        let cell3 = row.insertCell(2).textContent = phone;
                   }
        
    //window.localStorage.clear();
    document.getElementById("addForm").reset();
}






/********************delete a record**************** */
function showDelForm()  {
     document.getElementById("delContainer").style.display = "block";
}

function del()  {
    let email = document.getElementById("emaill").value;
    let localStorageArray = JSON.parse(localStorage.getItem("users"));
    
    for(let index in localStorageArray){
        if(email == localStorageArray[index].Email) {
            localStorageArray.splice(index , 1);
        }      
    }
    document.getElementById("emaill").value = "";
    localStorage.setItem("users" , JSON.stringify(localStorageArray));
}







/*****************************sorting***********************/
function sorting()  {
    let localStorageArray = JSON.parse(localStorage.getItem("users"));
    localStorageArray.sort( (item1 , item2) => {

        let name1 = item1.Name.toLowerCase();
        let name2 = item2.Name.toLowerCase();
        if(name1 < name2) {
            return -1;
        }else if(name1 > name2) {
            return 1;
        }else {
            return 0;
        }
    });
    localStorage.setItem("users" , JSON.stringify(localStorageArray));    
}






/***********************************update************** */
function update() {
    document.getElementById("updateForm").style.display = "block";
    let localStorageArray = JSON.parse(localStorage.getItem("users"));
    let fname = document.getElementById("fnamee").value;
    let email = document.getElementById("Updtemail").value;
    let phone = document.getElementById("phonee").value;
    let letters = /^[A-Za-z]+$/;
    let eml = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let phoneno = /^\d{10}$/;
 
    if(fname == "" || email == "" || phone == "")   {
        alert("Please enter all the fields");
        return false;
    }else if(!(fname.match(letters))) {
                alert("Please enter only letters in name field");
                return false;
          }else if(!(email.match(eml))) {
                    alert("Invalid Email Address");
                    return false;
                }else if(!(phone.match(phoneno)))   {
                        alert("Invalid Phone Number");
                        return false;
                      }else {
                                for(let index in localStorageArray){
                                    if(email == localStorageArray[index].Email) {
                                    localStorageArray[index].Name = fname;
                                    localStorageArray[index].Email = email;
                                    localStorageArray[index].Phone = phone;
                                    }      
                                }
                            }

    document.getElementById("updateForm").reset();
    localStorage.setItem("users" , JSON.stringify(localStorageArray)); 
}






/******************************************pagination*******************************/
function showRecords()  {

    if( !(JSON.parse(localStorage.getItem("users"))) )   {
        alert("Oops you don't have any record");
    }else {
        window.open("record.html");
    }
}


