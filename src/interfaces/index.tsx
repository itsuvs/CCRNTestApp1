export interface LocationItem{
    id: number,
    location_name: string,
    time: string
}

export interface StoreObject{
    locationArray: LocationItem[],
    currentLocation: LocationItem
}

export interface UserCoordinates{
    lat: number,
    lng: number
}