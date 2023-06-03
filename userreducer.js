const Userlist = (state = [], action) => {
  let mydata = [...state]; // Create a copy of the state array

  if (action.type === 'adduser') {
    const currentTime = new Date(); // Get the current date and time
    mydata.push({
      fullname: action.mydata1.fullname,
      time: currentTime.toLocaleTimeString(),
      date: currentTime.toLocaleDateString(),
      year: currentTime.getFullYear(),
    }); // Add a new object with fullname, time, date, and year properties to the array
  }


  if (action.type === 'removeuser') {
    mydata = mydata.filter((user, index) => index !== action.userindex); // Remove the user based on the provided index
  }

  if (action.type === 'updateuser') {
    const { userindex, updatedUser } = action;
    mydata = mydata.map((user, index) =>
      index === userindex ? { ...user, fullname: updatedUser.fullname } : user
    ); // Update the user's fullname based on the provided index
  }

  
  if (action.type === 'edituser') {
    mydata = mydata.map((user, index) =>
      index === action.userindex ? { ...user, fullname: action.mydata1 } : user
    ); // Update the user's fullname based on the provided index
  }

  return mydata; // Return the updated state array
};

export default Userlist;
