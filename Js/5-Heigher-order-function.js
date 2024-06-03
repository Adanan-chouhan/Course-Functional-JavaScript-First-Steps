// Heigher order function 
function sayMyName(callback){
    return callback() // callback()
}

function success(){
    console.log("success");
}

function mujahid(){
    console.log("i am mujahid ");
}

// function call sayMyName and success fynction as a argument pass  
sayMyName(success);  // success
sayMyName(success);  // success
sayMyName(mujahid);


// Example 
function fetchData(callback){
    console.log("please wait");
    setTimeout(function(){
        console.log("Executed after 3sec");
    
    callback();
},3000);
}

fetchData(function(){
    console.log("welcome");
})