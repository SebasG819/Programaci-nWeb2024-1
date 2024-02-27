import React, { useState, useEffect } from "react";
import "./Body.css";

import { Buton } from "../Button/Button";
import { Counter } from "../Counter/Counter";
import { Win } from "../../Constants/WinnerClip";
import { fail } from "../../Constants/FailClip";

export const Body = () => {
    const [currentCounter, setCurrentCounter] = useState(0);
    const [randomVideo, setRandomVideo] = useState(null);
    const [lastVideoIndex, setLastVideoIndex] = useState(null);

    useEffect(() => {
        if (randomVideo) {
            const videoElement = document.getElementById("random-video");
            videoElement.load(); 
            videoElement.play(); 
        }
    }, [randomVideo]);

    const selectRandomVideo = (type) => {
        const videos = type === "subtract" ? fail : Win;
        let randomIndex;
        if (lastVideoIndex === null || lastVideoIndex === videos.length - 1) {
            randomIndex = Math.floor(Math.random() * videos.length);
        } else {
            randomIndex = (lastVideoIndex + 1) % videos.length;
        }
        setRandomVideo(videos[randomIndex].clip);
        setLastVideoIndex(randomIndex);
    };

    const changeCounter = (type) => {
        if (type === "add") {
            setCurrentCounter(currentCounter + 1);
            selectRandomVideo("add");
        } else if (type === "subtract" && currentCounter > 0) {
            setCurrentCounter(currentCounter - 1);
            selectRandomVideo("subtract");
        } else if (type === "reset") {
            setCurrentCounter(0);
            setRandomVideo(null);
            setLastVideoIndex(null);
        }
    };

    return (
        <section className="container">
            <section className="show-video">
                {randomVideo && (
                    <video id="random-video" width="320" height="240" controls>
                        <source src={randomVideo} type="video/mp4" />
                        Tu navegador no soporta el elemento de video.
                    </video>
                )}
            </section>
            <section className="teams">
                <section className="team-1">
                    <section className="info-team">
                        <Counter count={currentCounter} />
                    </section>
                    <section className="buttons-div">
                        <Buton title="-" type="subtract" onClick={() => changeCounter("subtract")} />
                        <Buton title="Reset" type="reset" onClick={() => changeCounter("reset")} />
                        <Buton title="+" type="add" onClick={() => changeCounter("add")} />
                    </section>
                </section>
            </section>
        </section>
    );
};


