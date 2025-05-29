function calculateTax(income) {
  if (income <= 250000) return 0;
  if (income <= 500000) return (income - 250000) * 0.05;
  if (income <= 1000000) return (250000 * 0.05) + (income - 500000) * 0.2;
  return (250000 * 0.05) + (500000 * 0.2) + (income - 1000000) * 0.3;
}

const userIncome = 750000;
const taxAmount = calculateTax(userIncome);
console.log(`Tax on ₹${userIncome} is ₹${taxAmount}`);
