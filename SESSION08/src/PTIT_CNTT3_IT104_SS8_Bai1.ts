enum weekDays {
  monday = "monday",
  tuesday = "tuesday",
  wednesday = "wednesday",
  thursday = "thursday",
  friday = "friday",
  saturday = "saturday",
  sunday = "sunday"
}

for (const key of Object.keys(weekDays)) {
  console.log(weekDays[key as keyof typeof weekDays]);
}
