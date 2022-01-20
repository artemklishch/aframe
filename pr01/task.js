const t = [
  { id: 1, name: "a" },
  { id: 2, name: "b" },
  { id: 1, name: "a" },
];

function getUniqItems(arr) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    const isThereElem = newArray.find((el) => el.id === arr[i].id);
    if (!isThereElem) {
      newArray.push(arr[i]);
    }
  }
  return newArray;
}
