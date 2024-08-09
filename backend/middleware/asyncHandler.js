// Define a higher-order function named `asyncHandler` that takes a function `fn` as an argument.
const asyncHandler = fn => 

    // Return a new function that takes the `req`, `res`, and `next` objects as arguments.
    (req, res, next) => {
    
      // Use `Promise.resolve()` to wrap the execution of the passed function `fn`.
      // This ensures that `fn`, which may be asynchronous, is handled as a promise.
      Promise.resolve(fn(req, res, next))
  
        // If the promise resolves, nothing happens.
        // If the promise rejects (an error occurs), it will be caught by `.catch(next)`.
        // The `next` function is called with the error, passing it to the next middleware or error handler.
        .catch(next);
    };
  
  // Export the `asyncHandler` function as the default export of the module.
  // This allows it to be imported and used in other files.
  export default asyncHandler;
  