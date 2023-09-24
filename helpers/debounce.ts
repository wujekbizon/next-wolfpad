export const debounce = <T extends (...args: any[]) => void>(fn: T, interval: number) => {
  // Initialize timeoutId outside of returned function.
  let timeoutId: ReturnType<any>
  // This is the debounced function that will be returned and executed later
  return function (this: any, ...args: Parameters<any>) {
    // Clear previous timeout before setting new one
    clearTimeout(timeoutId)
    // Set a new timeout and save its ID to timeoutId variable
    timeoutId = setTimeout(() => {
      // Apply the original function with the provided arguments
      fn.apply(this, args)
    }, interval)
  }
}
