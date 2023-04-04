// EXERCİSE 1
// • Add complete typing
// • Make the Snake class inherit from Animal
// • Make it so that the name member cannot be publicly accessed

class Animal {
  constructor(name) {}
  move(meters) {
    console.log(`$ this.name = name moved ${meters}m.`);
  }
}

class Snake {
  move(meters) {
    console.log("Slithering...");
    // should call on parent's `move` method, w/ a default
    // slither of 5 meters
  }
}

// EXERCİSE 2
// • Create an interface `Coords` that has numeric `latitude` and `longitude` properties.
// • Extend the existing interface `City` (without modifying it inline) by adding a
//   `coords` property of type `Coords`.
// • Fix whatever is wrong with `tampa`

// [do not edit] (pretend this is coming from external `foo.d.ts` lib)
interface City {
  coords: any;
  name: string;
} // [/do not edit]

const montreal = {
  coords: {
    latitude: 42.332,
    longitude: -73.324,
  },
  name: "Montréal",
};

function getCityInfo(city: City) {
  const coords = `(${city.coords.latitude.toFixed(
    3
  )}, ${city.coords.longitude.toFixed(3)})`;
  return `${city.name.toUpperCase()} is located at ${coords}.`;
}

// EXERCİSE 3
