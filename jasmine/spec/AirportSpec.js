describe("Airport", function() {
  let clear_weather;

  beforeEach(function() {
    clear_weather = jasmine.createSpyObj('clear_weather', ['current']);

    // spyOn(clear_weather,'current').and.returnValue("clear");
  });

  it("should be created with weather and capacity", function() {

    airport = new Airport(1, clear_weather)

    expect(airport).not.toBeUndefined()
    expect(airport.capacity).toEqual(1)
    // expect(airport.clear_weather).toEqual("clear")
  });

  it("should be created with no planes in hangar",  () => {
    airport = new Airport(1, clear_weather)
    expect(airport.hangar).toHaveSize(0)
  });
});