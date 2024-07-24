// Task 1

function errorMsg() {
  try {
    throw new Error("Some error occurred");
  } catch (error) {
    console.log(error);
  }
}

// errorMsg();

// Task 2

function divide(num1, num2) {
  try {
    if (num2 !== 0) {
      return num1 / num2;
    } else {
      throw new Error("Cannot divide by zero.");
    }
  } catch (error) {
    console.error(error);
    return null;
  }
}

// const res1 = divide(2, 0);
// console.log(res1);

// Task 3

function task3(){
    try {
        throw new Error("Issue in code");
    } catch (error) {
        console.log(error);
    } finally {
        console.log("This block is always executed");
    }
}


// task3();

// Task 4


class CustomError extends Error {
    constructor(message) {
        super(message);
        this.name = "CustomError";
    }
}

function throwError() {
        try {
            throw new CustomError("This is a Custom Error message")
        } catch (error) {
            if (error instanceof CustomError) {
                console.log(error.message);
            } else {
                console.log("Unexpected error ", error.message);
            }
        }
}
// function throwError() {
//     try {
//         throw new CustomError("This is a custom error message");
//     } catch (error) {
//         if (error instanceof CustomError) {
//             console.error(`Caught a custom error: ${error.message}`);
//         } else {
//             console.error(`Caught an unexpected error: ${error.message}`);
//         }
//     }
// }

// throwError();

// Task 5
function validateUsername(string) {
    try {
        if(!string ||string === null || string == ""){
            throw new CustomError("String can not be empty")
        }
    } catch (error) {
        console.log(error.message);
    }
    
}

// validateUsername("");

// Task 6

function task6(userName){
    return new Promise((resolve, reject) => {
        if(userName){
            resolve("Promise resolved")
        } else {
             reject(new Error("Error occurred"))
        }
        
    })
}

// task6()
// .then( message => {
//     console.log(message);
// })
// .catch( errorMsg => {
//     console.log(errorMsg);
// })

function randomPromise() {
    return new Promise((resolve, reject) => {
        let random = Math.random();
        if (random > 0.5) {
        resolve("Promise is resolved")
    } else {
        reject(new Error("Promise rejected"));
    }
}) 
}

async function handlePromise() {
    try {
        const result = await randomPromise()
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

// handlePromise();

// Task 8



// fetch("https://jsonplaceholder.typicode.com/posts/1")
// .then( response => {
//     if (!response.ok) {
//         throw new Error("Error occurred");
//     }
//     return response.json();
// })
// .then( data => {
//     console.log(data);
// })
// .catch(error => {
//     console.error(error.message);
// });

async function requestingFun() {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/posts/1")
        if (!response.ok) {
            throw new Error("Error in fetching data")
        }
        return await response.json();
    } catch (error) {
        console.log(error.message);
    }
    
}

requestingFun()
.then( res => {
    console.log(res);
})

