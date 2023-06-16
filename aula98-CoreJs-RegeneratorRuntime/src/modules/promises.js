function promise(){
    return new Promise((resolve, reject) => {
        setTimeout( () =>{
            console.log('hey, i am promise');
            resolve();
        }, 2000);
    });
};

export default async function execute() {
    await promise();
    console.log('it ended');
};