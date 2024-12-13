function calculateDogYears(years, conversionType) {
  switch (conversionType) {
    case "dog_to_human":
      return years / 7;
    case "human_to_dog":
      return years * 7;
    default:
      alert(
        "ERROR! Wrong conversion type, use one of the following types: dog_to_human or human_to_dog years"
      );
      return null;
  }
}

console.log(calculateDogYears(60, "dog_to_human"));

console.log(calculateDogYears(2, "human_to_dog"));
