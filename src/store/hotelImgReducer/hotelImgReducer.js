const initialState = {
  hotels: [
    'https://cdn.fishki.net/upload/post/201502/25/1441729/tn/otel-pacuare-lodge-provincija-limon-kosta-rika.jpg',
    'https://s3.nat-geo.ru/images/2020/8/24/838129212c96449e9685cf7a5ff71915.max-2000x1000.jpg',
    'https://100dorog.ru/upload/contents/432/2021/7177438-Shest_neobychnykh_ot12422951.jpg?width=795&scale=both',
    'https://invme-s3.s3.amazonaws.com/835_3500_s139_oml2ca',
    'https://content.skyscnr.com/m/1079dbb48d775539/original/window-3178666_1920.jpg',
  ],
};

const hotelImgReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    default:
      return state;
  }
};

export default hotelImgReducer;
