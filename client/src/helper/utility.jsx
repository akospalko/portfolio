//storage for utility functions


//find anchor link obj to populate navigation anchor tag
export const findAnchorLink = (navigationData, itemToFind) => {
  let anchorObj = {}
  navigationData.find((elem) => {
    if(elem.name === itemToFind) {
      anchorObj = elem;    
    }
  })
  return anchorObj; 
}