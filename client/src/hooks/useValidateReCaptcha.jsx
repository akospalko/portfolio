import axios from 'axios';

const useValidateReCaptcha = () => {
  const validateReCaptcha = async (token) => {
    //store validation result
    let isCaptchaValid = false;
    let errorMessage = '';
    //token validation 
    if(token) { 
      //post data to server
      await axios.post("/captcha", {token: token})
      //successful response from server
      .then(res => {
        // console.log('Validation result: ', res.data.success);
        isCaptchaValid = res.data.success;
        errorMessage = res.data.responseMsg
      })
        //error response from server
      .catch((err)=> {
        // console.log('Couldn\'t send token to server:', err);
        isCaptchaValid = false;
        errorMessage = err;
      })
    } 
    else {
      isCaptchaValid = false;
      errorMessage = 'no token';
    } 
    return { isCaptchaValid, errorMessage }; // return validation result (true || false)
  }
  return { validateReCaptcha };
}
export default useValidateReCaptcha;