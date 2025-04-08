import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height: '300px',
};

const center = {
    lat: 4.6486259,
    lng: -74.2478965,
};

export default function DealershipMap() {
    return (
        <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}>
            <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={13}>
                <Marker position={center} />
            </GoogleMap>
        </LoadScript>
    );
}
