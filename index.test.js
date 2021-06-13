test.each(["legacy", "modern"])(
  "%s fake timers wait for requestAnimationFrame",
  async (timerImplementation) => {
    jest.useFakeTimers(timerImplementation);
    let exited = false;
    // implemented in JSDOm with `setInterval(callback, 16.6666)`
    requestAnimationFrame(() => {
      exited = true;
    });

    jest.advanceTimersByTime(15);

    expect(exited).toBe(false);

    jest.advanceTimersByTime(2);

    expect(exited).toBe(true);
  }
);
