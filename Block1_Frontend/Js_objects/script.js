
//Iteration 1
//1.1 full name(person)
// const obj = {firstName : 'Musa' , lastName: 'Djiguel' } 
// function firstLastName(obj) { 
//    return obj.firstName + " " + obj.lastName; 
// }
// console.log(firstLastName(obj)); 

//Iteration 2
//WHo is Online?

//   function whoIsOnline(friends) {
//     const online = [];
//     const offline = [];
//     const afk = [];
  
//     for (const friend of friends) {
//       const isOnline = friend.status === "online";
//       const isAfk = isOnline && friend.lastActivity > 600; 
  
//       if (isOnline && !isAfk) {
//         online.push(friend.username);
//       } else if (isOnline) {
//         afk.push(friend.username);
//       } else {
//         offline.push(friend.username);
//       }
//     }
  
//     const result = {
//       online,
//       offline,
//       afk,
//     };
  
//     return friends.length === 0 ? {} : result; 
//   }
  
//   const friends = [
//     { username: "David", status: "online", lastActivity: 600 },
//     { username: "Lucy", status: "offline", lastActivity: 2320 },
//     { username: "Bob", status: "online", lastActivity: 4320 },
//   ];
  
//   const onlineStatus = whoIsOnline(friends);
//   console.log(onlineStatus); 


  //Iterartion 3 - Overheating
  function checkComponentTemperatures(yourComputer, maxTemperatures) {
    const results = {}; 
  
    for (const component in yourComputer) {
      const currentTemp = yourComputer[component];
      const maxTemp = maxTemperatures[component];
  
      results[component] = currentTemp <= maxTemp; 
    }
  
    return results;
  }
  
  const yourComputer = {
    cpu: 25,
    gpu: 45,
    motherBase: 15,
    dvdDriver: 25,
    rom: 5,
    ram: 10,
  };
  
  const maxTemperatures = {
    cpu: 33,
    gpu: 42,
    motherBase: 20,
    dvdDriver: 20,
    rom: 10,
    ram: 20,
  };
  
  const results = checkComponentTemperatures(yourComputer, maxTemperatures);
  
  console.log(results); 
  