import PropTypes from "prop-types";

export default function MultipleLocations({ arr, handleClick }) {
  const locations = arr.map((obj, index) => {
    return (
      <tr className="border-2 border-stone-50 text-base" key={index}>
        <td className="p-2 text-white border-2 border-stone-50">{obj.name}</td>
        <td className="p-2 text-white border-2 border-stone-50">
          {obj.country}
        </td>
        <td>
          <a
            onClick={() => handleClick(obj)}
            className="bg-transparent hover:bg-blue-500 text-slate-300 underline font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          >
            Click to View
          </a>
        </td>
      </tr>
    );
  });
  return (
    <div>
      <p className="text-xl text-center font-semibold pb-3 text-slate-50">
        Please choose your Location
      </p>
      <table className="text-lg table-auto border-2 border-stone-50">
        <thead className="text-white border-2 border-stone-50">
          <tr className="border-2 border-stone-50">
            <th className="p-2 border-2 border-stone-50">City</th>
            <th className="p-2 border-2 border-stone-50">Country</th>
            <th></th>
          </tr>
        </thead>
        <tbody>{locations}</tbody>
      </table>
    </div>
  );
}

MultipleLocations.propTypes = {
  arr: PropTypes.array,
  handleClick: PropTypes.func,
};
