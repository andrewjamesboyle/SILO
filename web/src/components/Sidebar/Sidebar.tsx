import DrawFeature from '../DrawFeature/DrawFeature'
import ProcessDataComponent from '../ProcessData/ProcessData'
import SearchDataComponent from '../SearchData/SearchData'

const Sidebar = () => {
  return (
    <div>
      <ProcessDataComponent />
      <SearchDataComponent />
      <DrawFeature />
    </div>
  )
}

export default Sidebar
