const users = [
  {
    first_name: 'Mike',
    location: 'London'
  },
  {
    first_name: 'Tim',
    location: 'US'
  },
  {
    first_name: 'John',
    location: 'Australia'
  }
];
// Using Map method
// ["Mike lives in London", "Tim lives in US", "John lives in Australia"]


let result=users.map(function(e){
	return " "+e.first_name+" lives in "+e.location

});
document.write(result)