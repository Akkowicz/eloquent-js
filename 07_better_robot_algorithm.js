const robotBrain = {
    parcelAddress: [],
    parcelPlace: []
};

function closestFirst({ place, parcels }, route) {
    currentLocationUpdate(robotBrain, parcels, place);
    if (route.length === 0) {
        route = pickup(robotBrain, parcels, place) || deliver(robotBrain, parcels, place);
    }
    return { direction: route[0], memory: route.slice(1) };
}

function currentLocationUpdate(brain, parcels, place) {
    brain.parcelAddress = brain.parcelAddress.filter(a => a !== place);
    brain.parcelPlace.push(place);
}

function pickup(brain, parcels, place) {
    const closest = searchForClosest(brain.parcelPlace, parcels, place, 'place');
    if (closest) {
        return findRoute(roadGraph, place, closest.place);
    }
    return null;
}

function deliver(brain, parcels, place) {
    const closest = searchForClosest(brain.parcelAddress, parcels, place, 'address');
    if (closest) {
        return findRoute(roadGraph, place, closest.address);
    }
    return null;
}

function searchForClosest(brain, parcels, place, mode) {
    let minDistance = Infinity;
    let closest = null;
    if (mode === 'place') {
        parcels = parcels.filter(p => !brain.includes(p[mode]));
    }
    for (let parcel of parcels) {
        let checkRoute = getDistance(place, parcel[mode]);
        if (checkRoute < minDistance) {
            minDistance = checkRoute;
            closest = parcel;
        }
    }
    return closest;
}

function getDistance(from, to) {
    return findRoute(roadGraph, from, to).length;
}
