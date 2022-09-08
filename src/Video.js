import React from "react";
import "./Video.css";

const Video = () =>{
    return (
        <div className="video">
            <video
            className="video__player"
            loop
            src="https://v16-webapp.tiktok.com/667dc3fd8395930001b9cef3900607da/63196337/video/tos/useast2a/tos-useast2a-ve-0068c002/c29e88f792444b0a89cf95b00f7ac977/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=4162&bt=2081&cs=0&ds=3&ft=gKSYZ8xuo0PD1hjy.yg9wwX2O5LiaQ2D~pT&mime_type=video_mp4&qs=0&rc=NmU6NGlpOGllNzgzNjo6ZEBpamQ6cDs6ZjZnZjMzNzczM0AvNi82MGAvNS4xXzBfMWI0YSNrbzAzcjQwZWBgLS1kMTZzcw%3D%3D&l=202209072134050101910360441A52519C&btag=80000"
            />
            {/* {videofooter} */}
            {/* {videoheader} */}
        </div>
    )
}
export default Video;