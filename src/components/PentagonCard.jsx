// PentagonCard.jsx
export default function PentagonCard({ title, image, description }) {
    return (
      <div className="pentagon-card">
        <img src={image} alt={title} className="pentagon-image" />
        <div className="pentagon-content">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    );
  }
  