const assetsPath = process.env.ASSETS_PATH;

const defaultContent = {
  fullHeader: {
    coverUrl: `${assetsPath}/covers/nurse.jpg`,
  },
  joinInvite: {
    preTitle: '#Clap2020 #ClapBecauseWeCare',
    title: 'They fight. We applaud.',
    subtitle: 'The hour is grave. The war is raging. Across the globe, healthcare workers challenge the menace of COVID-19. Join us to raise a thundering applause for doctors, nurses, first responders, essential workers, and society.',
    dateText: {
      day: 'Thursday',
      date: 'April 23',
      time: '7:00 PM',
    },
  },
};

export default defaultContent;
