// Generator functions

function* fetchApisGenerator() {
  yield fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((json) => console.log(json));

  yield fetch("https://randomuser.me/api/?gender=female")
    .then((response) => response.json())
    .then((json) => console.log(json));

  yield fetch("https://randomuser.me/api/")
    .then((response) => response.json())
    .then((json) => console.log(json));
}

const resultsfromApisGenerator = fetchApisGenerator();

console.log(resultsfromApisGenerator.next());
console.log(resultsfromApisGenerator.next());
console.log(resultsfromApisGenerator.next()); /*  */
console.log(resultsfromApisGenerator.next());

// async generator functions


async function* fetchApisAsyncGenerator() {
  const fetchUserOne = await fetch(
    "https://jsonplaceholder.typicode.com/users"
  );
  yield await fetchUserOne.json();

  const fetchUserTwo = await fetch("https://randomuser.me/api/?gender=female");
  yield await fetchUserTwo.json();

  const fetchUserThree = await fetch("https://randomuser.me/api/");
  yield await fetchUserThree.json();
}

const resultsfromApisAsyncGenerator = fetchApisAsyncGenerator();

resultsfromApisAsyncGenerator.next().then(({ value, done }) => {
  console.log("values:", value);
});
