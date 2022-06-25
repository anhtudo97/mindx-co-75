(map) => [
  () => {},
  () => {},
  () => {},
  () => {},
  () => {},
  () => {},
  () => {},
  () => {},
];
const arr9 = [
  {
    name: "tuanh",
  },
  { name: "anhtu" },
];

const wrapper = document.querySelector("#wrapper");

let str = "";

for (let index = 0; index < arr9.length; index++) {
  const element = arr9[index];

  str = str.concat(element.name);
}

wrapper.innerHTML = str;
