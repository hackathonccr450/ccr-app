import React, { useState, useEffect } from 'react';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import { useNavigation } from '@react-navigation/native';

import { Container, Background, Logo, Name, Slogan } from './styles';

const fetchFonts = () => {
  return Font.loadAsync({
    'robotica-ttf': require('../../assets/fonts/Robotica.ttf'),
    'norwester-otf': require('../../assets/fonts/norwester.otf'),
  });
};

const SplashScreen: React.FC = () => {
  const navigation = useNavigation();
  const [redirect, setRedirect] = useState(3);
  const [dataLoadded, setDataLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      let countDown = redirect;
      countDown -= 1;
      setRedirect(countDown);
    }, 1000);

    if (redirect < 1) {
      navigation.navigate('Home');
    }
  }, [redirect, navigation]);

  if (!dataLoadded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
      />
    );
  }

  return (
    <Container>
      <Background
        style={{ resizeMode: 'contain', zIndex: -1 }}
        source={require('../../assets/background.png')}
      />
      <Logo source={require('../../assets/logo.png')} />
      <Name style={{ fontFamily: 'robotica-ttf' }}>Tubarao da estrada</Name>
      <Slogan>{`O seu\n companheiro virtual`}</Slogan>
    </Container>
  );
};

export default SplashScreen;
