export async function sendGeoData(data, geom: string) {
  return await fetch('http://146.190.37.102:5000/silo/point/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      data,
      geom,
    }),
  })
}
