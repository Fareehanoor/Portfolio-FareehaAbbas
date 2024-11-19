import PropTypes from "prop-types";

const ServicesCard = ({ desc, label, classes }) => {
  return (
    <div
      className={
        "flex items-center gap-3 ring-2 ring-inset ring-zinc-50/10 rounded-2xl p-3 hover:bg-zinc-800 transition-colors group " +
        classes
      }
    >
      <div>
        <h2>{label}</h2>
        <p className="text-zinc-400 text-sm ">{desc}</p>
      </div>
    </div>
  );
};

ServicesCard.propTypes = {
  desc: PropTypes.string,
  label: PropTypes.string,
  classes: PropTypes.string,
};

export default ServicesCard;
