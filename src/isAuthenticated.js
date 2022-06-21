import getCookie from './getCookie';

function isAuthenticated() {
  var checkCookie = getCookie('my-token');
  if(checkCookie != null){
    return true;
  } else {
    return false;
  };
};
export default isAuthenticated;