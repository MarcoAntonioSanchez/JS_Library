// SCROLL ON CLICK EVENT TO A SPECIFIC HTML ELEMENT
// This variable contains the current URL (web page)
var currentUrl = window.location.href;
// Initialize the function with an if statement and a for loop inside
function customScrollEvent() {
  // This if statement checks if the current URL and a alternative are the required ones to run this function
  if (
    currentUrl == currentUrl ||
    currentUrl == "http://127.0.0.1:5500/index.html"
  ) {
    // This constant contains all the input type elements in the current page
    const boxes = document.getElementsByTagName("input");
    console.log(boxes);
    // The for loop sets the single box out of the HTML collection in the variable boxes
    // so the click event applys to all the input type elements in the current page
    for (const box of boxes) {
      // An event listener waiting for a click to run the rest of the loop
      box.addEventListener("click", function onClick() {
        console.log("Click event captured");
        // This variable contains the ID of the element where the scroll is directed to
        var elementDestination = document.querySelector("#scroll-to-element");
        // Using the previous variable the scroll into view function is run,
        // pointing to the end of the parent block and with an smooth scroll animation
        elementDestination.scrollIntoView({
          block: "end",
          behavior: "smooth",
        });
      });
    }
  }
}
// Calling the function for execution
customScrollEvent();
