import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import ChatListPage from './src/pages/chat-list-page';
import LoginPage from './src/pages/login-page';
import SplashPage from './src/pages/splash-page';
import ChatRoomPage from './src/pages/chat-room-page';
import ChatInfoPage from './src/pages/chat-info-page';
import ProfilePage from './src/pages/profile-page';
import OnboardingOnePage from './src/pages/onboarding-one-page';
import OnboardingTwoPage from './src/pages/onboarding-two-page';
import OnboardingThreePage from './src/pages/onboarding-three-page';
import OnboardingFourPage from './src/pages/onboarding-four-page';
import NewProfilePage from './src/pages/new-profile-page';
import UploadPage from './src/pages/upload-page';
import UploadPageTwo from './src/pages/upload-two-page';
import HomePage from './src/pages/home-page';

const navigator = createStackNavigator(
  {
    Login: LoginPage,
    ChatList: ChatListPage,
    Splash: SplashPage,
    ChatRoom: ChatRoomPage,
    ChatInfo: ChatInfoPage,
    Profile: ProfilePage,
    OnboardingOne: OnboardingOnePage,
    OnboardingTwo: OnboardingTwoPage,
    OnboardingThree: OnboardingThreePage,
    OnboardingFour: OnboardingFourPage,
    NewProfile: NewProfilePage,
    Upload: UploadPage,
    UploadTwo: UploadPageTwo,
    Home: HomePage,
   
  },
  {
    initialRouteName: "Login",
    defaultNavigationOptions: {
      title: "Love Star"
    }
  }
);

export default createAppContainer(navigator);