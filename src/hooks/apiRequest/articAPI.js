/* eslint-disable no-console */
import { fetchArticAPI } from '../formHelper/articAPI';

export const getData = async page => {
  try {
    return await fetchArticAPI(
      'GET',
      `artworks?page=${page}&limit=15&fields=id,title,image_id,credit_line,inscriptions,provenance_text,publication_historyexhibition_history,_score`,
      {},
    );
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getDetailData = async id => {
  try {
    return await fetchArticAPI(
      'GET',
      `artworks/${id}?fields=id,title,image_id,credit_line,inscriptions,provenance_text,publication_historyexhibition_history,_score`,
      {},
    );
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const searchDataArt = async query => {
  try {
    return await fetchArticAPI(
      'GET',
      `artworks/search?q=${query}&fields=id,title,image_id,credit_line,inscriptions,provenance_text,publication_historyexhibition_history,_score`,
      {},
    );
  } catch (error) {
    console.log(error);
    throw error;
  }
};
