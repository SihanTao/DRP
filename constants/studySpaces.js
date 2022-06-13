const SILENTSTUDY = 'Silent Study';
const GROUPSTUDY = 'Group Study';
const QUIETSTUDY = 'Quiet Study';

const studySpaces = [
    {
        name: 'Central Library Group Study',
        category: {GROUPSTUDY},
        description: 'Level 1',
        photo: '',
        rating: 4,
        numRatings: 0, 
    }, {
        name: 'Central Library Quiet Study',
        category: {QUIETSTUDY},
        description: 'Levels 1,4,5',
        photo:'',
        numRatings: 0, 
        rating: 3,
    }, {
        name: 'Central Library Silent Study',
        category: {SILENTSTUDY},
        description: 'Levels 2 and 3',
        numRatings: 0, 
        rating: 5,
    }, {
        name: 'GoStudy Silent Study',
        category: {SILENTSTUDY},
        description: 'Chemistry Building Rooms 460, 537',
        numRatings: 0, 
        rating: 5,
    }, {
        name: 'GoStudy Group Study',
        category: {GROUPSTUDY},
        description: 'Chemistry Building Rooms 430, 444, 538, 561',
        numRatings: 0, 
        rating: 5,
    }
];

export default studySpaces;