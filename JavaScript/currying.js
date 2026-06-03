function mail(to){
    return function(sub){
        return function(body){
            console.log(`mail has been sent to ${to} with ${sub} with ${body}`);
        };
    };
};
mail("abc@gmail.com", "Welcome to community", "Hi");