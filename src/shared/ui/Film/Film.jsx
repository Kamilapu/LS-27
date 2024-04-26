import PropTypes from "prop-types";

export const Film = ({ film }) => {
	const handleUnFavorite = () => {
		console.log('handleUnFavorite');
	}
	return (
		<div className="film">
			<img className="img-film" src={film.image} alt={film.title} />
			<div className="film-info">
				<div className="film-title">
					{film.title}
				</div>
				<div className="film-desc">
					{film.year}
					{film.genre}
				</div>
			</div>
			{film.isFavorited && <div onClick={handleUnFavorite}> UnCheck favorite</div>}
		</div>
	);
};

Film.propTypes = {
	film: PropTypes.object,
};
