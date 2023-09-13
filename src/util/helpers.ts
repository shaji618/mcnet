export const currencyFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

export const getCurrentDate = () => {
  const todaysDate = new Date();
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };

  return {
    formatted: todaysDate.toLocaleDateString(
      'en-US',
      // @ts-ignore
      options
    ),
    month: todaysDate.getMonth(),
    year: todaysDate.getFullYear()
  };
};
