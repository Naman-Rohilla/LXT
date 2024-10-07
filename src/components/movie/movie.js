import LxtButton from "../buttons/lxtButton";
import "./movie.scss";

export default function Movie() {
  return (
    <div className="movie">
      <div
        // src="https://www.youtube.com/watch?v=OOevVQwQ-LM"
        className="element"
        // allow="autoplay; fullscreen; picture-in-picture"
      >
        {" "}
      </div>
      <div className="movie-text">
        <span>Dream Builder</span>
        <span className="movie-text-heading">Rahul Rane</span>
        <span className="movie-text-subheading">
          Managing Director at LAZERXTECH
        </span>
        <span className="movie-text-description">
          They are there to serve as an adviser, an assessor, a counsellor, a
          demonstrator, friend, mentor, an endless fountain of wisdom and
          knowledge, role model, your manager and your number one supporter.
        </span>
        <span className="movie-buttons">
          <LxtButton text={"READ MORE"} color={"red"} />
          <LxtButton
            text={"BECOME A COACH"}
            color={"transparent"}
            borderColor={"white"}
          />
        </span>
      </div>
    </div>
  );
}
