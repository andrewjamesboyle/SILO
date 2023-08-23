import ProcessDataComponent from "src/components/ProcessData/ProcessData";
import SearchDataComponent from "src/components/SearchData/SearchData";

type MapLayoutProps = {
  children?: React.ReactNode;
};

const MapLayout = ({ children }: MapLayoutProps) => {
  return (
  <>
    <main>{children}</main>
  </>
  )
};

export default MapLayout;
