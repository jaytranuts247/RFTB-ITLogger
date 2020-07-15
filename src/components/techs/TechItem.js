import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteTech } from "../../actions/techActions";

const TechItem = ({ tech, deleteTech }) => {
	const onDelete = () => {
		deleteTech(tech.id);
	};

	return (
		<li className="collection-item">
			<div>
				{tech.firstName} {tech.lastName}
				<a onClick={onDelete} href="#!" className="secondary-content">
					<i className="material-icons grey-text">delete</i>
				</a>
			</div>
		</li>
	);
};

TechItem.propTypes = {
	tech: PropTypes.object.isRequired,
	deleteTech: PropTypes.func.isRequired,
};

export default connect(null, { deleteTech })(TechItem);
