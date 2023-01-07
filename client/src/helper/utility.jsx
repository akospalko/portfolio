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

//build input fields from contact form data
export const buildForm = (formElements) => {
  const formStructure = [];
  for(let element in formElements) {
    formStructure.push({id: element, config: formElements[element]});
  }
  return formStructure;
} 

// transform form data to a simple object only containing the input field name and its value
 export const getFormValues = (formElements) => {

 }