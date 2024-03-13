const Osm = {
  parseRoads: (data) => {
    const nodes = data.elements.filter((n) => n.type == "node");

    const lats = nodes.map(n => n.lat);
    const lons = nodes.map(n => n.lon);

    const minLat = Math.min(...lats);
    const maxLat = Math.min(...lats);
    const minLon = Math.min(...lons);
    const maxLon = Math.min(...lons);


    const points = [];
    for (const node of nodes) {
      const y = node.lat;
      const x = node.lon;
      points.push(new Point(x, y));
    }
    graph.points = points;
  }
}
