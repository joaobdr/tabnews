function status(request, response) {
  response.status(200).json({ chave: "API funcionando perfeitamente ção" });
}
export default status;
