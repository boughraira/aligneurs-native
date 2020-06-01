var options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const today = new Date();
  
  const patients = [
    {
      id: 1459,
      date: today.toLocaleDateString("en-US", options),
      name: "Hazem Boughraira",
      add:'Case started',
      phone:'93 508 154',
      email: "boughrairahazem8@gmail.com",
      image:require('../Photos/profile1.png')
    },
    {
      id: 1459,
      date: today.toLocaleDateString("en-US", options),
      name: "Hazem Boughraira",
      add:'Newly added',
      phone:'93 508 154',
      email: "boughrairahazem8@gmail.com",
      image:require('../Photos/profile2.png')
    },
    {
      id: 1459,
      date: today.toLocaleDateString("en-US", options),
      name: "Hazem Boughraira",
      add:'Newly added',
      phone:'93 508 154',
      email: "boughrairahazem8@gmail.com",
      image:require('../Photos/profile3.png')
    },
    {
      id: 1459,
      date: today.toLocaleDateString("en-US", options),
      name: "Hazem Boughraira",
      add:'Newly added',
      phone:'93 508 154',
      image:require('../Photos/profile4.png')
    },
    {
      id: 1459,
      date: today.toLocaleDateString("en-US", options),
      name: "Hazem Boughraira",
      add:'Newly added',
      phone:'93 508 154',
      email: "boughrairahazem8@gmail.com",
      image:require('../Photos/profile5.png')
    },
    
    {
      id: 1459,
      date: today.toLocaleDateString("en-US", options),
      name: "Hazem Boughraira",
      add:'Newly added',
      phone:'93 508 154',
      email: "boughrairahazem8@gmail.com",
      image:require('../Photos/profile5.png')
    },
  ];
  export default patients;