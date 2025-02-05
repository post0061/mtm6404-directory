const list = (clients) => {
  const clientsList = clients.map(
    (client) => `
      <li class="list-group-item d-flex justify-content-between" data-index="${client.index}">
        ${client.name}
        <strong>$ ${client.balance}</strong>
      </li>
    `
  );

  return clientsList.join("");
};

const order = (clients, property) => {
  return clients.sort((a, b) =>
    typeof a[property] === "number"
      ? a[property] - b[property]
      : a[property] > b[property]
      // a comes after b
      ? 1
      // a comes before b
      : -1
  );
};

const total = (clients) => {
  return clients.reduce((sum, client) => sum + client.balance, 0);
};

const info = (index) => {
  return clients.find((client) => client.index === index);
};

const search = (searchString) => {
  return clients.filter((client) =>
    client.name.toLowerCase().includes(searchString.toLowerCase())
  );
};