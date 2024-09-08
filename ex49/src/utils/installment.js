export const calculateInstallments = ({ interestRate, months, loanAmount }) => {
  const monthlyRate = interestRate / 100 / 12;
  const installmentList = [];

  for (let i = 1; i <= months; i++) {
    const interest = loanAmount * monthlyRate;
    const principal = loanAmount / months;
    const monthlyPayment = interest + principal;

    installmentList.push({
      month: i,
      interest: interest.toFixed(2),
      principal: principal.toFixed(2),
      total: monthlyPayment.toFixed(2),
    });
  }

  return installmentList;
};
