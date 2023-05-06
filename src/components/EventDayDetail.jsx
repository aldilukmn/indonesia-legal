import { formatDate } from "../utils/data";

function EventDayDetail({ date, agenda }) {
  const formattedDate = formatDate(date);
  return (
    <table className="table table-striped">
      <thead class="bg-dark text-white">
        <tr>
          <th class="text-center" colspan="3">
            {formattedDate}
          </th>
        </tr>
      </thead>
      <tbody>
        {agenda.map((agenda) => (
          <tr>
            <td class="time">{agenda.time}</td>
            <td class="topics">{agenda.topic}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default EventDayDetail;
