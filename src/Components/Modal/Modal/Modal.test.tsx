export {}

const requestOptions200 = {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    "name": "test",
    "email": "test@gmail.com"
  })
}

const requestOptions400 = {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    "name": "test",
    "email": "usedemail@airwallex.com"
  })
}

test('async fetch 200 response status', async () => {
  const response = await fetch("https://l94wc2001h.execute-api.ap-southeast-2.amazonaws.com/prod/fake-auth", requestOptions200)
  expect(response.status).toBe(200);
});

test('async fetch 400 response status', async () => {
  const response = await fetch("https://l94wc2001h.execute-api.ap-southeast-2.amazonaws.com/prod/fake-auth", requestOptions400)
  expect(response.status).toBe(400);
});