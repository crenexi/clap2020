const CalendarService = () => {
  const toURI = str => encodeURI(str);
  const alphaNumeric = str => str.match(/[A-Z1-9]/gi);

  /* Generate Google Calendar URL */
  const googleLink = (options = {}) => {
    const { title, startDate, endDate, location, body } = options;

    const baseUrl = 'https://calendar.google.com/calendar/r/eventedit';
    const dates = `${alphaNumeric(startDate)}/${alphaNumeric(endDate)}`;

    const query = (() => {
      const params = [
        'action=TEMPLATE',
        `text=${toURI(title)}`,
        `dates=${dates}`,
        `location=${toURI(location)}`,
        `details=${toURI(body)}`,
        `sprops=website:www.clap2020.com`,
        `sprops=name:Clap2020`,
      ];

      return params.reduce((a, v) => `${a}&${v}`, '?');
    });

    return `${baseUrl}?${query}`;
  };

  /* Generate Apple Calendar URL */
  const icsLink = (options = {}) => {
    return options;
  };

  /* Generate Live/Outlook Calendar URL */
  const liveLink = (options = {}) => {
    return options;
  };

  /* Generate Yahoo Calendar URL */
  const yahooLink = (options = {}) => {
    return options;
  };

  return {
    googleLink,
    icsLink,
    liveLink,
    yahooLink,
  };
};

export default new CalendarService();
