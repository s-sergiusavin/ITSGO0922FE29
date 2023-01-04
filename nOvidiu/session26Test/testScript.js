const singleDataUser = "https://reqres.in/api/users/2";

// const promise = new Promise((resolve, reject) => {
//   setTimeout(reject, 2000, "error sent", "spanacSS");
// });
// promise.then(
//   (value) => {
//     console.log("fulfilled" + promise);
//   },
//   (error) => {
//     console.log("rejected" + error);
//   }
// );

// in functie de ce imi apare error sent?
//setTimeout(functionRef, delay, param1....paramN)
//promise.then(onResolve,onReject);

fetch(singleDataUser).then((response) => {
  console.log(response); // primesc informatia encodata
  response.json().then((data) => {
    // imi returneaza un promise .json =deci fol then
    console.log(data); // informatia decodata/decriptata
    let spanac = JSON.stringify(data);
    console.log(spanac);
  });
});

//load a script
// function loadScript(src, callback) {
//   let script = document.createElement("script");
//   script.src = src;
//   script.onload = () => callback(script);
//   document.head.append(script);
// }

// loadScript(
//   "https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js",
//   (script) => {
//     alert(`Cool, the script ${script.src} is loaded`);
//     alert(_); // _ is a function declared in the loaded script
//   }
// );

// A function that does something asynchronously should provide a callback argument where we put the function to run after it's complete.

//callback in callback
//After the outer loadScript is complete, the callback initiates the inner one.
//So every new action is inside a callback.

// loadScript('/my/script.js', function(script) {

//   loadScript('/my/script2.js', function(script) {

//     loadScript('/my/script3.js', function(script) {
//       // ...continue after all scripts are loaded
//     });

//   });

// });
new Promise((resolve, reject) => {
  setTimeout(() => resolve("value"), 2000);
})
  .finally(() => console.log("Promise ready")) // triggers first
  .then((result) => console.log(result)); // <-- .then shows "value"
// finally doesn't process a promise result
