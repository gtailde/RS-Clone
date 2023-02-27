import "./style.css";

import implementsUserProfilePage from "./pages/userProfilePage/userProfilePage";
import implementsAuthorizationPage from "./pages/authorizationPage/authorizationPage";
import implementsSignUpPage from "./pages/signUpPage/signUpPage";
import mainPages from "./pages/mainPage/mainPage";

if (window.localStorage.getItem('userDataAccess')?.includes('id')) {
  mainPages.draw();

} else {
  implementsSignUpPage.draw();
}
