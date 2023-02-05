# COMPONENTS

## HEADER - All pages

## LIBRARY CARD CONTAINER

- Receives the getLibraryGames function
- Receibes the requestThisGameDetail function

### LIBRARY CARD

### EDIT GAME BUTTON

- Receives the EditThisGame function from Context

#### DELETE GAME

- Receives the toogleGameInLibrary function

## CONTEXT PROVIDER

- Contains the toggleGameInLibrary function
- Sends the toggleGameInLibrary function to Game Card

- Contains the getLibraryGames function
- Sends libraryGames[] to LibraryCardContainer

- Contains the requestThisGameDetail function
- Sends the requestThisGameDetail function to Card

- Contains focusedGame

- Contains the EditThisGame function to EditGameButton
