import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './components/screens/HomeScreen';

const Navigation = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
});

export default createAppContainer(Navigation);
