const twilio = require("twilio"); // Import the Twilio library
const client = new twilio(
  "AC604525eef03f78ef592a667fe1e2d50c",
  "561f80db5a7c465d4f7a54fa8d90d24c"
); // set up the Twilio client
const recognition = new webkitSpeechRecognition(); // Initialize the Web Speech API
const speechSynthesis = window.speechSynthesis;

// Start listening to the user's speech
recognition.start();

recognition.onresult = function (event) {
  // Get the user's speech
  const speech = event.results[0][0].transcript;

  // Send the speech to the OpenAI API
  fetch("https://api.openai.com/v1/engines/davinci/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "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",
    },
    body: JSON.stringify({
      prompt: speech,
      max_tokens: 100,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      // Get the response from the OpenAI API
      const answer = data.choices[0].text;

      // Use the Web Speech API to convert the answer to speech
      const utterance = new SpeechSynthesisUtterance(answer);
      speechSynthesis.speak(utterance);

      // Make a Twilio call

      client.calls.create(
        {
          url: "localhost:3000", // TwiML document containing instructions for the call
          to: "+16504479780", // Phone number you want to call
          from: "+16504479780", // Twilio phone number
        },
        function (err, call) {
          if (err) {
            console.log(err);
          } else {
            console.log(call.sid);
          }
        }
      );
    });
};
