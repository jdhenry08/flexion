export const convert: (
  n: number,
) => Record<string, { to: Record<string, number> }> = (n) => {
  return {
    Kelvin: {
      to: {
        Kelvin: n,
        Celsius: n - 273.15,
        Fahrenheit: (n - 273.15) * (9 / 5) + 32,
        Rankine: n * (9 / 5),
      },
    },
    Celsius: {
      to: {
        Kelvin: n + 273.15,
        Celsius: n,
        Fahrenheit: n * (9 / 5) + 32,
        Rankine: n * (9 / 5) + 491.67,
      },
    },
    Fahrenheit: {
      to: {
        Kelvin: (n - 32) * (5 / 9) + 273.15,
        Celsius: (n - 32) * (5 / 9),
        Fahrenheit: n,
        Rankine: n + 459.67,
      },
    },
    Rankine: {
      to: {
        Kelvin: n * (5 / 9),
        Celsius: (n - 491.67) * (5 / 9),
        Fahrenheit: n - 459.67,
        Rankine: n,
      },
    },
    liters: {
      to: {
        liters: n,
        tablespoons: n * 67.628,
        "cubic-inches": n * 61.024,
        cups: n * 4.227,
        "cubic-feet": n / 28.317,
        gallons: n / 3.785,
      },
    },
    tablespoons: {
      to: {
        liters: n / 67.628,
        tablespoons: n,
        "cubic-inches": n / 1.108,
        cups: n / 16,
        "cubic-feet": n / 1915,
        gallons: n / 256,
      },
    },
    "cubic-inches": {
      to: {
        liters: n / 61.024,
        tablespoons: n * 1.108,
        "cubic-inches": n,
        cups: n / 14.438,
        "cubic-feet": n / 1728,
        gallons: n / 231,
      },
    },
    cups: {
      to: {
        liters: n / 4.227,
        tablespoons: n * 16,
        "cubic-inches": n * 14.438,
        cups: n,
        "cubic-feet": n / 119.7,
        gallons: n / 16,
      },
    },
    "cubic-feet": {
      to: {
        liters: n * 28.317,
        tablespoons: n * 1915,
        "cubic-inches": n * 1728,
        cups: n * 119.7,
        "cubic-feet": n,
        gallons: n * 7.481,
      },
    },
    gallons: {
      to: {
        liters: n * 3.785,
        tablespoons: n * 256,
        "cubic-inches": n * 231,
        cups: n * 16,
        "cubic-feet": n / 7.481,
        gallons: n,
      },
    },
  };
};
