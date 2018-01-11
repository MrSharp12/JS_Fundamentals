let outside = 'Hey I am outside!';

function doSomething() {
    let inside = 'Hey I am inside!';
    console.log(inside, outside);

    function doAnotherThing () {
        let deepInside = 'I am deep baby.'
        console.log(deepInside, inside, outside);
    }
    doAnotherThing();
}

doSomething();