const KAKAO_KEY="c5b3c8b5020db7071056e75fb6aaaad7";

const KAKAO_REDIRECT_URL="https://auth.expo.io/FE/api/v1/auth/login";


export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_KEY}&redirect_uri=${KAKAO_REDIRECT_URL}&response_type=code`