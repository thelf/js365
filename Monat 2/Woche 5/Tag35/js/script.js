"use strict";

let showNewsletterFor = (userName, salutation) => {
  console.log(`Hallo ${salutation} ${userName},`);

  if (salutation === "Herr") {
    console.log("Wir freuen uns Sie darüber informieren zu können, dass Sie 10.000 € und ein Auto gewonnen haben!\nHerzlichen Glückwunsch! ");
    console.log("Bitte teilen Sie per E-Mail Ihre Bankdaten mit, so dass wir Ihnen den Gewinn auszahlen können.");
    console.log("Mit freundlichen Grüßen\nIhre Lotterie");
  }else {
    console.log("Wir freuen uns Sie darüber informieren zu können, dass Sie ein Parfüm und eine Reise gewonnen haben!\nHerzlichen Glückwunsch! ");
    console.log("Bitte teilen Sie per E-Mail Ihre Bankdaten mit, so dass wir Ihnen den Gewinn auszahlen können.");
    console.log("Mit freundlichen Grüßen\nIhre Lotterie");
  }
};

showNewsletterFor("Schmidt", "Herr");
showNewsletterFor("Müller", "Frau");
showNewsletterFor("Klein", "Herr");
