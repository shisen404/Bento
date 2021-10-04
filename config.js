// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
  // ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
  // ├┴┐├─┤└─┐││  └─┐
  // └─┘┴ ┴└─┘┴└─┘└─┘

  // General
  name: 'Ugnes',
  imageBackground: true,
  openInNewTab: true,
  twelveHourFormat: false,

  // Greetings
  greetingMorning: 'Good morning!',
  greetingAfternoon: 'Good afternoon,',
  greetingEvening: 'Good evening,',
  greetingNight: 'Go to Sleep!',

  // Weather
  weatherKey: 'f9b9e952631581398ce41d83875db784',
  weatherIcons: 'Nord', // 'Nord', 'Dark', 'White'
  weatherUnit: 'C', // 'F', 'C'
  language: 'en', // More languages in https://openweathermap.org/current#multi

  trackLocation: true, // If false or an error occurs, the app will use the lat/lon below
  defaultLatitude: '12.971599',
  defaultLongitude: '77.594566',

  // ┌─┐┌─┐┬─┐┌┬┐┌─┐
  // │  ├─┤├┬┘ ││└─┐
  // └─┘┴ ┴┴└──┴┘└─┘

  // Links
  cards: [
    {
      id: '1',
      name: 'Github',
      icon: 'github',
      link: 'https://github.com/',
    },
    {
      id: '2',
      name: 'Mail',
      icon: 'mail',
      link: 'https://gmail.com/',
    },
    {
      id: '3',
      name: 'StackOverflow',
      icon: 'server',
      link: 'https://stackoverflow.com/',
    },
    {
      id: '4',
      name: 'Youtube',
      icon: 'youtube',
      link: 'https://www.youtube.com/',
    },
    {
      id: '5',
      name: 'Reddit',
      icon: 'bookmark',
      link: 'https://reddit.com',
    },
    {
      id: '6',
      name: 'AI StackExchange',
      icon: 'server',
      link: 'https://ai.stackexchange.com/',
    },
    {
      id: '7',
      name: 'GitLab',
      icon: 'gitlab',
      link: 'https://about.gitlab.com/',
    },
    {
      id: '8',
      name: 'LinkedIn',
      icon: 'linkedin',
      link: 'https://www.linkedin.com/',
    },
    {
      id: '9',
      name: 'Medium',
      icon: 'book-open',
      link: 'https://medium.com/',
    },
  ],

  // ┬  ┬┌─┐┌┬┐┌─┐
  // │  │└─┐ │ └─┐
  // ┴─┘┴└─┘ ┴ └─┘

  //Icons
  firstListIcon: 'instagram',
  secondListIcon: 'monitor',

  // Links
  lists: {
    firstList: [
      {
        name: 'LinkedIn',
        link: 'https://www.linkedin.com/',
      },
      {
        name: 'WhatsApp',
        link: 'https://web.whatsapp.com/',
      },
      {
        name: 'Amazon',
        link: 'https://www.amazon.in/',
      },
      {
        name: 'SofaScore',
        link: 'https://www.sofascore.com/',
      },
    ],
    secondList: [
      {
        name: 'StackOverflow',
        link: 'https://stackoverflow.com/',
      },
      {
        name: 'AI StackExchange',
        link: 'https://ai.stackexchange.com/',
      },
      {
        name: 'Information Security',
        link: 'https://security.stackexchange.com/',
      },
      {
        name: 'Unix & Linux',
        link: 'https://unix.stackexchange.com/',
      },
    ],
  },
};
