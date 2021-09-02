describe("Plane", function() {
  beforeEach(function() {
    plane = new Plane();
  });

  // it('should be able to land', function() {
  //   const airport = jasmine.createSpyObj('airport', [], ['hangar']);
  //   plane.land(airport);
  // });

  it('starts in the hanger', function() {
    expect(plane.airbourne).toBeFalse();
  });
});