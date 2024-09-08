import { calculateInstallments } from "../utils/installment";

export default function Result({ input }) {
  const data = calculateInstallments(input);
  return (
    <div className="result">
      <h3>상환 내역:</h3>
      <table border="1">
        <thead>
          <tr>
            <th>월</th>
            <th>이자</th>
            <th>원금</th>
            <th>총 상환 금액</th>
          </tr>
        </thead>
        <tbody>
          {data.map((installment) => (
            <tr key={installment.month}>
              <td>{installment.month}월</td>
              <td>{installment.interest} 원</td>
              <td>{installment.principal} 원</td>
              <td>{installment.total} 원</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
