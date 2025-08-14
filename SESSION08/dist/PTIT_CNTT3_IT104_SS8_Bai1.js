var weekDays;
(function (weekDays) {
    weekDays["monday"] = "monday";
    weekDays["tuesday"] = "tuesday";
    weekDays["wednesday"] = "wednesday";
    weekDays["thursday"] = "thursday";
    weekDays["friday"] = "friday";
    weekDays["saturday"] = "saturday";
    weekDays["sunday"] = "sunday";
})(weekDays || (weekDays = {}));
for (const key of Object.keys(weekDays)) {
    console.log(weekDays[key]);
}
