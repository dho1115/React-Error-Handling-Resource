*** ERROR BOUNDARY PRACTICE. ***

Notice inside ComponentOne.jsx, in order for the app to NOT CRASH, I had to use TWO ERROR HANDLING METHODS:

1. The traditional <ErrorBoundary></ErrorBoundary> to catch the REFERENCE ERRORS, like when you do fdsafdsaa and fdsafdsaa is not defined b/c it is not a variable. The traditional try/catch will NOT catch those errors because Javascript compiles fdsafdsaa these things and tries to interpret it before it makes it to the browser (run-time). This is NOT legitimate Javascript. There is NO JAVASCRIPT KEY for fdsafdsaa.
2. Try/Catch to catch errors such as {name: 'bobbie'}. <ErrorBoundary></ErrorBoundary> will NOT catch these errors because {name: 'bobbie'} is LEGITIMATE JAVASCRIPT!!! It's just that, in React, when it reaches the Browser, the browser cannot read Javascript objects (it has to be turned to a string). By the time the error is detected, it is too late for <ErrorBoundary></ErrorBoundary> to catch these... but NOT too late for try/catch.