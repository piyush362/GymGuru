import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const header1 = {
  'x-rapidapi-key': 'e24f8b184dmsh0d5768d1644a650p1ce7f1jsn05866457d77e',
  'x-rapidapi-host': 'exercisedb.p.rapidapi.com',
};

const header2 = {
  'x-rapidapi-key': '352ed01f25mshfa26beb1474b8c0p12b22ajsn225009152585',
  'x-rapidapi-host': 'exercisedb.p.rapidapi.com',
};

export const fetchDataByBodyParts = async (bodyPart: string) => {
  try {
    const localData = await AsyncStorage.getItem(bodyPart);

    if (localData !== null) {
      console.log('__LOCAL DATA__');
      return JSON.parse(localData);
    } else {
      const randomHeaders = Math.random() < 0.5 ? header1 : header2;

      const url = `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`;
      const response = await axios.request({
        method: 'GET',
        url: url,
        params: {
          limit: '20',
          offset: '0',
        },
        headers: randomHeaders,
      });
      console.log('__API DATA__');
      AsyncStorage.setItem(bodyPart, JSON.stringify(response.data));
      return response?.data;
    }
  } catch (error) {
    console.error(error);
  }
};
