import * as React from "react";
import FeatureCard from "../FeatureCard";
import * as styles from "./styles.module.scss";

const Features = ({ features }) => {
  return (
    <div className={styles.features}>
      <div className="flex flex-wrap justify-center">
        {features.allFeaturesJson.edges.map((feature, idx) => {
          // console.log(feature.node.imgUrl.publicURL)
          return (
            <React.Fragment key={idx}>
              <FeatureCard
                desc={feature.node.description}
                nChild={1}
                heading={feature.node.heading}
                imgUrl={feature.node.imgUrl.publicURL}
              />
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default Features;
