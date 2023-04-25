//Trial 1:
//We've got some basic info about Karen's home
//Debug the type of data provided
//Return the types concatenated in a single variable

function moreAboutHome(address, distance, neighbour) 
{
    let ad = typeof address
    let dist = typeof distance
    let neig = typeof neighbour
    return ad + dist + neig
}



//Trial 2:
//Check if the data given is of the right type
//parents = String, noOfSiblings = Number, isNuclearFamily = Boolean


function moreAboutKaren(parents, noOfSiblings, isNuclearFamily)
{
    if (typeof parents == "string" && typeof noOfSiblings == "number" && typeof isNuclearFamily == "boolean") 
      {
        return true
      } 
    else{
        return false
      }
}



//Trial 3:
//Lily is suspicious about Karen's new friend
//Karen tells her friend's age and even writes it down
//Check which one those is not a number (NaN) and return that value

function doesFriendExist(age_text, age_number){
    if (isNaN(age_text) == true) {
        return age_text
    }
    if (isNaN(age_number) == true) {
        return age_number
    }
}




//Trial 4:
//Lily gave Karen x sweets
//Karen ate y sweets herself
//On her way to the river, she ate another z sweets every n meters travelled
//Her friend divided the remaining sweets into 2 parts for each
//How many sweets did her friend get to eat?

function sweetTooth(total_sweets,sweets_Karen,sweet_meter,meters_to_travel){
    var shared = 0
    if (typeof total_sweets != "number" ||
      typeof sweets_Karen != "number" ||
      typeof sweet_meter != "number" ||
      typeof meters_to_travel != "number") 
    {
      return "No sweets for Karen's friend"
    } else if (total_sweets){
      shared =(total_sweets -(sweets_Karen + sweet_meter * meters_to_travel)) /2
    return shared}
  }




//Trial 5:
//As Lily moves closer, it gets colder. She checks the temperature on her mobile
//It only shows in fahrenheit. Convert the data to celsius and return it.

function convertToCelcius(fahrenheit){
    var temp = 0
    if (typeof fahrenheit !== "number") 
    temp = "Technical Error!"
    else temp = ((fahrenheit - 32) * 5) / 9
    return temp
}



//Trial 6:
//Lily can now do multiple things to deal with this
//1. Take her daughter to a doctor
//2. Talk to her husband about it
//3. Counsel her daughter herself
//4. Lock her daughter in her room

function aDifficultChoice(choice){
    switch(choice){
        case 1:
            return "Take her daughter to a doctor"
            break;
        case 2:
            return "Talk to her husband about it"
            break;
        case 3:
            return "Counsel her daughter herself"
            break;
        case 4:
            return "Lock her daughter in her room"
            break;
    }
}

//Challenge 1:
//Lily realized that she'd hurt her daughter
//All she wants now is for her to stop crying
//She refuses to talk to her but Lily doesn't stop trying
//She tries out multiple things hoping for the best
//Take all of Lily's strategies and concatenate them to a single var
//Seperate the strategies by a single space
//Return the length of the complete strategy


function consoleKaren(strategies){
        var res = strategies.join(" ");
        return res.length;
}
