import api from "./index";
import refreshToken from "./refreshToken";

const BASE_URL = "/api";
const headers = {
  "Content-Type": "multipart/form-data",
};

export default {
  async getMyArticles(page = 0, limit = 15) {
    const response = await refreshToken.checkToken();
    // const { data } = await api.get(`${BASE_URL}/article/home-issues`);
    const { data } = await api.post(
  `${BASE_URL}/v1/search/test`,
  {
    query: "부동산 아파트 빌라 상가 오피스텔 부동산투자 매매 임대차 시세 전세 월세 매매가 주택청약 부동산분양 재개발 종부세 집값",
    limit: 10,
    page: 0,
  }
);

    
    return data;
  },
};
