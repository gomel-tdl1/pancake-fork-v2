import React from "react";
import Svg from "../Svg/Svg";
import { SvgProps } from "../Svg/types";

const SpinnerIcon: React.FC<SvgProps> = (props) => {
  return (
    // eslint-disable-next-line react/style-prop-object,react/destructuring-assignment
    <Svg xmlns="http://www.w3.org/2000/svg" height={props.width} viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" {...props}>
      <g><circle cx="73.801" cy="68.263" fill="#e15b64" r="3">
        <animateTransform attributeName="transform" type="rotate" calcMode="spline" values="0 50 50;360 50 50" keySplines="0.5 0 0.5 1" repeatCount="indefinite" dur="1.3157894736842106s" begin="0s" />
      </circle><circle cx="68.263" cy="73.801" fill="#f47e60" r="3">
        <animateTransform attributeName="transform" type="rotate" calcMode="spline" values="0 50 50;360 50 50" keySplines="0.5 0 0.5 1" repeatCount="indefinite" dur="1.3157894736842106s" begin="-0.062s" />
      </circle><circle cx="61.481" cy="77.716" fill="#f8b26a" r="3">
        <animateTransform attributeName="transform" type="rotate" calcMode="spline" values="0 50 50;360 50 50" keySplines="0.5 0 0.5 1" repeatCount="indefinite" dur="1.3157894736842106s" begin="-0.125s" />
      </circle><circle cx="53.916" cy="79.743" fill="#abbd81" r="3">
        <animateTransform attributeName="transform" type="rotate" calcMode="spline" values="0 50 50;360 50 50" keySplines="0.5 0 0.5 1" repeatCount="indefinite" dur="1.3157894736842106s" begin="-0.187s" />
      </circle><circle cx="46.084" cy="79.743" fill="#849b87" r="3">
        <animateTransform attributeName="transform" type="rotate" calcMode="spline" values="0 50 50;360 50 50" keySplines="0.5 0 0.5 1" repeatCount="indefinite" dur="1.3157894736842106s" begin="-0.25s" />
      </circle><circle cx="38.519" cy="77.716" fill="#6492ac" r="3">
        <animateTransform attributeName="transform" type="rotate" calcMode="spline" values="0 50 50;360 50 50" keySplines="0.5 0 0.5 1" repeatCount="indefinite" dur="1.3157894736842106s" begin="-0.312s" />
      </circle><circle cx="31.737" cy="73.801" fill="#637cb5" r="3">
        <animateTransform attributeName="transform" type="rotate" calcMode="spline" values="0 50 50;360 50 50" keySplines="0.5 0 0.5 1" repeatCount="indefinite" dur="1.3157894736842106s" begin="-0.375s" />
      </circle><circle cx="26.199" cy="68.263" fill="#6a63b6" r="3">
        <animateTransform attributeName="transform" type="rotate" calcMode="spline" values="0 50 50;360 50 50" keySplines="0.5 0 0.5 1" repeatCount="indefinite" dur="1.3157894736842106s" begin="-0.437s" />
      </circle><animateTransform attributeName="transform" type="rotate" calcMode="spline" values="0 50 50;0 50 50" keySplines="0.5 0 0.5 1" repeatCount="indefinite" dur="1.3157894736842106s" /></g>
    </Svg>
);
};

export default SpinnerIcon;
