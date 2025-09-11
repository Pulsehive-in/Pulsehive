import BreadCrumb from "../../components/common/Breadcrumb";
import Projects from "../../components/home-one/projects";
import VideoEditingPortfolio from "../../components/portfolio/single/VideoEditingPortfolio";
function VideoEditingDetails() {
	return (
		<>
			<BreadCrumb title="Video Editing" />
			<VideoEditingPortfolio />
			<Projects />
		</>
	);
}

export default VideoEditingDetails;
