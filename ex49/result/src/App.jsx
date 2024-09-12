import { useState } from "react";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Result from "./components/Result";
function InstallmentCalculator() {
  const [value, setValue] = useState({
    loanAmount: 0,
    interestRate: 0,
    months: 0,
  });

  function handleChange(name, e) {
    setValue({
      ...value,
      [name]: parseInt(e.target.value),
    });
  }

  const isMonths = value.months > 0;

  return (
    <>
      <Header />
      <UserInput handleChange={handleChange} value={value} />
      {!isMonths && <p>상환 기간을 입력해주세요.</p>}
      {isMonths && <Result input={value} />}
    </>
  );
}

export default InstallmentCalculator;
