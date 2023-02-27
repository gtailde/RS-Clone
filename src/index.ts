import "./style.css";

import implementsUserProfilePage from "./pages/userProfilePage/userProfilePage";
import implementsAuthorizationPage from "./pages/authorizationPage/authorizationPage";
import implementsSignUpPage from "./pages/signUpPage/signUpPage";

if (window.localStorage.getItem('userDataAccess')?.includes('id')) {
  const data = JSON.parse(window.localStorage.getItem('userDataAccess')!);
  const startUserProfilePage = new implementsUserProfilePage(data.id);
  startUserProfilePage.draw();
} else {
  implementsSignUpPage.draw();
}