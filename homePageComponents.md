# DATA

## DATA LAYER

- currentInterestUrl

- searchResult ( from rawg API ) => games[], next, previous

- myLibrary[] ( from backend API )

- existingGenres[]

## DATA MODIFICATIONS

- addGame ( to library[] )

- removeGame ( from library[] )

- Change currentInterestUrl ( both search & pagination )

- update games[]

- update existingGenres[]

# COMPONENTS

## HEADER - All pages

## HERO SECTION

## BROWSE CARD CONTAINER

- Receives games[] from Context
- Receives libraryGames[] from Context

### GAME CARD (home style)

- Receives the requestThisCardDetail function

### PAGINATION BUTTONS

### ADD / REMOVE TO LIBRARY BUTTON

- Receives the toggleGameInLibrary function

## CONTEXT PROVIDER

- Contains currentInterestUrl status variable

- Contains updateCurrentInterestUrl function
- Sends updateCurrentInterestUrl function to SortByGenre

- Sends updateCurrentInterestUrl function to Pagination Buttons
- Sends searchResult to Pagination Buttons

- Contains searchResult function
- Sends games[] to CardContainer

- Contains requestCurrentGenres function
- Sends currentGenres[] to SortByGenre

- Contains the toggleGameInLibrary function
- Sends the toggleGameInLibrary function to Game Card

- Contains the getLibraryGames function
- Sends libraryGames[] to CardContainer

- Contains focusedGame
- Contains the requestThisGameDetail function
- Sends the requestThisGameDetail function to Card
