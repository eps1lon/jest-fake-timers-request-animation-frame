# jest-fake-timers-request-animation-frame

When using `jsdom` callbacks scheduled with `requestAnimationFrame` are never called if legacy faker timers are used.

`jsdom` implement `requestAnimationFrame` with `setInterval(callback, 16.6)`

## Steps to reproduce

1. clone repo
1. `yarn`
1. `yarn jest`

## Expected behavior

Callbacks scheduled with `requestAnimationFrame` are called when timers are advanced.

## Actual behavior

`jest.advanceTimersByTime(17)` has no effect with legacy timers.
