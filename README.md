# Password-Generator

Updated Js with comments for final submission. 

Password generator [Link to deployed App](https://mekaleka.github.io/Password-Generator/)



Pseudocode:
    start:var, functions, listener, if , if else, getElementById, confirm and alerts  -    Actions needed

WHEN: button pushed:                                      document.getElementById(id).onclick = function(){code}
THEN: is presented with prompts for password criteria:    var ??? = prompt ("prompt 1")("prompt 2")("prompt 3") ("prompt 4") if matches true, else false

WHEN: create prompts for password criteria:               var ??? = prompt ("passwordCriteria")
THEN: select what criteria to include:                    var confirmCriteria ("")
WHEN: prompted for password length:                       var ??? = prompt ("passLength") if matches true, else false
THEN: choose length of 8 characters, no more then 128:    var ??? = prompt ("charLengthMin")("charLengthMax") if min char is more then 8 and less then 128 true, else false

WHEN: prompted what charicter types to be included:       var ??? = prompt ("charType")
THEN: choose lowercase, uppercase, numeric, and/or special charicters:          document.getElementById("btn") . . addEventListener("click", ???);

WHEN: when each prompt is answered:                     document.getElementById("btn").addEventListener("click", ???);
THEN: input is validated & 1 char type is selected:       function?
WHEN: all prompts answered:                               function?
THEN: pass is generated that matches criteria:          function generatePassword(){
                                                          return "SuperSecretPassword1098";
                                                        }
WHEN: pass is generated:                                  function?
THEN: password is displayed in alirt or written in page   function?
