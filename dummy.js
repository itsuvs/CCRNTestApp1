import {getCoordinates, reverseGeoCode} from './src/apis/locationApi';
const key = "f12155f225d94d9988b2ae4ffd5fd4fd";

const appState = useRef(AppState.currentState);
  const [appStateVisible, setAppStateVisible] = useState(appState.current);

  const requestLocationPermission = async () => {
    
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        
        console.log('Location permision granted!');
        
        let coordinateResponse = await getCoordinates();
        let reverseGeoCodeResponse = await reverseGeoCode(
          coordinateResponse.lat,
          coordinateResponse.lng,
          key,
        );
        console.log(reverseGeoCodeResponse.data.results[0].formatted);
      } else {
        console.log('Location permission denied!');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  useEffect(() => {

    // const subscription = AppState.addEventListener("change", nextAppState => {
    //   const toBeCalled = setInterval(function () {console.log('Hello')}, 2000);

    //   if (appState.current === "active"){
    //     console.log("App has come to the foreground!");
    //   }
    //   else{
    //     clearInterval(toBeCalled)
    //   }

    //   appState.current = nextAppState;
    //   setAppStateVisible(appState.current);
    //   console.log("AppState", appState.current);
    // });

    // return () => {
    //   subscription.remove();
    // };
// ////////////////////////////////////////////////////////////////////////////////////////
    // let toBeCalled
    // if (appState.current === 'active'){
    //     toBeCalled = setInterval(function () {console.log('Hello')}, 4000);
    // }
    // else{
    //   clearInterval(toBeCalled)
    // }

    // const requestLocationPermission = async () => {
    //   try {
    //     const granted = await PermissionsAndroid.request(
    //       PermissionsAndroid.PERMISSIONS.LOCATION,
    //       {
    //         title: "Cool Photo App Camera Permission",
    //         message:
    //           "Cool Photo App needs access to your camera " +
    //           "so you can take awesome pictures.",
    //         buttonNeutral: "Ask Me Later",
    //         buttonNegative: "Cancel",
    //         buttonPositive: "OK"
    //       }
    //     );
    //     if (granted === PermissionsAndroid.RESULTS.GRANTED) {
    //       console.log("You can use the camera");
    //     } else {
    //       console.log("Camera permission denied");
    //     }
    //   } catch (err) {
    //     console.warn(err);
    //   }
    // };

    // requestLocationPermission()

  }, []);