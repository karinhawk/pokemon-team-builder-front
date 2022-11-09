# Pokémon Team Builder

<img src="./src/assets/frontend1.png" height="150px"/>
<h3>This website is yet to be deployed</h3>

## Table of Contents
- [Brief](#brief)
- [About](#about)
- [Screenshots](#screenshots)
- [Languages](#languages)
- [Code of Note](#code_of_note)
- [Bugs to fix](#bugs_to_fix)


## Brief <a name = "brief"></a>

1. Built entirely in React
2. Repository on GitHub
3. Use the Punk API (after using the data file first) (https://punkapi.com/)
4. Search functionality
5. Filter functionality:    -High Alcohol (ABV value greater than 6%)
                            ; Classic Range (Was first brewed before 2010)
                            ; High Acidity (pH lower than 4) 
4. Test where possible (RTL)

## About <a name = "about"></a>

An app built entirely in React which showcases different beers from Brewdog. Built using PunkAPI, an open-source API of Brewdog beers. The list of beers has been mapped to the interface, and can be searched through via a searchbox, and filtered using checkboxes. The beers can be filtered by the classics range, high ABV content, and high acidity. Only one filter can be applied at a time. A beer can be clicked on to access more information about it through routing to a new page. The Card component and the FilterItem component have been tested using the React Testing Library.

## Screenshots <a name = "screenshots"></a>

<img src="./src/images/screenshot1.png" height="150px"/>
<img src="./src/images/screenshot2.png" height="150px"/>
<img src="./src/images/screenshot3.png" height="150px"/>

## Languages <a name = "languages"></a>

- ReactJs (Rendering HTML components)
- SCSS

## Code of Note <a name = "code_of_note"></a>

- useState()
- useEffect()
- useParam()
- search/filter
- Routing

## Bugs to fix <a name = "bugs_to_fix"></a>

- Cannot refresh whilst on specific beer page (fix: could implement a state)