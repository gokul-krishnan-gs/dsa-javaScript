export function studentDetails(studentDatabase,studentName){
  for(let i=0;i<studentDatabase.length;i++)
  {
    if(studentDatabase[i] === studentName){
    console.log(`found : ${studentName}`);
    };
  }
};
