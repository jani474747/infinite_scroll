let count = 0;

const ShowData = (num = count + 25) =>{
    while(count < num){
        let h1 = document.createElement("h1");
        h1.innerHTML = `Masai Student ${count}`;
        count++;
        document.getElementById("MainDiv").append(h1);


    }
};


const debouncing = (func, delay) =>{
return function (){
    setInterval(()=>{
        func();

    },delay)
};
};

let handleScroll = debouncing(ShowData,1000);
handleScroll();

let cont = documnet.getElementById("MainDiv");

cont.addEventListener("scroll",() =>{
    console.log("cont.scrollHeight", cont.scrollHeight);
    console.log("cont.scrollTop", cont.scrollTop);
    console.log("ccc", cont.offsetHeight);
    if(cont.offsetHeight+cont.scrollTop>=cont.scrollHeight){
        handleScroll()
    }
})
