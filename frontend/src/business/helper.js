import API from "../backend";

const businessSave = (business) => {
  return fetch(`${API}/saveBusiness`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(business),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
};

export default businessSave;
