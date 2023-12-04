export async function sendGeoData(newPointId: number, geom: string) {
  return await fetch('url', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      newPointId,
      geom,
    }),
  })
}
