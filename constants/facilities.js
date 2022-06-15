const facilities = [
    {
        name: 'Central Library',
        category: {
            STUDY: true,
            SILENT: true,
            GROUP: true,
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
        category: {
            STUDY: true,
            SILENT: true,
            GROUP: true,
            QUIET: false,
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
        category: {
            STUDY: true,
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
    },
];

export default facilities;