function calculateDogYears(years, conversionType) {
  switch (conversionType) {
    case "dogToHuman":
      return years / 7;
    case "humanToDog":
      return years * 7;
    default:
      alert(
        "ERROR! Wrong conversion type, use one of the following types: dogToHuman or HumanToDog years"
      );
      return null;
  }
}

console.log(calculateDogYears(60, "dogToHuman"));

console.log(calculateDogYears(2, "humanToDog"));
