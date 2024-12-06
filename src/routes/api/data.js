export const GET = async () => {
  console.log('GET')
  await new Promise(resolve => setTimeout(resolve, 1000));
  return new Response(JSON.stringify({ message: "Data from api route" }));
}