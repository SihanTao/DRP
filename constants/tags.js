const STUDY_PLACE_TAGS = [
    { name: "study space", color: "#f43", active: false },
    { name: "silent", color: "#484", active: false },
    { name: "group", color: "#E91", active: false },
    { name: "quiet", color: "#9C2", active: false },
];

const TOILET_TAGS = [
    { name: "accessible", color: "#f43", active: false },
    { name: 'male', color: "#484", active: false },
    { name: 'female', color: "#E91", active: false },
];

const CAFE_TAGS = [
    { name: "breakfast", color: '#f43', active: false },
    { name: 'lunch', color: '#484', active: false },
    { name: 'afternoon tea', color: '#E91', active: false },
    { name: 'supper', color: '#9C2', active: false }
];

const ALL_TAGS = [...STUDY_PLACE_TAGS, ...TOILET_TAGS, ...CAFE_TAGS];

export { STUDY_PLACE_TAGS, ALL_TAGS, TOILET_TAGS, CAFE_TAGS };