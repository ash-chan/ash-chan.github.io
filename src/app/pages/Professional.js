import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './Professional.css'
import WorkIcon from '@material-ui/icons/Work';
import StarIcon from '@material-ui/icons/Star';
import SchoolIcon from '@material-ui/icons/School';

export default class Professional extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        return(
            <VerticalTimeline layout="1-column">
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#6ABEE6', color: '#000' }}
                    contentArrowStyle={{ borderRight: '10px solid  #049FD9' }}
                    date="Summer 2019"
                    iconStyle={{ background: '#049FD9', color: '#fff' }}
                    icon={<WorkIcon/>}
                >
                    <h3 className="vertical-timeline-element-title main-header">Cisco Systems, San Jose</h3>
                    <h4 className="vertical-timeline-element-subtitle sub-header">Software Engineering Intern</h4>
                    <p>
                        At Cisco, I collaborated with 4 other software engineers to develop an enterprise project-tracking
                        platform from the ground-up using React and Node.js.
                        The website is currently used daily by Cisco employees across 17
                        different countries to manage over 200 projects. I also integrated a dashboard which includes
                        an internal network metrics monitoring system built upon Prometheus and a customizable
                        real-time twitter feed using sockets.
                    </p>
                </VerticalTimelineElement>,
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    contentStyle={{ background: '#e6756a', color: '#000' }}
                    contentArrowStyle={{ borderRight: '10px solid  #f55742' }}
                    date="Aug 2018 - May 2019"
                    iconStyle={{ background: '#e6756a', color: '#fff' }}
                    icon={<SchoolIcon />}
                >
                    <h3 className="vertical-timeline-element-title main-header">
                        University of California, Berkeley
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle sub-header">Overseas Attachment</h4>
                    <p>I was selected to attend a concurrent year-long overseas attachment at the highly prestigious
                        UC Berkeley CS faculty as part of the Renaissance Engineering Programme. </p>
                </VerticalTimelineElement>,
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    contentStyle={{ background: '#e6756a', color: '#000' }}
                    contentArrowStyle={{ borderRight: '10px solid  #f55742' }}
                    date="Aug 2016 - Present"
                    iconStyle={{ background: '#e6756a', color: '#fff' }}
                    icon={<SchoolIcon />}
                >
                    <h3 className="vertical-timeline-element-title main-header">
                        Nanyang Technological University, Singapore
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle sub-header">Renaissance Engineering Programme</h4>
                    <p>I was enrolled into the Renaissance Engineering Programme, a Premier Scholar's Programme of NTU.
                    In my second year, I started my specialization in computer engineering. </p>
                </VerticalTimelineElement>,
                <VerticalTimelineElement
                    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                    icon={<StarIcon />}
                />,

            </VerticalTimeline>
        );
    }
}