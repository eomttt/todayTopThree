import { Navigation } from 'react-native-navigation';

import MainPage from '../pages/Main';
import SettingPage from '../pages/Setting';

const registerScreens = () => {
    Navigation.registerComponent('Main', () => MainPage);
    Navigation.registerComponent('Setting', () => SettingPage)
}

export default registerScreens;