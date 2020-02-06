# Password-Generator

Password generator!!!

## GIVEN I need a new, secure password

In this READme I have copied my original notes for pseudocode based on the acceptance criteria. I then attempted to pseudocode further by indicating
what elements I will need to impliment into my js code file in addition to what was already there. What I have in my js file is mostly what I have taken from class and I am having trouble being able to put the correct code into place. I still need to do more study and research with js just to find my starting point, if you know what I mean. I did get some help from Dane who slacked me a bit of code for reference and will try to make it my own while understanding that concept as well. I will try to reach out to you today and I have a tutor scheduled for Thursday and Friday for additional help. 



Acceptance Criteria:

1. WHEN I click the button to generate a password

2. THEN I am presented with a series of prompts for password criteria

3. WHEN prompted for password criteria

4. THEN I select which criteria to include in the password

5. WHEN prompted for the length of the password

6.THEN I choose a length of at least 8 characters and no more than 128 characters

7.WHEN prompted for character types to include in the password

8.THEN I choose lowercase, uppercase, numeric, and/or special characters

9.WHEN I answer each prompt

10.THEN my input should be validated and at least one character type should be selected

11.WHEN all prompts are answered

12.THEN a password is generated that matches the selected criteria

13.WHEN the password is generated

14THEN the password is either displayed in an alert or written to the page

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
