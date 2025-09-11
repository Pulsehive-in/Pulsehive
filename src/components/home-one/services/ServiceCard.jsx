import { Link } from "react-router-dom";
import ArrowRightImg from "../../../assets/images/icon/arrow-right.svg";
function ServiceCard({ service: { title, description, icon ,navigatePage} }) {
	return (
		<div className="aximo-iconbox-wrap">
			<div className="aximo-iconbox-icon">
				<i className={`${icon}`}></i>
			</div>
			<div className="aximo-iconbox-data">
				<h3>{title}</h3>
				<p>{description}</p>
				<Link to={`/${navigatePage}`} className="aximo-icon">
					<img src={ArrowRightImg} alt="arrow right" />
				</Link>
			</div>
		</div>
	);
}

export default ServiceCard;
