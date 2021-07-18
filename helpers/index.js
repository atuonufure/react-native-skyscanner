const timeFrom = daysCount => {
  const dates = [];
  for (let i = 0; i < Math.abs(daysCount); i++) {
    dates.push(
      new Date(
        new Date().getTime() -
          (daysCount >= 0 ? i : i - i - i) * 24 * 60 * 60 * 1000,
      ).toLocaleString(),
    );
  }
  return dates;
};

export const days = timeFrom(-11).map(el => {
  const months = month => {
    switch (month) {
      case 'Jan':
        return '01';
      case 'Feb':
        return '02';
      case 'Mar':
        return '03';
      case 'Apr':
        return '04';
      case 'May':
        return '05';
      case 'Jun':
        return '06';
      case 'Jul':
        return '07';
      case 'Aug':
        return '08';
      case 'Sep':
        return '09';
      case 'Oct':
        return '10';
      case 'Nov':
        return '11';
      case 'Dec':
        return '12';
      default:
        return 'error';
    }
  };
  const year = String(el).slice(20);
  const month = months(String(el).slice(4, 7));
  const day = String(el).slice(8, 10);
  return `${year}-${month}-${day}`;
});

export const formattedDate = date => {
  const takeYear = date.slice(0, 4);
  const takeDay = date.slice(8, 10);
  const takeMonth = () => {
    const month = date.slice(5, 7);
    switch (month) {
      case '01':
        return `${takeDay} January, ${takeYear}`;
      case '02':
        return `${takeDay} February, ${takeYear}`;
      case '03':
        return `${takeDay} March, ${takeYear}`;
      case '04':
        return `${takeDay} April, ${takeYear}`;
      case '05':
        return `${takeDay} May, ${takeYear}`;
      case '06':
        return `${takeDay} June, ${takeYear}`;
      case '07':
        return `${takeDay} July, ${takeYear}`;
      case '08':
        return `${takeDay} August, ${takeYear}`;
      case '09':
        return `${takeDay} September, ${takeYear}`;
      case '10':
        return `${takeDay} October, ${takeYear}`;
      case '11':
        return `${takeDay} November, ${takeYear}`;
      case '12':
        return `${takeDay} December, ${takeYear}`;
      default:
        return `${takeDay} error, ${takeYear}`;
    }
  };

  return takeMonth();
};

export const formattedPrice = price => {
  if (price > 99999) {
    return String(price).slice(0, 3) + ' ' + String(price).slice(-3);
  } else if (price > 9999) {
    return String(price).slice(0, 2) + ' ' + String(price).slice(-3);
  } else if (price > 999) {
    return String(price).slice(0, 1) + ' ' + String(price).slice(-3);
  } else {
    return price;
  }
};
