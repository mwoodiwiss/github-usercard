/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
// axios.get('https://api.github.com/users/bigknell')
// .then( response => {
//   document.querySelector('.cards').appendChild(userCard(response.data))
// })
// .catch( error => {
//   console.log( error )
// })
/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = ['tetondan', 'dustinmyers', 'justsml', 'luishrd', 'bigknell', 'mwoodiwiss'];


followersArray.forEach((name) => {
  axios.get(`https://api.github.com/users/${name}`)
  .then( response => {
      console.log(document.querySelector('.cards').appendChild(userCard(response.data)))
    })
    .catch( error => {
      console.log( error )
}) 
})



function userCard(array) {
  const container = document.createElement('div')
  container.classList.add('card')

  const image = document.createElement('img')
  image.src = array.avatar_url
  container.appendChild(image)

  const cardInfo = document.createElement('div')
  cardInfo.classList.add('card-info')
  container.appendChild(cardInfo)

  const title = document.createElement('h3')
  title.classList.add('name')
  title.textContent = array.name
  cardInfo.appendChild(title)

  const uName = document.createElement('p')
  uName.classList.add('username')
  uName.textContent = array.login
  cardInfo.appendChild(uName)

  const location = document.createElement('p')
  location.textContent = `Location: ${array.location}`
  cardInfo.appendChild(location)

  const profile = document.createElement('p')
  profile.textContent = 'Profile: '
  cardInfo.appendChild(profile)

  const link = document.createElement('a')
  link.href = array.html_url
  link.textContent = array.html_url
  profile.appendChild(link)

  const followers = document.createElement('p')
  followers.textContent = `Followers: ${array.followers}`
  cardInfo.appendChild(followers)

  const following = document.createElement('p')
  following.textContent = `Following: ${array.following}`
  cardInfo.appendChild(following)

  const bio = document.createElement('p')
  bio.textContent = `Bio: ${array.bio}`
  cardInfo.appendChild(bio)

  cardInfo.addEventListener('click', () => {event.target.style.backgroundColor = 'blue';});

  return container
}
/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
