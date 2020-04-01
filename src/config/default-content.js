const assetsPath = process.env.ASSETS_PATH;

const defaultContent = {
  fullHeader: {
    coverUrl: `${assetsPath}/covers/nurse.jpg`,
  },
  joinInvite: {
    preTitle: '#Clap2020 #ClapBecauseWeCare',
    title: 'They fight. We applaud.',
    subtitle: 'Across the globe, healthcare workers challenge the menace of COVID-19. Join us to raise a thundering applause for doctors, nurses, first responders, essential workers, and society.',
    dateText: {
      day: 'Thursday',
      date: 'April 23',
      time: '7:00 PM',
    },
  },
  thisIsWar: {
    coverUrl: `${assetsPath}/covers/mask.jpg`,
    conditions: [
      {
        icon: 'coffin-cross',
        title: 'Fallen as Heroes',
        subtitle: '',
      },
      {
        icon: 'head-side-cough',
        title: 'Working in Danger',
        subtitle: '',
      },
      {
        icon: 'stretcher',
        title: 'Fighting the Front',
        subtitle: '',
      },
      {
        icon: 'lungs-virus',
        title: 'Forced to Triage',
        subtitle: '',
      },
      {
        icon: 'door-open',
        title: 'Fired for Truth',
        subtitle: '',
      },
    ],
    quotes: [
      {
        text: 'Our health care systems are at war with a pandemic virus.',
        author: {
          name: 'Craig R. Smith',
          title: 'Surgeon-In-Chief, NewYork-Presbyterian Hospital',
        },
      },
    ],
  },
};

export default defaultContent;
