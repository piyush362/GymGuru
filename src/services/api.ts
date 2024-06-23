import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPart/back',
  params: {
    limit: '20',
    offset: '0',
  },
  headers: {
    'x-rapidapi-key': 'e24f8b184dmsh0d5768d1644a650p1ce7f1jsn05866457d77e',
    'x-rapidapi-host': 'exercisedb.p.rapidapi.com',
  },
};

export const fetchDataByBodyParts = async (bodyPart: string) => {
  try {
    const localData = await AsyncStorage.getItem(bodyPart);

    if (localData !== null) {
      console.log('__LOCAL DATA__');
      return JSON.parse(localData);
    } else {
      const response = await axios.request(options);
      console.log('__API DATA__');
      AsyncStorage.setItem(bodyPart, JSON.stringify(response.data));
      return response?.data;
    }
  } catch (error) {
    console.error(error);
  }
};
