import { google, yahoo } from 'calendar-link';

const CalendarService = () => {
  const createLink = (options = {}) => {
    const { event, to } = options;

    switch (to) {
      case 'google':
        return google(event);
      case 'apple':
        return '';
      case 'yahoo':
        return yahoo(event);
      default:
        return '';
    }
  };

  return { createLink };
};

export default new CalendarService();
