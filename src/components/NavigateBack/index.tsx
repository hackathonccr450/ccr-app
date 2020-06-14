import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';
import { Feather as Icon } from '@expo/vector-icons';

const NavigateBack: React.FC = () => {
  const navigation = useNavigation();

  function handleNavigateBack(): void {
    navigation.goBack();
  }

  return (
    <TouchableOpacity onPress={handleNavigateBack}>
      <Icon name="arrow-left" size={30} color="#34cb79" />
    </TouchableOpacity>
  );
};

export default NavigateBack;
