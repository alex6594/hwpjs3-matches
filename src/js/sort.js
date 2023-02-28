export default function sortUnits(units) {
    units.sort((a, b) => b.health - a.health);
    return units;
  }