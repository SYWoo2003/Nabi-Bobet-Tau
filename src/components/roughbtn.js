import React from 'react';
import styled from 'styled-components';

import ReactPlayer from 'react-player'

import musicdata from '../data/musicdata.json';

const Roughbtn = ({ }) => {

    const [musiclink, setMusicLink] = React.useState('')

    function musicChange(e) {
        setMusicLink(e.target.value);
    }


    const Listoption = ({ label, value }) => {
        return (
            <>
                <option value={value}>
                    {label}
                </option>
            </>
        )
    }

    return (
        <>

            <select
                onChange={musicChange}>
                <option value="" selected hidden>Select</option>
                {
                    musicdata.map(({ label, value }) => (
                        <Listoption
                            label={label}
                            value={value} />
                    ))
                }

            </select >

            <ReactPlayer
                url={musiclink}
                playing
                controls='true'
                loop='true'
                height="50px" />
        </>
    )
}

export default Roughbtn;