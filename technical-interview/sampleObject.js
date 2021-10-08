// Write a function that deletes the cohortNumber property from the following object. Also print the object after deleting the property. 

let techtonica = { 
  studentName : "Your Name", 
  favoriteLanguage : "Your favorite language", 
  cohortNumber : 3 
  };

  function sampleObject(obj){
    delete obj.cohortNumber;
     return obj;
  }


  console.log(sampleObject(techtonica));