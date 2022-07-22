import {fetchArticAPI} from '../formHelper/articAPI';

export const getData = async page => {
  try {
    return await fetchArticAPI('GET', `artworks?page=${page}&limit=15`, {});
  } catch (error) {
    throw error;
  }
};

export const getDetailData = async id => {
  try {
    return await fetchArticAPI('GET', `artworks/${id}`, {});
  } catch (error) {
    throw error;
  }
};

export const searchDataArt = async query => {
  try {
    return await fetchArticAPI('GET', `artworks/search?q=${query}`, {});
  } catch (error) {
    throw error;
  }
};
