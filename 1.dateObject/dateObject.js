const getDayOfWeek = (getdate) => {
    // console.log(date);
    const date = new Date(getdate);
    const dayOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    // console.log(dayOfWeek[date.getDay()]);
    return dayOfWeek[date.getDay()];

}

    const date = new Date();
    const dayOfWeek = getDayOfWeek(date.toISOString().slice(0,10));
    console.log("Today Is",dayOfWeek);


