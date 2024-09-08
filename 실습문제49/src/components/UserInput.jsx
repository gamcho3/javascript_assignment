export default function UserInput({ handleChange, value }) {
  return (
    <div className="user-input">
      <label htmlFor="loan">대출금액</label>
      <input
        type="number"
        id="loan"
        value={value.loanAmount}
        onChange={(e) => handleChange("loanAmount", e)}
        placeholder="대출 금액"
      />
      <label htmlFor="rate">이자율</label>
      <input
        type="number"
        id="rate"
        value={value.interestRate}
        onChange={(e) => handleChange("interestRate", e)}
        placeholder="이자율 (%)"
      />
      <label htmlFor="months">상환기간</label>
      <input
        type="number"
        id="months"
        value={value.months}
        onChange={(e) => handleChange("months", e)}
        placeholder="상환 기간 (개월)"
      />
    </div>
  );
}
