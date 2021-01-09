yearToDays = (years) => years * 365;

function show (arrowFunc, years) {
    console.log(arrowFunc(years));
}

show(yearToDays, 10);