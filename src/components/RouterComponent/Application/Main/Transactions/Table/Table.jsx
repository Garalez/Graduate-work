import style from './Table.module.scss';

export const Table = () => {
  return (
    <section className={style.historyWrapper}>
      <h2 className={style.historyTitle}>История переводов</h2>
      <div className={style.historyTableBackground}>
        <div className={style.historyTableWrapper}>
          <table className={style.historyTable}>
            <thead className={style.historyTableThead}>
              <tr className={style.historyTableRow}>
                <th className={style.historyTableHeading}>Счет</th>
                <th className={style.historyTableHeading}>Сумма</th>
                <th className={style.historyTableHeading}>Дата</th>
              </tr>
            </thead>
            <tbody>
              <tr className={style.historyTableRow}>
                <td className={style.historyTableCell}>2843746737</td>
                <td className={style.historyTableCell}>+2389</td>
                <td className={style.historyTableCell}>23.04.2022</td>
              </tr>
              <tr className={style.historyTableRow}>
                <td className={style.historyTableCell}>9383874484</td>
                <td className={style.historyTableCell}>+384</td>
                <td className={style.historyTableCell}>10.03.2022</td>
              </tr>
              <tr className={style.historyTableRow}>
                <td className={style.historyTableCell}>9388484949</td>
                <td className={style.historyTableCell}>-23</td>
                <td className={style.historyTableCell}>12.01.2022</td>
              </tr>
              <tr className={style.historyTableRow}>
                <td className={style.historyTableCell}>2327473848</td>
                <td className={style.historyTableCell}>+7689</td>
                <td className={style.historyTableCell}>03.01.2022</td>
              </tr>
              <tr className={style.historyTableRow}>
                <td className={style.historyTableCell}>0349823828</td>
                <td className={style.historyTableCell}>+11094</td>
                <td className={style.historyTableCell}>01.01.2022</td>
              </tr>
              <tr className={style.historyTableRow}>
                <td className={style.historyTableCell}>2234884943</td>
                <td className={style.historyTableCell}>+234</td>
                <td className={style.historyTableCell}>15.12.2021</td>
              </tr>
              <tr className={style.historyTableRow}>
                <td className={style.historyTableCell}>6754859385</td>
                <td className={style.historyTableCell}>-340</td>
                <td className={style.historyTableCell}>05.12.2021</td>
              </tr>
              <tr className={style.historyTableRow}>
                <td className={style.historyTableCell}>4785645679</td>
                <td className={style.historyTableCell}>+15949</td>
                <td className={style.historyTableCell}>30.11.2021</td>
              </tr>
              <tr className={style.historyTableRow}>
                <td className={style.historyTableCell}>2843746737</td>
                <td className={style.historyTableCell}>+5094</td>
                <td className={style.historyTableCell}>27.11.2021</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
