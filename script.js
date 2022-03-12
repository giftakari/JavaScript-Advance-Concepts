
async function* fetchApisGenerator() {
  
    const fetchUserOne = await fetch('https://jsonplaceholder.typicode.com/users');
    yield await fetchUserOne.json();
    
    const fetchUserTwo = await fetch('https://randomuser.me/api/?gender=female')
    yield await fetchUserTwo.json()
    
    const fetchUserThree = await fetch('https://randomuser.me/api/')
     yield await fetchUserThree.json()
  }
  
  const resultsfromApisGenerator = fetchApisGenerator();
  
  resultsfromApisGenerator.next().then(({ value, done }) => {
    console.log("values:", value);
  }).then((value, done) => console.log("done again", value))