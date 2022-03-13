import API from "../backend";

const loanSave = (loan) => {
  return fetch(`${API}/saveLoan`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(loan),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
};

export default loanSave;
