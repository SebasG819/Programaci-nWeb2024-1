import React, { useState } from "react";
import "./Body.css"

import { Buton } from "../Button/Button";
import { Counter } from "../Counter/Counter";
import { Win } from "../../Constants/WinnerClip";
import { fail } from "../../Constants/FailClip";

export const Body = () => {
    const [currentCounter, setCurrentCounter] = useState(0);
    const [randomVideo, setRandomVideo] = useState(null);

    const selectRandomVideo = (type) => {
        const videos = type === "fail" ? fail : Win;
        const randomIndex = Math.floor(Math.random() * videos.length);
        setRandomVideo(videos[randomIndex].clip);
    };

    const changeCounter = (type) => {
        if (type === "add") {
            setCurrentCounter(currentCounter + 1);
            selectRandomVideo("win");
        } else if (type === "subtract" && currentCounter > 0) {
            setCurrentCounter(currentCounter - 1);
            selectRandomVideo("fail");
        } else if (type === "reset") {
            setCurrentCounter(0);
            setRandomVideo(null);
        }
    };


    return (
        <>
        <section className="container">
            <section className="show-video">
                {randomVideo && (
                    <video width="320" height="240" controls>
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
                    <Buton title="-" type="subtract" onClick={() => { changeCounter("subtract"); selectRandomVideo("fail"); }}></Buton>
                        <Buton title="Reset" type="reset" onClick={() => changeCounter("reset")}></Buton>
                        <Buton title="+" type="add" onClick={() => { changeCounter("add"); selectRandomVideo("win"); }}></Buton>
                    </section>
                </section>
            </section>
        </section>
        </>

    );
};



