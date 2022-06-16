function updateIdObject(id) {
    let idObject;

    switch (id) {
        case 'study_space':
            idObject = {
                studySpace: true,
            };
            break;
        case 'toilet':
            idObject = {
                toilet: true,
            };
            break;
        case 'cafe':
            idObject = {
                cafe: true,
            };
            break;
        case 'water_fountain':
            idObject = {
                waterfountain: true,
            };
            break;
        default:
            idObject = {};
            break;
    }
    return idObject;
}

export { updateIdObject };