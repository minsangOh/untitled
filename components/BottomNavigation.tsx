import React, { useState } from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import S from './NavigationStyle';

function Navigation() {
  const [activeNavi, setActiveNavi] = useState('home');

  const handlePress = (navi: string) => {
    setActiveNavi(navi);
  };

  const naviItems = [
    { id: 'home', label: '홈', defaultColor: '#475467', activeColor: '#2FB551', icon: require('../assets/home.png') },
    { id: 'dictionary', label: '작물 도감', defaultColor: '#475467', activeColor: '#2FB551', icon: require('../assets/dictionary.png') },
    { id: 'cropDiagnosis', label: '작물 진단', defaultColor: '#475467', activeColor: '#2FB551', icon: require('../assets/cropDiagnosis.png') },
    { id: 'market', label: '장터', defaultColor: '#475467', activeColor: '#2FB551', icon: require('../assets/market.png') },
    { id: 'profile', label: '프로필', defaultColor: '#475467', activeColor: '#2FB551', icon: require('../assets/home.png') },
  ];

  return (
    <S.Container>
      {naviItems.map((item) => (
        <TouchableWithoutFeedback key={item.id} onPress={() => handlePress(item.id)}>
          <S.Item>
            <S.Icon source={item.icon} color={activeNavi === item.id ? item.activeColor : item.defaultColor} />
            <S.Label color={activeNavi === item.id ? item.activeColor : item.defaultColor}>{item.label}</S.Label>
          </S.Item>
        </TouchableWithoutFeedback>
      ))}
    </S.Container>
  );
}

export default Navigation;
