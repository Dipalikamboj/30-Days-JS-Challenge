// const p1 = new Promise((resolve) => {
//     setTimeout(() => {
//         resolve();
//     }, 2000);
// })

// p1.then(()=> {
//     console.log("resolved");
// })

// const p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const message = new Error("Error occurred");
//         reject(message)
//     }, 2000);
// })

// p2.catch((err) => {
//     console.log(err);
// })

// Task 3

// function fetchingData(data, delay){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(data);
//         }, delay);   
//     })
// }


// const data1 = "Resolved promise 1";
// const data2 = "Resolved promise 2";
// const data3 = "Resolved promise 3";

// fetchingData(data1, 1000)
// .then( (data) => {
//     console.log(data);
//     return fetchingData(data2, 1000)
// })
// .then( (data) => {
//     console.log(data);
//     return fetchingData(data3, 1000)
// })
// .then( (data) => {
//     console.log(data);
// })


// Task 4 & 5 

// async function task4(promise){
//     try {
//         const result = await promise;
//         console.log(result);
//     } catch (error) {
//         console.log(error);
//     }
// }

// const myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         // resolve("Promise resolved");
//         reject("Error occurred")
//     }, 2000);
// })

// task4(myPromise)

// Activity 4

fetch("https://api.github.com/repositories")
.then(response => {
    if(!response.ok) {
        throw new Error("Network error");
    }
    return response.json();
})
.then( data => {
    console.log(data);
})
.catch(error => {
    console.log("Error in fetching data");
})

async function fetching(){
    try {
        const response = await fetch("https://api.github.com/repositories")
        if(!response.ok) {
            throw new Error("Network error");
        }
        const result = await response.json();
        console.log(result);
    } catch (error) {
        console.log("Error in fetching data");
    }
}

// fetching();



const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Success1")
    }, 1000);
})


const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('Rejected after 2 seconds');
      }, 2000);
})

Promise.all([p1, p2])
.then( data => {
    console.log(data);
})
.catch((error) => {
    console.log(error);
})


const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Success message");
    }, 2000);
})

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Rejection message");
    }, 4000);
})

const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Success message");
    }, 3000);
})

Promise.race([promise1, promise2, promise3])
.then( data => {
    console.log(data);
})
.catch( error => {
    console.error(error);
})
