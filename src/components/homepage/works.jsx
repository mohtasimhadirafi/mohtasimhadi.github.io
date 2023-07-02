import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./facebook.png"
								alt="facebook"
								className="work-image"
							/>
							<div className="work-title">Intelligent Machines Limited</div>
							<div className="work-subtitle">
								Analytics Engineer
							</div>
							<div className="work-duration">April, 2022 - Present</div>
						</div>

						<div className="work">
							<img
								src="./twitter.png"
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">Sunshine National School</div>
							<div className="work-subtitle">
								Mathematics Instructor
							</div>
							<div className="work-duration">November, 2019 - December, 2019</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
