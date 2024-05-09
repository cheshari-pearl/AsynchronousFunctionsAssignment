//Q1
//Write an asynchronous function that accepts a message string and a delay time in milliseconds. The function should log the message to the console 
//after the specified delay time.
 async function messageLog(message, delayTime) {
    await new Promise(resolve => setTimeout(resolve,delayTime));
    console.log(message);
   } 
    
   messageLog("Hello, good morning",3000)



//Q2
//You have an array of user IDs and a function getUserData(id) that returns a Promise with user data when given a user ID. 
//Write an asynchronous function that fetches and logs the data for each user ID one by one, in sequence.

const userIds = [401, 324, 223, 45];
function getUserData(id) {
 return new Promise((resolve, reject) => {
 setTimeout(() => {
 
 const userData = { id, name: `User ${id}` };
 resolve(userData);
 }, 1000);
 });
}
async function logUserData() {
 for (const userId of userIds) {
 try {
 const userData = await getUserData(userId);
 console.log(`User ID ${userId}: ${userData.name}`);
 } catch (error) {
 console.error(`Error fetching data for User ID ${userId}: ${error.message}`);
 }
 }
 }
 logUserData()



//Q3
//You have an asynchronous function performTask() that returns a Promise. The Promise resolves if the task is successful and rejects if there's an error.
// Write a function that calls performTask() and logs a custom success message if the task is successful, and a custom error message if there's an error.

async function performTask(){
    try{
        console.log ('Good work')
    }
    catch{
      console.log ('You need to put more effort')
    }
}
async function getPerformTask(){
    try{
        await performTask();
        console.log('The task was successful')
    }
    catch(error){
        console.log(error)
        console.log('The task is still not done')
    }
}
getPerformTask();


//Q4.
//Retry Logic:
//Scenario:
//Write a function unstableTask that:

//1.Accepts a taskName and failureProbability (a number between 0 and 1).
//2. Returns a Promise that:
//Resolves immediately with a success message if a randomly generated number is greater than failureProbability.
//Rejects immediately with a failure message if a randomly generated number is less than or equal to failureProbability.

   function unstableTask(taskName, failureProbability) {
    return new Promise((resolve, reject) => {
    const randomValue = Math.random();
    if (randomValue > failureProbability) {
    
    resolve(`Task "${taskName}" succeeded`);
    } else {
    
    reject(new Error(`Task "${taskName}" failed`));
    }
    });
   }


   // Write another function executeWithRetry that:
   // Accepts a taskName, retries, and failureProbability.
   // Uses a retry mechanism to attempt the unstableTask up to retries times.
   // Logs whether the task succeeded or failed after all attempts.

   async function executeWithRetry(taskName, retries, failureProbability) {
    for (let attempt = 2; attempt => retries; attempt++) {
    try {
    await unstableTask(taskName, failureProbability);
    console.log(`Attempt ${attempt}: Task "${taskName}" succeeded`);
    return;
    } catch (error) {
    console.error(`Attempt ${attempt}: ${error.message}`);
    }
    }
    console.log(`All ${retries} attempts failed for task "${taskName}"`);
   }
    
   executeWithRetry('Runtime', 2, 0);

 