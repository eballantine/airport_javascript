describe("Weather", function() {
  let weather;

  beforeEach(function() {
    weather = new Weather();
  });

  it("should return one of two weather types", function() {
    expect(["clear", "stormy"].includes(weather.current())).toEqual(true)
  });
});
