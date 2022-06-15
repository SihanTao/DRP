// {
//     name: '',
//     STUDY: {
//         GROUP: false,
//         SILENT: false,
//         QUIET: false
//     },
//     TOILET: {

//     },
//     description: '',
//     rating: 0,
//     numRatings: 0,
//     photo: 'https://img.freepik.com/free-vector/hand-painted-watercolor-abstract-watercolor-background_23-2149009911.jpg?t=st=1655295086~exp=1655295686~hmac=90db0776302b140ac19514cea8b2da216eb8367ab5b602c20e9b288eecb2c55a&w=1380',
//     location: '',
//     openingHour: '',
//     url: '',
// }

const facilities = [
    {
        name: 'Central Library',
        STUDY: {
            GROUP: true,
            SILENT: true,
            QUIET: true
        },
        description:
            'Silent study - levels 2 and 3\n' +
            'Quiet study - levels 1, 4 and 5\n' +
            'Group study - level 1\n' +
            'Height adjustable desks - levels 2 and 3\n',
        photo: 'https://www.imperial.ac.uk/media/migration/administration-and-support-services/0000-191111-autumn-library-queens-lawn-018_1635242587445_x2.jpg',
        url: 'https://www.imperial.ac.uk/admin-services/library/use-the-library/our-libraries/central-library/',
        location: '',
        openingHour: '',
        rating: 4,
        numRatings: 0,
    }, {
        name: 'GoStudy Space',
        STUDY: {
            GROUP: true,
            SILENT: true,
            QUIET: false
        },
        description:
            'Silent Study: Chemistry Building Rooms 460, 537\n' +
            'Group Study: Chemistry Building Rooms 430, 444, 538, 561',
        photo: 'https://pxl-imperialacuk.terminalfour.net/fit-in/959x430/prod01/channel_2/media/migration/administration-and-support-services/211029-gostudy-spaces-rm537-001_1635779844596_x4.jpg',
        url: 'https://www.imperial.ac.uk/admin-services/library/use-the-library/our-libraries/gostudy/',
        location: '',
        openingHour: '',
        numRatings: 0,
        rating: 5,
    }, {
        name: "Computing Lab",
        STUDY: {
            GROUP: true,
            SILENT: false,
            QUIET: false
        },
        description: "Huxluy Building 219...",
        rating: 0,
        numRatings: 0,
        photo: 'https://www.imperial.ac.uk/ImageCropToolT4/imageTool/uploaded-images/IMG_20151110_122250365--tojpeg_1447160413584_x2.jpg',
        location: '',
        openingHour: '',
        url: 'https://www.imperial.ac.uk/computing/csg/facilities/lab/'
    }, {
        name: 'Toilet Huxley 227',
        TOILET: true,
        description: "Huxluy Building 219...",
        rating: 0,
        numRatings: 0,
        photo: 'https://img.freepik.com/free-vector/hand-painted-watercolor-abstract-watercolor-background_23-2149009911.jpg?t=st=1655295086~exp=1655295686~hmac=90db0776302b140ac19514cea8b2da216eb8367ab5b602c20e9b288eecb2c55a&w=1380',
        location: '',
        openingHour: '',
        url: ''
    }, 
];

export default facilities;