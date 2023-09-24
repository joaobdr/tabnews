test("GET to /api/v1/status should return 200", async () => {
  const response = await fetch(
    "https://curly-invention-q7qx7x5r764g2xr96-3000.app.github.dev/api/v1/status",
  );

  console.log(response);

  expect(response.status).toBe(200);
});
