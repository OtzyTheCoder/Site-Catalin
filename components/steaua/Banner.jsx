import Breadcrumb from "../breadcrumb/Breadcrumb";
import SmallBanner from "../common/SmallBanner";

const Banner = () => {
  return (
    <SmallBanner title="Bazinul Steaua">
      <Breadcrumb
        breadcrumbs={[
          ["Home", "/"],
          ["Bazinul Steaua", "/"],
        ]}
      />
    </SmallBanner>
  );
};

export default Banner;
