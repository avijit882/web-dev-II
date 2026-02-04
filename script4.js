// console.log("Starting homework...");

// setTimeout(() => {

// console.log ("Homework done!");

// console.log("Starting dinner...");

// setTimeout(() => {

// console.log("Dinner done!");

// console.log("Getting ready to go out...");

// setTimeout(() => {

// console.log("Going to the playground!");

// }, 1000); // after dinner

// }, 1500); // dinner time

// }, 2000); // homework tim
// function finishHomework(callback ) {
//     console.log("starting homework...");
//     settimeout(()=>{
//         console.log("Homework done!");
//         Callback();
//     },1500);
// }
//  function gotoPlayground(){
//     console.log("Going to the Playground!");
//  } 
//  finishHomework(()=>{
//     eatdinner(()=>{
//         gotoPlayground();
//     });
//  });
const p=new promise ((res,rej)=>{
    let done=false
    settimeout(()=>{
        if(done){
            res("work is done!!")
        }else{
            rej("work is not done")
        }
        },5000)
    })
    p.then


 