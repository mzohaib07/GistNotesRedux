import axios from "axios";

//auth user API loginng in
const BASE_URL = "https://api.github.com";
const PAT = "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";
const userName = "Zohaibkhattak15";

export const loginAuthUser = async (userName) => {
  const authUserRecord = await axios
    .get(`${BASE_URL}/users/${userName}`)
    .then((data) => data?.data);
  return authUserRecord;
};

export const publicGistsRecord = async () => {
  const publicGistsRecords = await axios
    .get(`${BASE_URL}/gists?per_page=10`)
    .then((data) => data?.data);
  return publicGistsRecords;
};

export const getPublicGist = async (id) => {
  const getPublicGistObj = await axios
    .get(`${BASE_URL}/gists/${id}`, {
      id: id,
    })
    .then((data) => data.data);
  return getPublicGistObj;
};

export const privateGistsRecord = async () => {
  const privateGistsRecord = await axios
    .get(`${BASE_URL}/gists?per_page=10`, {
      headers: {
        Authorization: `Basic ${btoa(`${userName}:${PAT}`)}`,
      },
    })
    .then((data) => data.data);
  return privateGistsRecord;
};

// const checkGistStar = async () => {
//     const checkGistStared = await axios(`${BASE_URL}/gists/${GIST_ID}/star`)
// }

export const createAGist = async (data) => {
  const json = JSON.stringify(data);
  const createGist = axios
    .post(`${BASE_URL}/gists`, json, {
      headers: {
        Authorization: `Basic ${btoa(`${userName}:${PAT}`)}`,
      },
    })
    .then((data) => data.data);
};

export const delAGist = async (id) => {
  const delAGist = axios
    .delete(`${BASE_URL}/gists/${id}`, {
      headers: {
        Authorization: `Basic ${btoa(`${userName}:${PAT}`)}`,
      },
    })
    .then((data) => data.data);
    return delAGist;
};

export const updateAGist = async (id, disp) => {
  const updateGists = await axios.patch(
    `${BASE_URL}/gists/${id}`,
    {
      id: id,
      description: disp,
    },
    {
      headers: {
        Authorization: `Basic ${btoa(`${userName}:${PAT}`)}`,
      },
    }
  ).then(data => console.log(data));
  return updateGists;
};
export const getGistObj = async (id) => {
    const getGists = await axios.get(
        `${BASE_URL}/gists/${id} `,
        {
            headers: {
              Authorization: `Basic ${btoa(`${userName}:${PAT}`)}`,
            },
          }
      ).then(data => data.data);
      return getGists;
}
