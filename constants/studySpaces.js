const SILENTSTUDY = 'Silent Study';
const GROUPSTUDY = 'Group Study';
const QUIETSTUDY = 'Quiet Study';

const studySpaces = [
    {
        name: 'Central Library',
        category: {
            GROUPSTUDY,
            SILENTSTUDY,
            QUIETSTUDY
        },
        description:
            'Silent study - levels 2 and 3\n' +
            'Quiet study - levels 1, 4 and 5\n' +
            'Group study - level 1\n' +
            'Height adjustable desks - levels 2 and 3\n',
        photo: '',
        rating: 4,
        numRatings: 0,
    }, {
        name: 'GoStudy Space',
        category: {
            SILENTSTUDY,
            GROUPSTUDY
        },
        description:
            'Silent Study: Chemistry Building Rooms 460, 537\n' +
            'Group Study: Chemistry Building Rooms 430, 444, 538, 561',
        numRatings: 0,
        rating: 5,
    }, {
        name: "Computing Lab",
        category: { GROUPSTUDY },
        description: "Huxluy Building 219...",
        rating: 0,
        numRatings: 0,
        photo: '',
        url: 'https://www.imperial.ac.uk/computing/csg/facilities/lab/'
    }
];

export default studySpaces;