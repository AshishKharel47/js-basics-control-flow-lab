function scuberGreetingForFeet(variable){
  // Write your code here!
  if (variable <= 400){
    return 'This one is on me!';
  }
  if (variable>2000&& variable<=2500){
    return 'I will gladly take your thirty bucks.';
  }
  if (variable>2500){
    return 'No can do.';
  }
}

function ternaryCheckCity(string){
  // Write your code here!
  if (string=='NYC'){
    return 'Ok, sounds good.';
  }
  if (string=='Pittsburgh'){
    return 'No go.';
  }
}

function switchOnCharmFromTip(string){
  // Write your code here!
  let message;
  switch(string) {
    case 'generous':
      message = 'Thank you so much.';
      break;
      case'not as generous':
      message='Thank you.';
      break;
      default:
        message='Bye.';
        break;
  }
  return message;
}