// Dog class to represent a dog with temperament and activity level
const availableDogs = []; // Array to store created dogs instances
const newUserDogs = []; // Array to store UserDog instances
const matchedDogsArray = [];
// let topDogs = [];
////////////////////////////////
//// CREATE DOG DATA //////////
///////////////////////////////
const dogNames = [
  'Torrey',
  'Moulder',
  'Lando',
  'Spot',
  'Teddy',
  'Bear',
  'Griffin',
  'Leia',
  'Jax',
  'Harry',
  'Bella',
  'Max',
  'Charlie',
  'Lucy',
  'Cooper',
  'Leo',
  'Lola',
  'Daisy',
  'Sadie',
  'Milo',
  'Ruby',
  'Oliver',
  'Luna',
  'Tucker',
  'Rosie',
  'Bailey',
  'Chloe',
  'Bear',
  'Molly',
  'Bentley',
  'Stella',
  'Coco',
  'Zeus',
  'Maddie',
  'Duke',
  'Penny',
  'Winston',
  'Zoe',
  'Riley',
  'Lily',
  'Rocky',
  'Lulu',
  'Teddy',
  'Mia',
  'Jackson',
  'Sophie',
  'Gus',
  'Jax',
  'Emma',
  'Oscar',
  'Chico',
  'Piper',
  'Dexter',
  'Gracie',
  'Moose',
  'Harley',
  'Lily',
  'Duke',
  'Koda',
  'Ziggy',
  'Hazel',
  'Rusty',
  'Mochi',
  'George',
  'Mia',
  'Louie',
  'Zara',
  'Rocco',
  'Nala',
  'Molly',
  'Cody',
  'Abby',
  'Leo',
  'Lola',
  'Charlie',
  'Roxy',
  'Hunter',
  'Izzy',
  'Rudy',
  'Sasha',
  'Marley',
  'Zeke',
  'Coco',
  'Apollo',
  'Belle',
  'Baxter',
  'Ella',
  'Winnie',
  'Simba',
  'Zara',
];

const dogTemps = [
  'energetic',
  'calm',
  'protective',
  'independent',
  'shy',
  'affectionate',
  'dominant',
  'outgoing',
];

const activityLevels = ['high', 'med', 'low'];

const favActivities = ['fetch', 'chase', 'swimming', 'hiking', 'snow sports'];

const dogSizes = ['giant', 'large', 'med', 'small'];

const dogAges = [1, 2, 3, 4, 5, 6];

const dogBreeds = [
  'Labrador Retriever',
  'German Shepherd',
  'Golden Retriever',
  'French Bulldog',
  'Bulldog',
  'Poodle',
  'Beagle',
  'Rottweiler',
  'Yorkshire Terrier',
  'Dachshund',
  'Boxer',
  'Shih Tzu',
  'Siberian Husky',
  'Great Dane',
  'Doberman Pinscher',
  'Cavalier King Charles Spaniel',
  'Australian Shepherd',
  'Shetland Sheepdog',
  'Border Collie',
];

const humanNames = [
  'Emily',
  'Liam',
  'Olivia',
  'Noah',
  'Emma',
  'Ava',
  'Sophia',
  'Jackson',
  'Isabella',
  'Lucas',
  'Aiden',
  'Mia',
  'Ethan',
  'Amelia',
  'Harper',
  'Benjamin',
  'Evelyn',
  'Oliver',
  'Abigail',
  'Ella',
  'Michael',
  'Grace',
  'James',
  'Charlotte',
  'David',
  'Scarlett',
  'Mason',
  'Aria',
  'Lily',
];

class UserDog {
  constructor({
    ownerName,
    ownerEmail,
    city,
    state,
    zip,
    dogName,
    breed1,
    breed2,
    dogAge,
    temperament,
    dogSize,
    activityLevel,
    special,
    fixed,
    favActivity,
    vax,
    maleDogs,
    femDogs,
    maleHumans,
    femHumans,
    service,
  }) {
    this.ownerName = ownerName || 'test';
    this.ownerEmail = ownerEmail || 'test@test.com';
    this.city = city || 'Seattle';
    this.state = state || 'WA';
    this.zip = zip || '98101';
    this.dogName = dogName || 'Torrey';
    this.breed1 = breed1;
    this.breed2 = breed2;
    this.dogAge = dogAge || 2;
    this.temperament = temperament || 'energetic';
    this.dogSize = dogSize || 'med';
    this.activityLevel = activityLevel || 'high';
    this.special = special;
    this.fixed = fixed || true;
    this.favActivity = favActivity || 'chase';
    this.vax = vax || true;
    this.maleDogs = maleDogs || true;
    this.femDogs = femDogs || true;
    this.maleHumans = maleHumans || false;
    this.femHumans = femHumans || false;
    this.service = service;
  }
}

// EXISTING DOGS
class AvailableDogs {
  constructor(
    dogName,
    temperament,
    activityLevel,
    favActivity,
    dogSize,
    dogAge,
    breed1,
    ownerName,
    ownerEmail,
    fixed,
    femDogs,
    maleDogs,
    femHumans,
    maleHumans,
    vax,
    special = false,
    service = false,
    breed2 = null,
    city = 'Seattle',
    state = 'WA',
    zip = 98101,
    ageDiff = 0,
    matchScore = 0
  ) {
    this.dogName = dogName;
    this.temperament = temperament;
    this.activityLevel = activityLevel;
    this.ownerName = ownerName;
    this.ownerEmail = ownerEmail;
    this.breed1 = breed1;
    this.breed2 = breed2;
    this.dogAge = dogAge;
    this.dogSize = dogSize;
    this.special = special;
    this.fixed = fixed;
    this.favActivity = favActivity;
    this.vax = vax;
    this.service = service;
    this.femDogs = femDogs;
    this.maleDogs = maleDogs;
    this.femHumans = femHumans;
    this.maleHumans = maleHumans;
    this.city = city;
    this.state = state;
    this.zip = zip;
    this.ageDiff = ageDiff;
    this.matchScore = matchScore;
  }

  // Match Score Calculation
  calcMatchScore(userDog) {
    // console.log('Matching', this.dogName, 'with', userDog.dogName);
    if (this.city === userDog.city || this.zip === userDog.zip) {
      if (this.temperament === userDog.temperament) {
        this.matchScore += 5;
      }
      if (this.activityLevel === userDog.activityLevel) {
        this.matchScore += 4;
      }
      const ageDiff = difference(this.dogAge, userDog.dogAge);
      this.ageDiff = ageDiff;
      if (ageDiff <= 3) {
        this.matchScore += 2;
      }
      if (this.dogSize === userDog.dogSize) {
        this.matchScore += 3;
      }
      if (this.fixed === userDog.fixed) {
        this.matchScore += 1;
      }
      if (
        this.femDogs === userDog.femDogs ||
        this.maleDogs === userDog.maleDogs
      ) {
        this.matchScore += 2;
      }
      if (
        this.femHumans === userDog.femHumans ||
        this.maleHumans === userDog.maleHumans
      ) {
        this.matchScore += 2;
      }
      if (this.matchScore > 0) {
        // Push the dogs with a match score over 15 to a specific array
        matchedDogsArray.push({
          [this.dogName]: this,

          matchScore: this.matchScore,
        });
      }
      // console.log('Matched Dogs Array:', matchedDogsArray);

      return this.matchScore;
    } else {
      console.log('no match available in your area');
    }
  }
}
//////HELPER FUNCTIONS////////

// randomize array
// Fisher Yates function via chatGPT
function shuffleArray(array) {
  const shuffledArray = [...array]; // Create a copy of the array to avoid modifying the original
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}

function difference(a, b) {
  return Math.abs(a - b);
}

const randomBoolean = () => Math.random() >= 0.5; // 50% probability of getting true

// EXISTING DOG DATA CREATION //////

function initDogs() {
  let shuffledDogNames = shuffleArray(dogNames);
  let shuffledDogTemps = shuffleArray(dogTemps);
  let shuffledActivityLevels = shuffleArray(activityLevels);
  let shuffledFavActivities = shuffleArray(favActivities);
  let shuffledDogSizes = shuffleArray(dogSizes);
  let shuffledDogAges = shuffleArray(dogAges);
  let shuffledBreeds = shuffleArray(dogBreeds);
  let shuffledHumans = shuffleArray(humanNames);
  // let randomFixed = randomBoolean();
  // let randomFemDogs = randomBoolean();
  // let randomMaleDogs = randomBoolean();
  // let randomFemHumans = randomBoolean();
  // let randomMaleHumans = randomBoolean();
  // let randomVax = randomBoolean();

  // Calculate the maximum length of arrays
  const maxLength = Math.max(
    shuffledDogNames.length,
    shuffledDogTemps.length,
    shuffledActivityLevels.length,
    shuffledFavActivities.length,
    shuffledDogSizes.length,
    shuffledDogAges.length,
    shuffledBreeds.length,
    shuffledHumans.length
  );

  /* modulo operator (%) is used to cycle through the arrays. This way, even if one array runs out of elements, it will start again from the beginning of that array */

  for (let i = 0; i < maxLength; i++) {
    const dogInstance = new AvailableDogs(
      shuffledDogNames[i % shuffledDogNames.length],
      shuffledDogTemps[i % shuffledDogTemps.length],
      shuffledActivityLevels[i % shuffledActivityLevels.length],
      shuffledFavActivities[i % shuffledFavActivities.length],
      shuffledDogSizes[i % shuffledDogSizes.length],
      shuffledDogAges[i % shuffledDogAges.length],
      shuffledBreeds[i % shuffledBreeds.length],
      shuffledHumans[i % shuffledHumans.length],
      `${shuffledHumans[i % shuffledHumans.length]}@gmail.com`,
      randomBoolean(), // fixed
      randomBoolean(), // femDogs
      randomBoolean(), // maleDogs
      randomBoolean(), // femHumans
      randomBoolean(), // maleHumans
      randomBoolean() // vax
    );
    availableDogs.push(dogInstance);
  }
}

initDogs();

/// USER INPUT HANDLING //////////////

let form = document.querySelector('form');
let formData = {};
let tableRendered = false;

form?.addEventListener('submit', function (event) {
  event.preventDefault();

  // Collect data from the form
  formData = {
    ownerName: document.getElementById('ownerName').value,
    ownerEmail: document.getElementById('ownerEmail').value,
    city: document.getElementById('city').value,
    state: document.getElementById('state').value,
    zip: document.getElementById('zip').value,
    dogName: document.getElementById('dogName').value,
    breed1: document.getElementById('breed1').value,
    breed2: document.getElementById('breed2').value,
    dogAge: document.getElementById('dogAge').value,
    temperament: document.getElementById('temperament').value,
    dogSize: document.getElementById('dogSize').value,
    activityLevel: document.getElementById('activityLevel').value,
    special: document.getElementById('special').value,
    fixed: document.getElementById('fixed').querySelector('input').checked,
    favActivity: document.getElementById('favActivity').value,
    vax: document.getElementById('vax').querySelector('input').checked,
    maleDogs: document.getElementById('maleDogs').querySelector('input')
      .checked,
    femDogs: document.getElementById('femDogs').querySelector('input').checked,
    maleHumans: document.getElementById('maleHumans').querySelector('input')
      .checked,
    femHumans: document.getElementById('femHumans').querySelector('input')
      .checked,
    service: document.getElementById('service').querySelector('input').checked,
  };
  // console.log('Form Data:', formData);
  const newDog = new UserDog(formData);
  newUserDogs.push(newDog);

  // Calculate match scores for each AvailableDogs instance
  for (const dog of availableDogs) {
    dog.calcMatchScore(newDog);
  }

  // Render matches after calculating match scores
  topDogs = renderMatches();
  saveTopDogs();
  
    // Check if the table has not been rendered yet
  if(!tableRendered) {
    renderOnScreen(topDogs); // Render the table only if it hasn't been rendered before
    tableRendered = true; // Set the flag to true after rendering the table
  }
  
});

function renderOnScreen(topDogsData) {
  console.log(topDogsData);
  let bothDogsArray = [];
  for (let dogObj of topDogsData) {
    let dogName = Object.keys(dogObj)[0];
    bothDogsArray.push(dogObj[dogName].ownerName); // index 0
    bothDogsArray.push(dogObj[dogName].dogName); // 1
    bothDogsArray.push(dogObj[dogName].breed1); // 2
    bothDogsArray.push(dogObj[dogName].dogAge); // 3
    bothDogsArray.push(dogObj[dogName].dogSize); // 4
    bothDogsArray.push(dogObj[dogName].activityLevel); // 5
    bothDogsArray.push(dogObj[dogName].favActivity); // 6
    bothDogsArray.push(dogObj[dogName].ownerEmail); // 7
    bothDogsArray.push(dogObj[dogName].state);
    bothDogsArray.push(dogObj[dogName].zip);
    bothDogsArray.push(dogObj[dogName].breed2);
    bothDogsArray.push(dogObj[dogName].temperament);
    bothDogsArray.push(dogObj[dogName].special);
    bothDogsArray.push(dogObj[dogName].fixed);
    bothDogsArray.push(dogObj[dogName].vax);
    bothDogsArray.push(dogObj[dogName].maleDogs);
    bothDogsArray.push(dogObj[dogName].femDogs);
    bothDogsArray.push(dogObj[dogName].maleHumans);
    bothDogsArray.push(dogObj[dogName].femHumans);
    bothDogsArray.push(dogObj[dogName].service);
  }

  let length = bothDogsArray.length;
  let midIndex = length / 2;
  let dog1Array = bothDogsArray.slice(0, midIndex);
  let dog2Array = bothDogsArray.slice(midIndex, length - 1);

  ////// RENDER TABLE /////////////////////////////////

  // add tbody element
  const tableBodyElem = document.createElement('tbody');
  tableElem.appendChild(tableBodyElem);

  // add data row
  const dataRow1 = document.createElement('tr');
  tableBodyElem.appendChild(dataRow1);

  const matchNumberCell = document.createElement('td');
  dataRow1.appendChild(matchNumberCell);
  matchNumberCell.textContent = 'Match 1';

  // MATCH 1 DATA

  const ownerNameCell1 = document.createElement('td');
  dataRow1.appendChild(ownerNameCell1);
  ownerNameCell1.textContent = dog1Array[0]; // owner name

  const dog1NameCell = document.createElement('td');
  dataRow1.appendChild(dog1NameCell);
  dog1NameCell.textContent = dog1Array[1]; // dog name

  const dog1BreedCell = document.createElement('td');
  dataRow1.appendChild(dog1BreedCell);
  dog1BreedCell.textContent = dog1Array[2]; // dog 1 breed

  const dogAgeCell = document.createElement('td');
  dataRow1.appendChild(dogAgeCell);
  dogAgeCell.textContent = dog1Array[3]; // dog age

  const breedSizeCell = document.createElement('td');
  dataRow1.appendChild(breedSizeCell);
  breedSizeCell.textContent = dog1Array[4]; // breed size

  const activityLevelCell = document.createElement('td');
  dataRow1.appendChild(activityLevelCell);
  activityLevelCell.textContent = dog1Array[5]; // activity level
  
  const favoriteActvityCell = document.createElement('td');
  dataRow1.appendChild(favoriteActvityCell);
  favoriteActvityCell.textContent = dog1Array[6]; // favorite activity

  const ownerContactCell = document.createElement('td');
  dataRow1.appendChild(ownerContactCell);
  ownerContactCell.textContent = dog1Array[7]; // owner contact

  // MATCH 2

  // add data row
  const dataRow2 = document.createElement('tr');
  tableBodyElem.appendChild(dataRow2);

  const match2NumberCell = document.createElement('td');
  dataRow2.appendChild(match2NumberCell);
  match2NumberCell.textContent = 'Match 2';

  const ownerNameCell2 = document.createElement('td');
  dataRow2.appendChild(ownerNameCell2);
  ownerNameCell2.textContent = dog2Array[0]; // owner 2 name

  const dog2NameCell = document.createElement('td');
  dataRow2.appendChild(dog2NameCell);
  dog2NameCell.textContent = dog2Array[1]; // dog 2 name

  const dog2BreedCell = document.createElement('td');
  dataRow2.appendChild(dog2BreedCell);
  dog2BreedCell.textContent = dog2Array[2]; // dog 2 breed

  const dog2AgeCell = document.createElement('td');
  dataRow2.appendChild(dog2AgeCell);
  dog2AgeCell.textContent = dog2Array[3]; // dog 2 age

  const dog2SizeCell = document.createElement('td');
  dataRow2.appendChild(dog2SizeCell);
  dog2SizeCell.textContent = dog2Array[4]; // dog 2 size

  const dog2ActivityLevelCell = document.createElement('td');
  dataRow2.appendChild(dog2ActivityLevelCell);
  dog2ActivityLevelCell.textContent = dog2Array[5]; // dog 2 activity level

  const dog2FavActivityCell = document.createElement('td');
  dataRow2.appendChild(dog2FavActivityCell);
  dog2FavActivityCell.textContent = dog2Array[6]; // dog 2 fav activity

  const dog2OwnerEmailCell = document.createElement('td');
  dataRow2.appendChild(dog2OwnerEmailCell);
  dog2OwnerEmailCell.textContent = dog2Array[7]; // dog 2 owner contact (email)

  console.log(dog1Array);
  console.log(dog1Array[0]); // access each item in the array that you want to render by using bracket notation. position 0 is ownerName
  console.log(dog2Array);
}

// global reference to container referenced by DOM
const articleElem = document.createElement('article');
const dogContainerElem = document.getElementById('dogOne');
const tableElem = document.createElement('table'); // create table at container
dogContainerElem.appendChild(tableElem);

// add article element and append to container IF the location container "dogOneContainerElement" exists in the HTML
if (dogContainerElem) {
  dogContainerElem.appendChild(articleElem);
  articleElem.classList.add('profile-table');
  // initiate the table and append to the article
  articleElem.appendChild(tableElem);
}

function renderHeader() {
  // add table head
  const tableHeadElem = document.createElement('thead');
  tableElem.appendChild(tableHeadElem);

  // add header Row
  const headerRow = document.createElement('tr');
  tableHeadElem.appendChild(headerRow);

  const matchHeadingCell = document.createElement('th');
  headerRow.appendChild(matchHeadingCell);
  matchHeadingCell.textContent = 'Match #';

  // add header cells
  const ownerNameHeaderCell = document.createElement('th');
  headerRow.appendChild(ownerNameHeaderCell);
  ownerNameHeaderCell.textContent = 'Owner Name';

  const dogNameHeaderCell = document.createElement('th');
  headerRow.appendChild(dogNameHeaderCell);
  dogNameHeaderCell.textContent = 'Dog Name';

  const dogBreedHeaderCell = document.createElement('th');
  headerRow.appendChild(dogBreedHeaderCell);
  dogBreedHeaderCell.textContent = 'Dog Breed';

  const dogAgeHeaderCell = document.createElement('th');
  headerRow.appendChild(dogAgeHeaderCell);
  dogAgeHeaderCell.textContent = 'Dog Age';

  const dogSizeHeaderCell = document.createElement('th');
  headerRow.appendChild(dogSizeHeaderCell);
  dogSizeHeaderCell.textContent = 'Breed Size';

  const activityLevelHeaderCell = document.createElement('th');
  headerRow.appendChild(activityLevelHeaderCell);
  activityLevelHeaderCell.textContent = 'Activity Level';

  const favActivityHeaderCell = document.createElement('th');
  headerRow.appendChild(favActivityHeaderCell);
  favActivityHeaderCell.textContent = 'Favorite Activity';

  const ownerContactHeaderCell = document.createElement('th');
  headerRow.appendChild(ownerContactHeaderCell);
  ownerContactHeaderCell.textContent = 'Owner Contact';
}

if (dogContainerElem) {
  renderHeader();
}

//////////////////////////////////////////////////////
///////////// MATCH ALGORITHM ////////////////////////
////////////////////////////////////////////////////

function renderMatches() {
  // Sort the availableDogs array by matchScore in descending order
  matchedDogsArray.sort((a, b) => b.matchScore - a.matchScore);

  // Take the top 2 dogs
  const topDogs = matchedDogsArray.slice(0, 2);

  // console.log('Top Dogs with the highest matchScore:', topDogs);
  // console.log(availableDogs);

  // Log matchedDogsArray
  console.log(topDogs);
  return topDogs;
}
renderMatches();

//////////////////////////////////////////////////////
///////////// LOCAL STORAGE ////////////////////////
////////////////////////////////////////////////////

const userStorageKey = 'userKey';
const matchKey = 'matchKey';

// function saveNewUsers() {
//   const userStorageText = JSON.stringify(newUserDogs); // convert array to string
//   localStorage.setItem(userStorageKey, userStorageText); // set value
// }

function saveTopDogs() {
  // const topDogs = renderMatches();
  const matchStorageText = JSON.stringify(topDogs); // convert array to string
  localStorage.setItem(matchKey, matchStorageText); // set value
}

// function parseStorage(storageText) {
//   // restore from storage
//   const storedUserObjects = JSON.parse(storageText);

//   console.log(storedUserObjects);
//   for (let userObject of storedUserObjects) {
//     let dogName = Object.keys(userObject)[0];
//     console.log(userObject[dogName].ownerName);
//     const currentUser = new UserDog(
//       userObject[dogName].ownerName,
//       userObject[dogName].ownerEmail,
//       userObject[dogName].city
//     );
//     matchedDogsArray.push(currentUser);
//   }
//   console.log("STORED MATCHED DOGS ARRAY:", matchedDogsArray);

// }

// function loadTopDogs() {
//   const matchStorageText = localStorage.getItem(matchKey);
//   console.log('MATCH STORAGE TEXT: ', matchStorageText);
//   if (matchStorageText) {
//     parseStorage(matchStorageText);
//   } else {
//     console.log('no stored match data');
//   }
// }

// console.log(topDogs);

// function loadUsers() {
//   const userStorageText = localStorage.getItem(userStorageKey); // access stored user data stored in the saveNewUsers() function
//   console.log(userStorageText);
//   if (userStorageText) {
//     parseStorage(userStorageText); // if there is stored user data, access it and parse it, if not init
//   } else {
//     console.log('no stored user data');
//   }
// }

// loadTopDogs();
// loadUsers();

// STATIC user dog - to be updated with object from Form
// const userDog = new UserDog(
//   'UserDog',
//   'friendly',
//   'high',
//   'fetch',
//   'medium',
//   7,
//   'Australian Shepherd',
//   true
// );

// console.log(`user dog: ${JSON.stringify(userDog, null, 2)}`);
