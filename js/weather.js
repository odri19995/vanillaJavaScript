function onGeoOk(position) {
    const lat = position.coords.latitude; //위도
    const lng = position.coords.longitude; //경도
    console.log("You live in", lat, lng);
    console.log(position);
  }
  function onGeoError() {
    alert("Can't find you. No weather for you.");
  }
  
  navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);//브라우저에서 위치를 준다.(정상실행,에러가났을 때)