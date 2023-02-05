# COMPONENTS

## HEADER - All pages

## DETAIL CARD CONTAINER

- Receives a focusedGame from Context
- Receives libraryGames[] from Context

## DETAIL CARD

### ADD / REMOVE TO LIBRARY BUTTON

- Receives the toggleGameInLibrary function from Context

## CONTEXT PROVIDER

- Contains the getLibraryGames function
- Sends libraryGames[] to CardContainer

- Contains the toggleGameInLibrary function
- Sends the toggleGameInLibrary function to Game Card
