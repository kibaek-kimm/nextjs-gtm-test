export default function getButton(req, res) {
  setTimeout(() => {
    res.status(200).send({});
  }, 3000);
}