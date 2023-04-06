import React from "react";

type LocationState = {
  loaded: boolean;
  coordinates: { longitude: string; latitude: string };
  error?: { code: number; message: string }; // Added optional error property
};

const useGeoLocation = () => {
  const [location, setLocation] = React.useState<LocationState>({
    loaded: false,
    coordinates: { longitude: "", latitude: "" },
  });

  const onSuccess = (location: {
    coords: { latitude: any; longitude: any };
  }) => {
    setLocation({
      loaded: true,
      coordinates: {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      },
    });
  };

  const onError = (error: { code: number; message: string }) => {
    setLocation({
      loaded: true,
      coordinates: { longitude: "", latitude: "" }, // Reset coordinates when there's an error
      error,
    });
  };

  React.useEffect(() => {
    if (!("geolocation" in navigator)) {
      onError({
        code: 0,
        message: "Geolocation not supported",
      });
    }

    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  }, []);

  return location;
};

export default useGeoLocation;
