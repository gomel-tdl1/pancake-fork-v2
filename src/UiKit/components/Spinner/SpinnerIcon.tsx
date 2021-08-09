import React from "react";
import LoaderGif from '../../../assets/mainframe/loooader.gif'

type PropsType = {
    width: string
}
const SpinnerIcon: React.FC<PropsType> = ({width}) => {
    return (
        <img src={LoaderGif} alt='' style={{width}}/>
    );
};

export default SpinnerIcon;
