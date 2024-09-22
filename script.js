// DOM selectors
const filterButton = document.getElementById('filterButton')
const filterPanel = document.getElementById('filterPanel')
const sortButton = document.getElementById('sortButton')
const sortPanel = document.getElementById('sortPanel')
const closeFilterPanel = document.getElementById('closeFilterPanel')
const closeSortPanel = document.getElementById('closeSortPanel')
const applyFilterButton = document.getElementById('applyFilters')
const applySortButton = document.getElementById('applySort')

const genreSelect = document.getElementById('genreSelect') //do we need this ?

// Function to toggle panels
const togglePanel = (button, panel) => {
  panel.classList.toggle('show')
  button.classList.toggle('active')
}

// Event listeners for the Filter and Sort buttons
filterButton.addEventListener('click', () => togglePanel(filterButton, filterPanel))
sortButton.addEventListener('click', () => togglePanel(sortButton, sortPanel))

// Function to close panels
const closePanel = (panel, button) => {
  panel.classList.remove('show')
  button.classList.remove('active')
}

// Function to close panels with a delay 
const closePanelWithDelay = (panel, button, delay) => {
  setTimeout(() => {
    closePanel(panel, button)
  }, delay)
}

// Event listeners for the Close buttons
closeFilterPanel.addEventListener('click', () => {
  closePanel(filterPanel, filterButton)
})

closeSortPanel.addEventListener('click', () => {
  closePanel(sortPanel, sortButton)
})

// Event listener for Apply button on Filter panel
applyFilterButton.addEventListener('click', () => {
  closePanelWithDelay(filterPanel, filterButton, 500)
})

// Event listener for Apply button on Sort panel
applySortButton.addEventListener('click', () => {
  closePanelWithDelay(sortPanel, sortButton, 700)
})

// Album array
const albums = [
  {
    title: 'A Night at the Opera',
    artist: 'Queen',
    year: 1975,
    genre: 'Rock',
    length: 43,
    description:
      `Queen's fourth studio album, known for its eclectic mix of musical styles, including the iconic "Bohemian Rhapsody," and is often hailed as one of the greatest albums of all time.`,
    image: './album-images/queen-opera.jpg'
  },
  {
    title: 'Hybrid theory',
    artist: 'Linkin Park',
    year: 2000,
    genre: 'Rock',
    length: 38,
    description:
      `Linkin Park's debut album, blending nu-metal and rap-rock elements, and featuring hits like "In the End" and "Crawling," which propelled the band to international fame.`,
    image: './album-images/Linkin_Park_Hybrid_Theory_Album_Cover.jpg'
  },
  {
    title: 'Minutes to Midnight',
    artist: 'Linkin Park',
    year: 2007,
    genre: 'Rock',
    length: 43,
    description:
      `Minutes to Midnight, released in 2007, marks a shift in Linkin Park's sound from nu-metal to alternative rock. Featuring hits like "What I've Done," the album explores themes of personal and political turmoil.`,
    image: './album-images/Minutes_to_Midnight_cover.jpg'
  },
  {
    title: 'Queen II',
    artist: 'Queen',
    year: 1974,
    genre: 'Rock',
    length: 41,
    description: `Queen II, released in 1974, showcases Queen's early blend of hard rock and progressive elements. With its fantasy themes and complex arrangements, the album features standout tracks like "Seven Seas of Rhye" and "The March of the Black Queen."`,
    image: './album-images/queen-queenII.jpg'
  },
  {
    title: 'Songs in the Key of Life ',
    artist: 'Stevie Wonder',
    year: 1976,
    genre: 'Soul',
    length: 105,
    description: `Songs in the Key of Life, released in 1976, is one of Stevie Wonder's most celebrated albums. Blending soul, jazz, and funk, it features timeless tracks like "Isn't She Lovely" and "Sir Duke," showcasing Wonder's musical genius and social commentary.`,
    image: './album-images/stevie-wonder-sitkol.jpg'
  },
  {
    title: 'Innuendo',
    artist: 'Queen',
    year: 1991,
    genre: 'Pop',
    length: 54,
    description: `Innuendo, released in 1991, is Queen's final album with Freddie Mercury. Known for its eclectic sound and emotional depth, it features powerful tracks like the title song "Innuendo" and the poignant "The Show Must Go On."`,
    image: './album-images/queen-innuendo.jpg'
  },
  {
    title: 'Ten',
    artist: 'Pearl Jam',
    year: 1991,
    genre: 'Rock',
    length: 53,
    description: `Ten, released in 1991, is Pearl Jam's debut album and a cornerstone of the grunge movement. Featuring iconic tracks like "Alive" and "Jeremy," the album explores themes of personal struggle and resilience with raw intensity.`,
    image: './album-images/PearlJam-Ten2.jpg'
  },
  {
    title: 'Vitalogy',
    artist: 'Pearl Jam',
    year: 1994,
    genre: 'Rock',
    length: 55,
    description: `Vitalogy, released in 1994, is Pearl Jam's third studio album, blending punk, rock, and experimental sounds. Known for its raw energy and introspective lyrics, the album features standout tracks like "Spin the Black Circle" and "Better Man."`,
    image: './album-images/PearlJamVitalogy.jpg'
  },
  {
    title: 'Jurassic Park: Original Motion Picture Soundtrack',
    artist: 'John Williams',
    year: 1993,
    genre: 'Film score',
    length: 73,
    description: `Jurassic Park: Original Motion Picture Soundtrack, composed by John Williams and released in 1993, is a sweeping orchestral score that captures the awe and tension of the film. Iconic themes like the majestic "Theme from Jurassic Park" perfectly embody the sense of wonder and danger in the prehistoric adventure.`,
    image: './album-images/Jurassicpark-1-.jpg'
  },
  {
    title: 'Home Alone: Original Motion Picture Soundtrack',
    artist: 'John Williams',
    year: 1990,
    genre: 'Film score',
    length: 57,
    description: `Home Alone: Original Motion Picture Soundtrack, composed by John Williams and released in 1990, combines playful and heartwarming themes with a sense of holiday magic. The iconic "Somewhere in My Memory" beautifully captures the spirit of the film's blend of comedy and Christmas charm.`,
    image: './album-images/Home_Alone_(Original_Motion_Picture_Soundtrack).jpg'
  },
  {
    title: `Harry Potter and the Philosopher's Stone (Original Motion Picture Soundtrack)`,
    artist: 'John Williams',
    year: 2001,
    genre: 'Film score',
    length: 74,
    description: `Harry Potter and the Philosopher's Stone: Original Motion Picture Soundtrack, composed by John Williams and released in 2001, introduces the magical world of Harry Potter with unforgettable themes. The iconic "Hedwig's Theme" perfectly captures the wonder and enchantment that defines the series.`,
    image: './album-images/HarrypotterPSsoundtrack.jpg'
  },
  {
    title: 'E.T. the Extra-Terrestrial: Music from the Original Soundtrack',
    artist: 'John Williams',
    year: 1982,
    genre: 'Film score',
    length: 40,
    description: `E.T. the Extra-Terrestrial: Music from the Original Soundtrack, composed by John Williams and released in 1982, is a heartwarming and emotional score that perfectly complements the film's themes of friendship and adventure. The iconic "Flying Theme" evokes the magic and wonder of E.T.'s journey.`,
    image: './album-images/E.T._the_Extra-Terrestrial_(soundtrack).jpg'
  },
  {
    title: 'Dangerously In Love',
    artist: 'Beyoncé',
    year: 2003,
    genre: 'Pop',
    length: 78,
    description: `Beyoncé's debut solo album features a mix of R&B, soul, and hip hop, and includes hits like "Crazy in Love" and "Baby Boy."`,
    image: './album-images/Dangerously_In_Love_Album(2003).png'
  },
  {
    title: 'Cowboy Carter',
    artist: 'Beyoncé',
    year: 2024,
    genre: 'Country',
    length: 78,
    description: `Beyoncé's eighth studio album blends country, R&B, blues, and more, reimagining Americana through the lens of Black pioneers.`,
    image: './album-images/Beyoncé_-_Cowboy_Carter.png'
  },
  {
    title: 'Lemonade',
    artist: 'Beyoncé',
    year: 2016,
    genre: 'Soul',
    length: 46,
    description: `Beyoncé's sixth studio album is a conceptual project exploring themes of infidelity, empowerment, and healing, featuring a diverse mix of genres.`,
    image: './album-images/Beyonce_-_Lemonade_(Official_Album_Cover).png'
  },
  {
    title: 'Taylor Swift',
    artist: 'Taylor Swift',
    year: 2005,
    genre: 'Country',
    length: 40,
    description: 'Taylor Swift is the debut studio album by the American singer-songwriter Taylor Swift',
    image: 'album-images/Taylor_Swift_-_Taylor_Swift.png'
  },
  {
    title: 'Lover',
    artist: 'Taylor Swift',
    year: 2019,
    genre: 'Pop',
    length: 62,
    description: 'Lover is the seventh studio album by the American singer-songwriter Taylor Swift.',
    image: 'album-images/Taylor_Swift_-_Lover.png'
  },
  {
    title: 'Encore',
    artist: 'Eminem',
    year: 2004,
    genre: 'Hip hop',
    length: 77,
    description: 'Encore is the fifth studio album by American rapper Eminem.',
    image: 'album-images/Encore_(Eminem_album)_coverart.jpg'
  },
  {
    title: 'Corpse Bride',
    artist: 'Danny Elfman',
    year: 2005,
    genre: 'Film score',
    length: 60,
    description: 'Music from the film Corps Bride composed by Danny Elfman',
    image: 'album-images/CorpseBride.jpg'
  },
  {
    title: 'Led Zeppelin IV',
    artist: 'Led Zeppelin',
    year: 1971,
    genre: 'Rock',
    length: 43,
    description: 'Untitled fourth studio album by the English rock band Led Zeppelin, commonly known as Led Zeppelin IV',
    image: 'album-images/Led_Zeppelin_-_Led_Zeppelin_IV.jpg'
  }
]
const albumContainer = document.getElementById('album-container')

// Function to display album information into cards
const getAlbums = (albumArray) => {
  albumContainer.innerHTML = ''
  albumArray.forEach(album => {
    albumContainer.innerHTML += `
    <div class="album-card">
    <div class="album-art">
        <img src="${album.image}" alt="${album.title} album art"/>
        </div>
        <h2>${album.title}</h2>
        <p>Artist: ${album.artist}</p>
        <p class="more-info">Release Date: ${album.year}</p>
        <p class="more-info">Genre: ${album.genre}</p>
        <p class="more-info">Length: ${album.length} minutes</p> 
        <p class="more-info">${album.description}</p>
    </div>`
  })
}

// Filter Genre & Artist
const filterGenreDropdown = document.getElementById('genreSelect')
const filterArtistDropdown = document.getElementById('artistSelect')
const applyFiltersButton = document.getElementById('applyFilters')

const filterAlbums = () => {
  const genre = filterGenreDropdown.value
  const artist = filterArtistDropdown.value

  let filteredAlbums = albums;

  if (genre !== 'all') {
    filteredAlbums = filteredAlbums.filter(album => album.genre === genre)
  }

  if (artist !== 'all') {
    filteredAlbums = filteredAlbums.filter(album => album.artist === artist)
  }

  getAlbums(filteredAlbums)
}

// Event listener for Apply button in Filter panel
applyFiltersButton.addEventListener('click', filterAlbums)

// Random button
const randomButton = document.getElementById('randomButton')

const getRandomAlbum = () => {
  const randomIndex = Math.floor(Math.random() * albums.length)

  const randomAlbum = albums[randomIndex]
  albumContainer.innerHTML = ''
  albumContainer.innerHTML = `
    <div class="album-card">
    <div class="album-art">
        <img src="${randomAlbum.image}" alt="${randomAlbum.title} album art"/>
        </div>
        <h2>${randomAlbum.title}</h2>
        <p>Artist: ${randomAlbum.artist}</p>
        <p>Release Date: ${randomAlbum.year}</p>
        <p>Genre: ${randomAlbum.genre}</p>
        <p>Length: ${randomAlbum.length} minutes</p> 
        <p>${randomAlbum.description}</p>
    </div>`

  // Add the clicked class
  randomButton.classList.add('clicked')

  // Remove the clicked class after a short delay
  setTimeout(() => {
    randomButton.classList.remove('clicked')
  }, 200)
}

// Event listener to trigger randomAlbum
randomButton.addEventListener('click', getRandomAlbum)

// Sort and display albums
const sortAlbumDropdown = document.getElementById('sortSelect')

const sortAlbums = () => {
  const sortOption = sortAlbumDropdown.value
  let sortedAlbums

  if (sortOption === 'alpha-title') {
    sortedAlbums = albums.sort((a, b) => a.title.localeCompare(b.title))
  }
  else if (sortOption === 'reverse-title') {
    sortedAlbums = albums.sort((a, b) => b.title.localeCompare(a.title))
  }
  else if (sortOption === 'alpha-artist') {
    sortedAlbums = albums.sort((a, b) => a.artist.localeCompare(b.artist))
  }
  else if (sortOption === 'reverse-artist') {
    sortedAlbums = albums.sort((a, b) => b.artist.localeCompare(a.artist))
  }
  else if (sortOption === 'newest-year') {
    sortedAlbums = albums.sort((a, b) => b.year - a.year)
  }
  else if (sortOption === 'oldest-year') {
    sortedAlbums = albums.sort((a, b) => a.year - b.year)
  }
  else if (sortOption === 'shortest-length') {
    sortedAlbums = albums.sort((a, b) => a.length - b.length)
  }
  else if (sortOption === 'longest-length') {
    sortedAlbums = albums.sort((a, b) => b.length - a.length)
  }
  else {
    sortedAlbums = albums.sort((a, b) => a.title.localeCompare(b.title))
  }
  getAlbums(sortedAlbums)
}

sortAlbumDropdown.addEventListener('change', sortAlbums)

sortAlbums()
