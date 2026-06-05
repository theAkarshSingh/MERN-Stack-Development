// Callback -> A callback is a function passed as an argument to another function,
// which is then called (invoked) inside that outer function after some operation is completed.

function makeMaggi(rawmaggi, cb){
    console.log("Maggi making process started.");
    cb();
}
function boilWater(cb){
    console.log("maggi added to boiling water.");
    cb();
}
function addMasala(cb){
    console.log("Masala added.");
    cb();
}
function serveMaggi(cb){
    console.log("Serve maggi in bowls with fork.");
    cb();
}
makeMaggi("Noodles", ()=> {
    boilWater(()=> {
        addMasala(()=>{
            serveMaggi(()=>{
                console.log("Maggi cooked successsfully.");
            });
        });
    });
});